{
    // 
    // Generics: Making a type dynamic. Uisng generic we can declare a type and take it's value as parameter and use it in different curcumstances. 

    // Better Explaination: 
    // Generics in TypeScript provide a way to create reusable and flexible components by allowing types to be parameterized.This means you can write functions, classes, and interfaces that work with a variety of types without sacrificing type safety.

    // Let's write some array first.
    const RollNumber: number[] = [3, 5, 5];

    const studentName: string[] = ["Abdullah", "Tamjid", "Kabir"];

    const booleanArray: boolean[] = [true, false, true];

    // In above examples what are are in between theree of them. 'Array' right? so we can write it like this:

    const studentId: Array<number> = [3, 5, 5];

    const parentsName: Array<string> = ["Abdullah", "Tamjid", "Kabir"];

    const isStillStudent: Array<boolean> = [true, false, true];


    // Okay, it also doesn't make sense, we're just writitng it diffrently. Now, Think about what are different in three of them. 'type' right? 

    // we'll write a type aliasis here.
    type GenericsArray<T> = Array<T> // "T" is parameter. we can name it anything it's convention to write T. 


    //Now, let's use generic type. 

    type PersonalInfo = {
        name: string;
        age: number
    }
    const studentInfo: GenericsArray<PersonalInfo> = [
        {
            name: "karim",
            age: 30
        },
        {
            name: "karim",
            // age: "30" It's showing error because we've written a string here.
            age: 32
        },
        // {
        // roll: "something"  It'll also show error.
        // },
    ];


    // Tupol generics.
    type genericTuple<X, Y, Z> = [X, Y, Z];
    const user: genericTuple<string, boolean, string> = ["Rahima", true, "Zarina"];

    // using diffrent types.
    interface ParentInfo {
        parentName: string;
        email: string;
    }
    const useId: genericTuple<string, boolean, ParentInfo> = ["Abir", true, { parentName: "Karim", email: "A@gmail" }];



    // Copied from ChatGPT: 
    // A simple identity function using generics
    function identity<T>(arg: T): T {
        return arg;
    }

    // Usage
    let result: number = identity<number>(42); // specifying type explicitly
    let anotherResult = identity("Hello, TypeScript!"); // TypeScript infers the type

    console.log(result);        // 42
    console.log(anotherResult); // Hello, TypeScript!

    //

}