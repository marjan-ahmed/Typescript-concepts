class Bank {
    protected balance: number = 0;
    constructor(balance: number){
        this.balance = balance
    }
   
    private getBalance() {
        return this.balance
    }
}

class Account extends Bank {
    transections: number[] = [];
    
    public showBalance() {
        console.log("The balance is", this.balance);
        
    }
}

const account = new Account(2000);
account.showBalance()
// console.log(account.getBalance()); // Property 'getBalance' is private and only accessible within class 'Bank'
// account.balance // Property 'balance' is protected and only accessible within class 'Bank' and its subclasses.