"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing module.
var uuid_1 = require("uuid");
// defining class for different operations
var Bank = /** @class */ (function () {
    function Bank() {
        this.users = [];
        this.transactions = [];
        this.accounts = [];
    }
    // creating a user
    Bank.prototype.createUser = function (user) {
        this.users.push(user); // push directly into the array.
    };
    // creating an account.
    Bank.prototype.createAccount = function (userId) {
        // generating unique id
        var id = (0, uuid_1.v4)();
        this.accounts.push({ id: id, userId: userId, balance: 0 });
    };
    // close  an account.
    Bank.prototype.closeAccount = function (userId) {
        var accountIndex = this.accounts.findIndex(function (account) { return account.userId === userId; });
        if (accountIndex !== -1) {
            var account = this.accounts[accountIndex];
            if (account.balance >= 0) {
                this.accounts.splice(accountIndex, 1);
                console.log("Account for User ID ".concat(userId, " has been closed."));
            }
            else {
                console.log("Account balance is negative. Account cannot be closed.");
            }
        }
        else {
            console.log("Account not found.");
        }
    };
    // to withdraw amount.
    Bank.prototype.withdraw = function (accountId, amount) {
        var account = this.accounts.find(function (account) { return account.userId === accountId; });
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;
                this.transactions.push({
                    id: this.transactions.length + 1,
                    userId: account.userId,
                    amount: amount,
                    type: 'withdrawal',
                });
                console.log("$Account :".concat(account.id, " userID : ").concat(account.userId, " Balance: ").concat(account.balance));
            }
            else {
                console.log("Insufficient balance");
            }
        }
        else {
            console.log("Account not found");
        }
    };
    // to  deposit into account.
    Bank.prototype.deposit = function (accountId, amount) {
        var account = this.accounts.find(function (account) { return account.userId === accountId; });
        if (account) {
            account.balance += amount;
            this.transactions.push({
                id: this.transactions.length + 1,
                userId: account.userId,
                amount: amount,
                type: 'deposit',
            }); // push directly into array.
        }
    };
    // transfer amount from one account to other.
    Bank.prototype.transfer = function (sourceAccountId, destinationAccountId, amount) {
        var sourceAccount = this.accounts.find(function (account) { return account.userId === sourceAccountId; });
        var destinationAccount = this.accounts.find(function (account) { return account.userId === destinationAccountId; });
        if (sourceAccount && destinationAccount) {
            if (sourceAccount.balance >= amount) {
                sourceAccount.balance -= amount;
                destinationAccount.balance += amount;
                var transaction = {
                    id: this.transactions.length + 1,
                    userId: sourceAccount.userId,
                    amount: amount,
                    type: 'transfer',
                };
                this.transactions.push(transaction);
            }
            else {
                console.log("Insufficient balance");
            }
        }
        else {
            console.log("Account not found");
        }
    };
    // view list of transactions for any account.
    Bank.prototype.viewPassbook = function (userId) {
        var userTransactions = this.transactions.filter(function (transaction) { return transaction.userId === userId || (transaction.type === 'transfer' && transaction.userId !== userId); });
        return userTransactions;
    };
    // getting current balance for accounts.
    Bank.prototype.getBalance = function (userId) {
        var account = this.accounts.find(function (account) { return account.userId === userId; });
        if (account) {
            return account.balance;
        }
        else {
            console.log("Account not found");
            return 0;
        }
    };
    return Bank;
}());
// usage example
var bank = new Bank();
// user 1
var user1 = {
    id: 1,
    name: "Mark",
    email: "mark@gmail.com",
    password: "1234",
};
bank.createUser(user1);
bank.createAccount(user1.id);
bank.deposit(1, 1000);
// user 2
var user2 = {
    id: 2,
    name: "John",
    email: "john@gmail.com",
    password: "4321",
};
bank.createUser(user2);
bank.createAccount(user2.id);
bank.deposit(2, 1000);
// transfer 1000 from user 1 to user 2
bank.transfer(1, 2, 500);
// // check  if transaction has been recorded.
// console.log(bank.transactions)
// printing all accounts.
console.log(bank.accounts);
// getting  balances for both account.
console.log("User ID ".concat(user1.id, " Balance : ").concat(bank.getBalance(user1.id)));
console.log("User ID ".concat(user2.id, " Balance : ").concat(bank.getBalance(user2.id)));
// view passbook for user 1
console.log(bank.viewPassbook(1));
// view passbook for user 2
console.log(bank.viewPassbook(2));
