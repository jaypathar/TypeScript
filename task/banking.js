// defining class for different operations
var Bank = /** @class */ (function () {
    function Bank() {
        this.users = [];
        this.transactions = [];
        this.accounts = [];
    }
    Bank.prototype.createUser = function (user) {
        var newUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        };
        this.users.push(newUser);
    };
    Bank.prototype.updateUser = function (user) {
    };
    Bank.prototype.deleteUser = function (userId) {
    };
    Bank.prototype.createAccount = function (userId) {
        var newAccount = {
            id: this.accounts.length + 1,
            userId: userId,
            balance: 0,
        };
        this.accounts.push(newAccount);
    };
    Bank.prototype.closeAccount = function (accountId) {
        var account = this.accounts.find(function (a) { return a.id === accountId; });
        if (account) {
            if (account.balance >= 0) {
                console.log("Account ID ".concat(accountId, " has been closed."));
            }
            else {
                console.log("Account balance is negative. Account cannot be closed.");
            }
        }
        else {
            console.log("Account not found.");
        }
    };
    Bank.prototype.withdraw = function (accountId, amount) {
        var account = this.accounts.find(function (a) { return a.id === accountId; });
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;
                var transaction = {
                    id: this.transactions.length + 1,
                    userId: account.userId,
                    amount: amount,
                    type: 'withdrawal',
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
    Bank.prototype.deposit = function (accountId, amount) {
        var account = this.accounts.find(function (a) { return a.id === accountId; });
        if (account) {
            account.balance += amount;
            var transaction = {
                id: this.transactions.length + 1,
                userId: account.userId,
                amount: amount,
                type: 'deposit',
            };
            this.transactions.push(transaction);
        }
    };
    Bank.prototype.transfer = function (sourceAccountId, destinationAccountId, amount) {
        var sourceAccount = this.accounts.find(function (a) { return a.id === sourceAccountId; });
        var destinationAccount = this.accounts.find(function (a) { return a.id === destinationAccountId; });
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
    Bank.prototype.viewPassbook = function (userId) {
        var user = this.users.find(function (u) { return u.id === userId; });
        if (user) {
            var userTransactions = this.transactions.filter(function (t) { return t.userId === userId; });
            if (userTransactions.length > 0) {
                console.log("Passbook for User ID: ".concat(userId));
                console.log("Transaction ID | Amount | Type");
                for (var _i = 0, userTransactions_1 = userTransactions; _i < userTransactions_1.length; _i++) {
                    var transaction = userTransactions_1[_i];
                    console.log("".concat(transaction.id, " | ").concat(transaction.amount, " | ").concat(transaction.type));
                }
            }
            else {
                console.log("No transactions found for this user.");
            }
        }
        else {
            console.log("User not found.");
        }
    };
    Bank.prototype.calculateInterest = function (accountId) {
        var account = this.accounts.find(function (a) { return a.id === accountId; });
        if (account) {
            var balance = account.balance;
            var interestRate = 0.01; // assuming a fixed interest rate of 1% per year
            var startDate = new Date(); // assuming interest calculation starts from today
            var endDate = new Date(); // assuming interest calculation ends today
            var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // converting milliseconds to days
            var interest = balance * (interestRate / 365) * daysDiff; // calculating daily interest
            var newBalance = balance + interest;
            account.balance = newBalance;
            console.log("Interest of ".concat(interest.toFixed(2), " has been added to Account ID ").concat(accountId, ". New balance is ").concat(newBalance.toFixed(2), "."));
        }
        else {
            console.log("Account not found.");
        }
    };
    return Bank;
}());
// usage example
var bank = new Bank();
var user = {
    id: 1,
    name: "Mark",
    email: "mark@gmail.com",
    password: "1234",
};
bank.createUser(user);
bank.createAccount(user.id);
bank.deposit(1, 1000);
bank.withdraw(1, 500);
bank.transfer(1, 2, 200);
bank.viewPassbook(1);
bank.closeAccount(1);
