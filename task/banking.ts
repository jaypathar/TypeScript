// importing module.
import { v4 as uuid } from 'uuid';
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
    id: string;
    userId: number;
    balance: number;
}

// defining class for different operations
class Bank {
    private users: User[] = [];
    transactions: Transaction[] = [];
    accounts: Account[] = [];

    // creating a user
    createUser(user: User): void {
        this.users.push(user); // push directly into the array.
    }

    // creating an account.
    createAccount(userId: number): void {
        // generating unique id
        const id: string = uuid();
        this.accounts.push({ id: id, userId, balance: 0 });
    }

    // close  an account.
    closeAccount(userId: number): void {
        const accountIndex = this.accounts.findIndex(account => account.userId === userId);
        if (accountIndex !== -1) {
            const account = this.accounts[accountIndex];
            if (account.balance >= 0) {
                this.accounts.splice(accountIndex, 1);
                console.log(`Account for User ID ${userId} has been closed.`);
            } else {
                console.log("Account balance is negative. Account cannot be closed.");
            }
        } else {
            console.log("Account not found.");
        }
    }

    // to withdraw amount.
    withdraw(accountId: number, amount: number): void {
        const account = this.accounts.find(account => account.userId === accountId);
        if (account) {
            if (account.balance >= amount) {
                account.balance -= amount;

                this.transactions.push({
                    id: this.transactions.length + 1,
                    userId: account.userId,
                    amount,
                    type: 'withdrawal',
                })
                console.log(`$Account :${account.id} userID : ${account.userId} Balance: ${account.balance}`)
            } else {
                console.log("Insufficient balance");
            }
        } else {
            console.log("Account not found");
        }
    }

    // to  deposit into account.
    deposit(accountId: number, amount: number): void {
        const account = this.accounts.find(account => account.userId === accountId);
        if (account) {
            account.balance += amount;
            this.transactions.push({
                id: this.transactions.length + 1,
                userId: account.userId,
                amount,
                type: 'deposit',
            }); // push directly into array.
        }
    }

    // transfer amount from one account to other.
    transfer(sourceAccountId: number, destinationAccountId: number, amount: number): void {
        const sourceAccount = this.accounts.find(account => account.userId === sourceAccountId);
        const destinationAccount = this.accounts.find(account => account.userId === destinationAccountId);
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

    // view list of transactions for any account.
    viewPassbook(userId: number): Transaction[] {
        const userTransactions = this.transactions.filter(
            (transaction) => transaction.userId === userId || (transaction.type === 'transfer' && transaction.userId !== userId)
        );
        return userTransactions;
    }

    // getting current balance for accounts.
    getBalance(userId: number): number {
        const account = this.accounts.find(account => account.userId === userId);
        if (account) {
            return account.balance;
        } else {
            console.log("Account not found");
            return 0;
        }
    }


}

// usage example
const bank = new Bank();

// user 1
const user1: User = {
    id: 1,
    name: "Mark",
    email: "mark@gmail.com",
    password: "1234",
};
bank.createUser(user1);
bank.createAccount(user1.id);
bank.deposit(1, 1000);

// user 2
const user2: User = {
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
console.log(bank.accounts)

// getting  balances for both account.
console.log(`User ID ${user1.id} Balance : ${bank.getBalance(user1.id)}`);
console.log(`User ID ${user2.id} Balance : ${bank.getBalance(user2.id)}`);


// view passbook for user 1
console.log(bank.viewPassbook(1));

// view passbook for user 2
console.log(bank.viewPassbook(2));
