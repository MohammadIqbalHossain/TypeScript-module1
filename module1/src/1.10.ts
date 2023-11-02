{
    //
    // Union Type. 
    // Here  we're using explicit unio string literals type. 
    type FrontendDeveloper = "Fakibaz developer" | "Junior developer";
    type FullStackDeveloper = "frontend developer" | "Full stack developer";

    // Making a unio using two another union.
    type Developer = FrontendDeveloper | FullStackDeveloper
    
    // Using 'frontendDeveloper' uniion value.
    const newDeveloper: FrontendDeveloper = "Junior developer";
    // Using 'Developer' union value.
    const hotDeveloper: Developer = "Full stack developer";
   

    // Using it in object.
    type DeveloperInfo = {
        name: string;
        field: "Frontend" | "Backend" | "full Stack";
        isExpert?: boolean;
        contactNo: string;
        age: number;
        gender: "Male" | "Female"
    }

    const developer: DeveloperInfo = {
        name: "Jhankar",
        field: "full Stack",
        isExpert: true,
        contactNo: '0183784753',
        age: 132,
        gender: "Male"
    }



    // Intersention. Intersenction means we'll define two union both two union has use when we are writing the values. it's uses & to make an Intersention.

    // Think about we've two objects union. 

    // First:
    type FrontEndDeveloper = {
        name: string;
        skills: string[];
        designation1: "FrontEnd developer";
    }

    // Second:
    type BackendDeveloper = {
        name: string;
        skills: string[];
        designation2?: "Backend developer"
    }
   
    // Make a Intersection type using two type declared befor.
    type NewFullStackDeveloper = FrontEndDeveloper & BackendDeveloper;


    // Using it's value. If we give one designation here, because It's values are type means string literals. 
    const greatDeveloper : NewFullStackDeveloper = {
        name: "Abul",
        skills: ["html", "JavaScript", "TypeScript"],
        designation1: "FrontEnd developer",
        designation2: "Backend developer"
    }

    //
}