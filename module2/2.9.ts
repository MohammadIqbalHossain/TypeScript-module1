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




    // 
}