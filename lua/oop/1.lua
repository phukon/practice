-- http://lua-users.org/wiki/ObjectOrientationTutorial
-- a table in Lua is an object in more than one sense.like objects, tables have a state. Like objects, tables have an identity (a selfness) that is independent of their values. specifically, two objects (tables) with the same value are different objects. whereas an object can have different values at different times, but it is always the same object. like objects, tables have a life cycle that is independent of who created them or where they were created.
-- In Lua, it is trivial to implement prototypes more if we have two objects a and b, all we have to do to make b a prototype for a is
-- ``` setmetatable(a, {__index = b}) ```


-- Utility functions
local Utils = {}

function Utils.GenerateUUID()
    local template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    return string.gsub(template, '[xy]', function(c)
        local v = (c == 'x') and math.random(0, 15) or (math.random(0, 1) * 4 + 8)
        return string.format('%x', v)
    end)
end

function Utils.ValidateNumber(value, name, min, max)
    if type(value) ~= "number" then
        return nil, string.format("%s must be a number", name)
    end
    if min and value < min then
        return nil, string.format("%s cannot be less than %s", name, min)
    end
    if max and value > max then
        return nil, string.format("%s cannot be more than %s", name, max)
    end
    return true
end

function Utils.ValidateString(value, name)
    if type(value) ~= "string" or value:match("^%s*$") then
        return nil, string.format("%s must be a non-empty string", name)
    end
    return true
end

function Utils.FormatCurrency(amount)
    return string.format("%.2f", amount)
end

function Utils.FormatTimestamp(timestamp)
    return os.date("%Y-%m-%d %H:%M:%S", timestamp)
end

-- Initialize random seed
math.randomseed(os.time())

-- Transaction Logger
local TransactionLogger = {
    log_transaction = function(account, transaction_type, amount, balance_after, additional_info)
        local transaction = {
            type = transaction_type,
            amount = amount,
            timestamp = os.time(),
            balance_after = balance_after
        }

        -- Merge additional info if provided
        if additional_info then
            for k, v in pairs(additional_info) do
                transaction[k] = v
            end
        end

        table.insert(account.transaction_history, transaction)
        return transaction
    end
}

-- BASE CLASS: Account
Account = { balance = 0 }
Account.__index = Account

function Account:new(account_holder, initial_balance)
    -- Input validation
    local valid, err = Utils.ValidateString(account_holder, "Account holder name")
    if not valid then
        error(err)
    end

    if initial_balance ~= nil then
        valid, err = Utils.ValidateNumber(initial_balance, "Initial balance", 0)
        if not valid then
            error(err)
        end
    end

    local instance = setmetatable({}, self)
    instance.account_number = Utils.GenerateUUID()
    instance.account_holder = account_holder
    instance.balance = initial_balance or self.balance
    instance.created_at = os.time()
    instance.transaction_history = {}
    return instance
end

function Account:deposit(amount)
    -- Input validation
    local valid, err = Utils.ValidateNumber(amount, "Deposit amount", 0.01)
    if not valid then
        return nil, err
    end

    -- Handle potential floating-point precision issues
    amount = math.floor(amount * 100) / 100

    local success, result = pcall(function()
        self.balance = self.balance + amount
        return TransactionLogger.log_transaction(self, "deposit", amount, self.balance)
    end)

    if not success then
        return nil, "Transaction failed: " .. tostring(result)
    end

    return amount, string.format("Successfully deposited %s", Utils.FormatCurrency(amount))
end

function Account:withdraw(amount)
    -- Input validation
    local valid, err = Utils.ValidateNumber(amount, "Withdrawal amount", 0.01)
    if not valid then
        return nil, err
    end

    -- Handle potential floating-point precision issues
    amount = math.floor(amount * 100) / 100

    if amount > self.balance then
        return nil, string.format("Insufficient balance: requested %s, available %s",
            Utils.FormatCurrency(amount), Utils.FormatCurrency(self.balance))
    end

    local success, result = pcall(function()
        self.balance = self.balance - amount
        return TransactionLogger.log_transaction(self, "withdrawal", amount, self.balance)
    end)

    if not success then
        return nil, "Transaction failed: " .. tostring(result)
    end

    return amount, string.format("Successfully withdrew %s", Utils.FormatCurrency(amount))
end

function Account:get_balance()
    return self.balance, string.format("Current balance: %s", Utils.FormatCurrency(self.balance))
end

function Account:get_transaction_history()
    return self.transaction_history
end

function Account:display_transaction_history()
    if #self.transaction_history == 0 then
        return "No transactions found"
    end

    local output = string.format("\nTransaction History for Account: %s (%s)\n",
        self.account_holder, self.account_number)
    output = output .. "----------------------------------------\n"

    for _, transaction in ipairs(self.transaction_history) do
        output = output .. string.format(
            "%s | Type: %-10s | Amount: $%-10s | Balance: $%-10s",
            Utils.FormatTimestamp(transaction.timestamp),
            transaction.type,
            Utils.FormatCurrency(transaction.amount),
            Utils.FormatCurrency(transaction.balance_after)
        )

        -- Add interest rate information for interest transactions
        if transaction.type == "interest" and transaction.rate_applied then
            output = output .. string.format(" | Rate: %.2f%%", transaction.rate_applied)
        end

        output = output .. "\n"
    end

    return output
end

--DERIVED CLASS :: SAVINGS ACCOUNT
Savings_Account = setmetatable({}, { __index = Account }) -- this is what makes the inheritance work
Savings_Account.__index = Savings_Account -- instances of Savings_Account look up methods in Savings_Account
-- What's happening above
-- Ensures that the instances of Savings_Account (derived class) looks up methods in Savings_Account first before falling back to Account (Base class)

function Savings_Account:new(account_holder, initial_balance, interest_rate)
    -- Additional input validation for interest rate
    if interest_rate ~= nil then
        local valid, err = Utils.ValidateNumber(interest_rate, "Interest rate", 0, 100)
        if not valid then
            error(err)
        end
    end

    local instance = Account.new(self, account_holder, initial_balance)
    instance.interest_rate = interest_rate or 0
    instance.last_interest_applied = os.time()
    setmetatable(instance, Savings_Account)
    return instance
end

function Savings_Account:apply_interest()
    local valid, err = Utils.ValidateNumber(self.interest_rate, "Interest rate", 0)
    if not valid then
        return nil, err
    end

    if self.interest_rate <= 0 then
        return nil, "No interest rate set for this account"
    end

    local success, result = pcall(function()
        local interest = math.floor((self.balance * (self.interest_rate / 100)) * 100) / 100
        self.balance = self.balance + interest

        TransactionLogger.log_transaction(self, "interest", interest, self.balance, {
            rate_applied = self.interest_rate
        })

        self.last_interest_applied = os.time()
        return interest
    end)

    if not success then
        return nil, "Failed to apply interest: " .. tostring(result)
    end

    return result, string.format("Successfully applied interest of %s", Utils.FormatCurrency(result))
end

-- TESTS --
local function test_accounts()
    local function run_test(description, test_func)
        print("\nTesting: " .. description)
        print("-----------------")
        local status, result = pcall(test_func)
        if not status then
            print("Test failed: " .. tostring(result))
        end
        print("-----------------")
    end

    run_test("Savings Account Basic Operations", function()
        local savings = Savings_Account:new("Alice", 1000, 3.5)
        local deposit_amount, deposit_msg = savings:deposit(500)
        assert(deposit_amount, deposit_msg)
        print(deposit_msg)

        local balance, balance_msg = savings:get_balance()
        print(balance_msg)

        local interest, interest_msg = savings:apply_interest()
        assert(interest, interest_msg)
        print(interest_msg)
        print(savings:display_transaction_history())
    end)

    run_test("Regular Account Operations", function()
        local general = Account:new("Bob", 2000)
        local withdraw_amount, withdraw_msg = general:withdraw(3000)
        print(withdraw_msg)  -- Should show insufficient funds message

        -- Test successful withdrawal
        withdraw_amount, withdraw_msg = general:withdraw(500)
        assert(withdraw_amount, withdraw_msg)
        print(withdraw_msg)
        print(general:display_transaction_history())
    end)

    run_test("Error Cases", function()
        -- Test invalid account creation
        local status, err = pcall(function()
            Account:new("", -100)
        end)
        assert(not status, "Should fail with invalid parameters")

        -- Test invalid deposit
        local account = Account:new("Charlie", 100)
        local amount, msg = account:deposit(-50)
        assert(not amount, "Should fail with negative deposit")
        print(msg)
    end)
end

test_accounts()
