
{
    //
    // // Type Assertion:  Type assertion is like you telling TypeScript, "Hey, don't worry, I know what I'm doing. This variable is definitely of this type," just as if you're telling a friend, "Trust me, I've got this!" It's a way to confidently specify the type of a variable when TypeScript might not figure it out on its own.

    const myVariable: any = "Hello, TypeScript";

    // In this example we can find all string methods.
    const stringVariabel: string = (myVariable as string);

    // Here we can find all number method. 
    const numVariable: number = myVariable as number;


    // Okay, Now, think about a function where we'll return a string or a number or undefined. If we take it's returns value in a variable. it'll infer undefined | string | number. in this case, we can specifically what value it'll return.

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 100;
            return `The converted value id : ${convertedValue}`;
        }

        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    // In argument we,ve given number. So, I knnow what it'll retuen a number offcourse. That why we're explicitly using type assertion.
    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("1000") as string

    // Another example:
    type CustomError = {
        message: string;
    }
    try {

    } catch (error) {
        console.log((error as CustomError).message)
    }


    // In real - life scenarios, you might encounter situations where TypeScript's type inference isn't sufficient, or you're working with values that can have multiple types. For example, when dealing with data from external sources like APIs, you may receive data in a generic format like JSON, and you need to assert or cast it to a specific type for easier and safer manipulation.

    const fetchUserDataFromApi = () => {
        // In use case, fetch data. 
    }

    type userData = {
        name: string;
        age: number;
        email?: string;
    }

    const rawUserData : any = fetchUserDataFromApi();

    // using type assertion for skipping development error.  
    const newUserdata = rawUserData as userData;

    console.log(newUserdata.name); //Now, it's not giving error. 



}


