{
    // Consitional type: If a type is dependend to another type for creating another type then it called conditional type.

    // Conditional types in TypeScript allow you to create types that depend on a condition.They use the extends keyword to check a condition and provide different types based on whether the condition is true or false.

    // As an example: 

    type A1 = null;
    type B1 = undefined;

    // If a1 extendes null/ If null is in A1/ If A1 satisfied null then it's true. 
    type C1 = A1 extends null ? true : false;

    // Nested conditional.


    type D2 = B1 extends number ? true : A1 extends null ? null : any; //null


    // Let's practice conditinal type with generics.

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }
    // Conditional type with generics.
    // Does T parameter extends or satisfy argument of string literal bike. if does true if not false.
    type checkVehicle0<T> = T extends "car" | "bike" | "ship" ? true : false;
    
    // Using keyof ooperator to check.
    type checkVehicle<T> = T extends keyof Sheikh ? true : false;

    //    
    type HasBike = checkVehicle<"bike">  //writting another type depending on checkVehicle.
    type HasCar = checkVehicle<"car">
    type HasShip = checkVehicle<"ship">



    // 
}