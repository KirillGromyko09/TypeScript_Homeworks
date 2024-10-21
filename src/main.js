class BankAccount {
    #balance = 0;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount){
        if (amount > 0 && typeof amount === 'number'){
            this.#balance += amount;
        }else {
            throw new Error('Invalid number')
        }
        console.log(this.#balance)
    }
    withdraw(amount){
        if (amount > 0 && typeof amount === 'number'){
            this.#balance -= amount;
        }else{
            throw new Error('Invalid number')
        }
        console.log(this.#balance)
    }
    getBalance(){
        console.log(this.#balance)
        return this.#balance;
    }
}

const user = new BankAccount(2000);
user.deposit(1000);
user.withdraw(2000);
user.getBalance();
