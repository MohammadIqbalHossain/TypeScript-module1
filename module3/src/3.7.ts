{
    // Getter and setter.

    // In last modules example we've used to methods to get and add balance to _balance propery. In this example we'll use getter and setter modifiers to to the same thing, but in a cleaner way. 

    class BankAccount {
        readonly id: number
        public name: string;
        protected _balance: number;
    
        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
    
    //   using getter to add balance.
        public set deposit(ammount : number){
            this._balance + ammount;
        }

        // using getter to get balance.
        
        public balance() : number {
            return this._balance
        }
        
    
       
    
    }
    
    // Instances.
    const kasifAccount = new BankAccount(23, "kasif", 20);
    //Here we can get balance property because it's private or protected in instance.

    //adding balance. It's looks like assigninf values but it's not. it's setting the value!.
    const addToBalance = kasifAccount.deposit = 50;
   
    
    // Now, with the getter modifiers, we can get balance.
    const myBalanace = kasifAccount.balance;
    console.log(myBalanace);

    // 
}