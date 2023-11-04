{
    // 
    // Constrains using keyof 

    // First declare a type using type operator.
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    //  I want to have a type with string literal. That type will have "Vehicle" key as string literals. 
    // here I wrote this manually. 
    type owner = "bike" | "car" | "ship";

    // But I can write it with "keyof" that means owner2 type is taking keyof vehicle as string literals. 
    type owner2 = keyof Vehicle;

    // Here, first example is using type from "onwer".
    const poorPerson: owner = "bike";

    // These two are using type from owner two. it's just like 'owner'.
    const middcleClassP: owner2 = "car";
    const richP: owner2 = "ship";


    // Using this keyof method,we'll extract an objects property with function.

    // First, understand how to get a property from a object. 
    const user = {
        name: "Iqbal",
        age: 23,
        email: "md@gmail.com"
    }

    const userName = user.name; // This is the first method.
    const userAge = user['age'] // It's secind method.

    //using second method we'll send a parameter object and a key. then the function will return object['key']. means that property. let's write the functin.

    // We're taking a two generic params set obj's type is X and key's type is Y.Y Extends the key of X means with keyof we're taking X objects key and making it a union string literal type. and staying Y type must have in the X.  If Y type is not there it'll give error. 
    const getUserProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    //Now we can send any object as parameter and it'll make it's a union string literals and send the second parameters value. 
    const car = {
        model: "BMW",
        year: 2032
    }
    const result = getUserProperty(car, "model");
    const result2 = getUserProperty(user, "email");















    //    



}