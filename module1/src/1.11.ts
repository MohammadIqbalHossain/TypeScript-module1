{
    //  
    //  The game of ? 

    // Ternary operator | Optional Chaining | Nullish coealising.

    // Ternary operator:
    const age = 13;
    const isAdult = age >= 18 ? "Major" : "Minor";
    // console.log(isAdult);


    // Nullish coealising.

    const isAuthenticatd = null;

    // Nullish coealising operator defines a value based on null and undefined. if it's value is not null or undefined it'll return the value itself. Now, it's looks like Ternary operator, but there is diffrence. Ternary operator returns a value based on falsy and truty. If we give an empty string Nullish coealising operattor will return the value. on the otherhand Ternary operator return guests.  

    const result1 = isAuthenticatd ?? "Guest";
    const result2 = isAuthenticatd ? "User" : "Guest"
    // console.log({result1}, {result2});

    // Optional Chaining.
    type UserInfo = {
        name: string;
        age: number;
        address: {
            road: string;
            city: string;
            fullAdress: string;
            permanentAddress?: string;
        };
        
    }

    const user: UserInfo = {
        name: "Iqbal",
        age: 22,
        address: {
            road: "Abc",
            city: "ctg",
            fullAdress: "Arshi nagar",
            // permanentAddress: "some City"
        },
     
    }

    const userAddress = user?.address?.permanentAddress || "No address"
    console.log({ userAddress });



    // 

}