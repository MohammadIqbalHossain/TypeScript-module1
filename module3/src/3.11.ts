{
    // Encapsulation.
    // Encapsulation means restriction of public access. In a class, we can hide or restrict publicly accesible data. By implementing encapsulationm, the private data will be forviden to override or reassign.

    // It's uses some common modifiers to implement.
    // 1. Public : Using public modifiers in a data or variable will accessible to all.
    // 2. Private: Private variable can be accessible inside the class.
    // 3. Protected: Protected data can be inherited to in's child but can't accessible to outside parent and childs.


    //Example Public modifiers:
    class MyName {
        public name: string

        constructor(name: string){
            this.name = name
        }
    }

    //Write an instance to see that it's accessible.
    const myName = new MyName("Iqbal");
    console.log(myName.name);


     //Private modifiers:
     class Account {
        private _balance: number

        constructor(_balance: number){
            this._balance = _balance;
        }
    }

    //Write an instance to see that it's accessible.
    const myBalance = new Account(23);
    // console.log(myBalance._balance) //Accessing _balance will give us an error.


         //Protected modifiers:
         class MyBalance {
            protected _balance: number
    
            constructor(_balance: number){
                this._balance = _balance;
            }
        }

        class StudentBalance extends MyBalance {
            _studentbalance : number;

            constructor(_studentbalance: number){
                super(_studentbalance);
                this._studentbalance = _studentbalance;
                console.log(this._balance); //here, _balance is accssible, as it's a child of 'MyBalance'.
            }
        }
    
        //Write an instance to see that it's accessible.
        const studentBalance = new StudentBalance(23);
    // 
}