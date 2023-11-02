{
    //
    // Type alis.

    //  When we use same type of object means most of the object properties are same, and we want to write explict type there we need to write every properties type. like this:

    const student1: {
        name: string;
        school: string;
        contactNo: string;
        age: number;
        isMarried: boolean
    } = {
        name: "Abdullah",
        school: "Abdullah school and college",
        contactNo: "018397534",
        age: 32,
        isMarried: false
    }

    // Think that we've same object multiple times. on this method writing same object multiple times and declaring it's type is time consuming. so that we can use type alis here.

    // It's a type alias: It's convention to write it's name using Capital letter.

    type Student = {
        name: string;
        school: string;
        contactNo?: string;
        age: number;
        isMarried: boolean
    }

    // Using type alias in a object.  
    const student2: Student = {
        name: "Abdullah",
        school: "Abdullah school and college",
        age: 32,
        isMarried: false
    }

    const student3: Student = {
        name: "Abdullah",
        school: "Abdullah school and college",
        age: 32,
        isMarried: false
    }


    // Using type alis in the variable. 

    type TeacherName = string;
    type TeacherAge = number;
    type TeacherSubject = string;

    // Using type alis in a variable.
    const bangla: TeacherName = "Nazrul Islam";

    const age: TeacherAge = 12;

    const subject: TeacherSubject = "Bangla";


    // Using Type alias for function. 
    
    type Add = (num1: number, num2: number ) => number
    
    // Use Alias for Function.
    const add : Add = (num1, num2) => num1 + num2;

    //
}