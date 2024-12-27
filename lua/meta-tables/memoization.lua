-- Fibonacci sequence metatable
Fibonacci = {}
Fibonacci.__index = Fibonacci

-- Constructor for creating a Fibonacci sequence object
function Fibonacci.new(n)
    -- Check if result exists in cache
    if Fibonacci[n] then
        return Fibonacci[n]
    end

    local self = setmetatable({}, Fibonacci)
    self.n = n
    self.sequence = {0, 1}  -- Initialize the first two numbers of the sequence
    self:generate()  -- Generate the Fibonacci sequence

    -- Store in cache before returning
    Fibonacci[n] = self
    return self
end

-- Method to generate the Fibonacci sequence
function Fibonacci:generate()
    for i = 3, self.n do
        self.sequence[i] = self.sequence[i - 1] + self.sequence[i - 2]
    end
end

function Fibonacci:print_sequence()
    for i = 1, self.n do
        print(self.sequence[i])
    end
end

local function fn(n)
    local start_time = os.clock()
    local fib = Fibonacci.new(n)
    -- fib:print_sequence()
    local end_time = os.clock()
    print("Time taken for Fibonacci(" .. n .. "): " .. (end_time - start_time) .. " seconds")
end

fn(100442000)
fn(100442000)
fn(500000)
fn(100442000)
fn(100442000)
fn(100442000)
