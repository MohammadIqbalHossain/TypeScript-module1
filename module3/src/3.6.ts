{
// 
// Access modifies. 
// scenario: consider we've a private property. we don't want to it to be accesible outside the class. it's can't be modified out it's class. To do so, we can use 'private' operator. But, their is a problem, if we use private the property won't be accessible it's child class. If we want it to inherite it's child class we can can 'protected' operator instead of private. 

// note: If a property is protected of privat it's convention to use a undescore (_) before it.

// Okay,let's on an example: 

class BankAccount {
    readonly id: number
    name: string;
    // private balance: number //If it's private it won't be avialable to child.
    protected _balance: number;

    constructor(id: number, name: string, _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }

    // But we've to add balance to the account. here we'll write a method.
    addBalance(ammount : number){
        this._balance = this._balance + ammount;
    } 

    getBalance(){
        return this._balance
    }

}

// Instances.
const kasifAccount = new BankAccount(23, "kasif", 20);
//Here we can get balance property because it's private or protected.
const addToBalance = kasifAccount.addBalance(30); 

// Now, with the method, we can add a ammount to the balance.
const myBalanace = kasifAccount.getBalance();
console.log(myBalanace);


// 
}