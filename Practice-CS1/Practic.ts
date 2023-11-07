{
    // Basic data types.

    // Number.
    let myNumber: number = 123;

    // String.
    let myString: string = "Hello, TypeScript";

    // Boolean.
    let myBoolean: boolean = true

    // Array.
    // Array of number.
    let myArray: number[] = [1, 3, 4, 5];

    // array of strings.
    let stringArray: string[] = ["Iqbal", "Rakib", "Hasan"];

    //Array with generics type.
    let geenricArray : Array<string> = ["Iqbal", "Rakib", "Hasan"];

    // Tuple
    let myTuple : [string, number, boolean] = ["Iqbal", 22, false];

    // Enum
    enum myEnum {'SUCCESS', 'DENIED', 'FORBIDDEN', 'NOT FOUND'}
    
    interface ResponseType {
        type: number;
        response: myEnum; //We can use unio here.
        name: string
    }

    const response : ResponseType =  {type: 1, response: myEnum.SUCCESS, name: 'Iqbal'};

    // Union. 
    // Use union instead of enum.
    interface APIresponse {
        type: number,
        response: 'SUCCESS'| 'DENIED' | 'FORBIDDEN' | 'NOT FOUND';
        name: string
    }


    const myAPIres : APIresponse =  {type: 1, response: 'SUCCESS', name: 'Iqbal'};

    // Any.
    let anyType: any = 'Hello world'; 

    // Void. Functions don't return anything.
    const voidFunction = (num: number): void => {
       console.log(`This is my roll number: ${num}`);
    }

    // Never. The type that will never occur.
    function throwError(error: string): never{
     
            throw new Error((error))
    }
} 
    






    // 
}