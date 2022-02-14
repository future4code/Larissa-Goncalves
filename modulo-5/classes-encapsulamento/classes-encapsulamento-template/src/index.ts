//1
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    //==>

    public getCPF(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public geAge(): number {
        return this.age
    }

    public setTransactions(transitions: Transaction) {
        this.transactions.push(transitions)
    }
}

const user = new UserAccount("222.222.222-22", "larissa", 20)

//2
class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description

    }
    
    //==>

    public getDate() {
        return this.date
    }

    public getValue() {
        return this.value
    }


    public getDescription() {
        return this.description
    }
}

const transation = new Transaction("14/02/2022", 100, "trasação")
user.setTransactions(transation)

console.log(transation)

//3
class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    //==>

    public getAccounts(): UserAccount[] {
        return this.accounts
    }

    public setAccounts(accounts: UserAccount) {
        this.accounts.push(accounts)
    }
}

const counts = new Bank([user])
counts.setAccounts(user)

console.log(counts)


