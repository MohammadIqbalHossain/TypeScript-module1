{
    //  
    // Generic type with function. 

    // When we don't know any the type of a parameter in function we can use generic type for adding the value later. 

    // First let's create a simple typescript function. 

    const createArray = (param: string): string[] => {
        return [param]
    };

    const result1 = createArray("Bangladesh");


    // Now, let's assume we don't know the type of 'param' here. So, we'll define the type in calling the function.

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const result2 = createArrayWithGeneric<string>("England");

    // okay, Now we'll create a function which return tupol. 
    const creatTupol = (param1: string, param2: string): [string, string] => {
        return [param1, param2];
    }

    const result3 = creatTupol("Hello", "TypeScript");


    // Create the same function without knowing param's type. 
    const creatTupleWithGeneric = <T, S>(param1: T, param2: S): [T, S] => {
        return [param1, param2];
    }

    interface TupleInterFace {
        isOkay: boolean;
        email: string
    }

    const resutl4 = creatTupleWithGeneric<boolean, TupleInterFace>(true, { isOkay: true, email: "mdiqbalhossain@gmail.com" });


    // Let's create another example:
    // type AddCourse = <T>(student: T) =>  unknown

    const addCourse = <T>(student: T) => {
        const course = "next level web development";
        return {
            ...student,
            course
        }
    }

    // By calling this function. we can now add different propertieis. so we are creating diferrent properties in this case. 
    interface AddCourse { stuID: string, name: string, roll: number }

    const result5 = addCourse<AddCourse>({ stuID: "IU-234", name: "Iqbal", roll: 33 }
    )













    // 
}