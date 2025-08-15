class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Deposit amount must be positive!");
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be positive!");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}`);
        }
    }
}


const account = new BankAccount("123456", 5000);

document.getElementById("details").textContent = 
    `Account Number: ${account.accountNumber}, Balance: ₹${account.balance}`;

account.deposit(2000);
document.getElementById("afterDeposit").textContent = 
    `After Deposit: ₹${account.balance}`;

account.withdraw(3000);
document.getElementById("afterWithdraw").textContent = 
    `After Withdrawal: ₹${account.balance}`;
