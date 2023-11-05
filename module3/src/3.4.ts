{
// Type Guard.

// 
// In TypeScript, a type guard is a mechanism that allows you to narrow down the type of a variable within a specific code block. It's a conditional statement or function that checks the type of a value and provides a more specific type for TypeScript to infer within that scope.

// Type guards are particularly useful when working with union types or types that can be more than one specific shape. They enable you to perform type-specific operations or access properties confidently without the risk of runtime errors.

// In this example, Param1 and param2 could be string or a number. If two paremters are number the function will do additon. if not it'll concate both parameter. It's using typeof to check both of them are number.
type Alphanewmeric = string | number;

const add = (param1: Alphanewmeric, param2: Alphanewmeric): Alphanewmeric => {
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString();
    }
}

const additon : Alphanewmeric = add(3, 4); 

// Another example: using "in" operator to check type.

type NormalUser = {
    name: string
}

type AdminUser = {
    name: string;
    role: "admin";
}
// "in" type checking operator only can be used in object type.
const checkUser = (user: NormalUser | AdminUser) : string => {
     if('role' in user){
        return`I'm ${user.name} and my role is ${user.role}`
     }
     else{
        return `My name is ${user.name}`;
     }
}

const myUser : string = checkUser({name: "Iqbal", role: "admin"});
console.log(myUser);




// 
}