// Private fields are used to declare instance-specific private properties within a class.
// Static fields are used to define properties that are shared across all instances of a class.

class BankAccount {
  static bankName = 'RBI'
  #accountNumber;
  #balance;

  constructor(accountNumber, initialBalance) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount} into account ${this.#accountNumber}.`);
    } else {
      console.error("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.#accountNumber}.`);
    } else {
      console.error("Invalid withdrawal amount or insufficient balance.");
    }
  }

  checkBalance() {
    console.log(`Account ${this.#accountNumber} balance: ${this.#balance}`);
  }
}

let account1 = new BankAccount("123456789", 1000);
account1.checkBalance(); // Output: Account 123456789 balance: 1000
account1.deposit(500); // Output: Deposited 500 into account 123456789.
account1.withdraw(200); // Output: Withdrawn 200 from account 123456789.
account1.checkBalance(); // Output: Account 123456789 balance: 1300

// This will result in an error since it's a private field
// --> console.log(account1.#balance); // Error: Private field '#balance' is not accessible outside class


let account2 = new BankAccount("6969", 69)
console.log(BankAccount.bankName) // RBI