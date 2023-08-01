// defining interfaces.
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface Transaction {
    id: number;
    userId: number;
    amount: number;
    type: 'withdrawal' | 'deposit' | 'transfer';
}

interface Account {
    id: number;
    userId: number;
    balance: number;
}

// defining class for different operations
class Bank {
    private users: User[] = [];
    private transactions: Transaction[] = [];
    private accounts: Account[] = [];

    createUser(user: User): void {
        const newUser: User = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        };
        this.users.push(newUser);
    }

    createAccount(userId: number): void {
        const newAccount: Account = {
            id: this.accounts.length + 1,
            userId,
            balance: 0,
        };
        this.accounts.push(newAccount);
    }


    closeAccount(accountId: number): void {
        const account = this.accounts.find(key => key.id === accountId);
        if (account) {
            if (account.balance >= 0) {
                console.log(`Account ID ${accountId} has been closed.`);
            } else {
                console.log("Account balance is negative. Account cannot be closed.");
            }
        } else {
            console.log("Account not found.");
        }
    }


    withdraw(accountId: number, amount: number): void {
        const account = this.accounts.find(key => key.id === accountId);
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;
                const transaction: Transaction = {
                    id: this.transactions.length + 1,
                    userId: account.userId,
                    amount,
                    type: 'withdrawal',
                };
                this.transactions.push(transaction);
            } else {
                console.log("Insufficient balance");
            }
        } else {
            console.log("Account not found");
        }
    }


    deposit(accountId: number, amount: number): void {
        const account = this.accounts.find(key => key.id === accountId);
        if (account) {
            account.balance += amount;
            const transaction: Transaction = {
                id: this.transactions.length + 1,
                userId: account.userId,
                amount,
                type: 'deposit',
            };
            this.transactions.push(transaction);
        }
    }

    transfer(sourceAccountId: number, destinationAccountId: number, amount: number): void {
        const sourceAccount = this.accounts.find(key => key.id === sourceAccountId);
        const destinationAccount = this.accounts.find(key => key.id === destinationAccountId);
        if (sourceAccount && destinationAccount) {
            if (sourceAccount.balance >= amount) {
                sourceAccount.balance -= amount;
                destinationAccount.balance += amount;
                const transaction: Transaction = {
                    id: this.transactions.length + 1,
                    userId: sourceAccount.userId,
                    amount,
                    type: 'transfer',
                };
                this.transactions.push(transaction);
            } else {
                console.log("Insufficient balance");
            }
        } else {
            console.log("Account not found");
        }
    }


    viewPassbook(userId: number): void {
        const user = this.users.find(key => key.id === userId);
        if (user) {
            const userTransactions = this.transactions.filter(key => key.userId === userId);
            if (userTransactions.length > 0) {
                console.log(`Passbook for User ID: ${userId}`);
                console.log("Transaction ID | Amount | Type");
                for (const transaction of userTransactions) {
                    console.log(`${transaction.id} | ${transaction.amount} | ${transaction.type}`);
                }
            } else {
                console.log("No transactions found for this user.");
            }
        } else {
            console.log("User not found.");
        }
    }

}

// usage example
const bank = new Bank();
const user: User = {
    id: 1,
    name: "Mark",
    email: "mark@gmail.com",
    password: "1234",
};

const newUser: User = {
    id: 2,
    name: "John",
    email: "john@gmail.com",
    password: "1234",
};

// user1
bank.createUser(user);
bank.createAccount(user.id);
bank.deposit(1, 1000);
bank.withdraw(1, 500);
bank.transfer(1, 2, 200);
bank.viewPassbook(1);
bank.closeAccount(1);

