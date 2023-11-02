{

    const poorUser = {
        name: "Iqbal",

    }
    // poorUser should give us error it's not giving because we've make the whole file a block. Ts make everything a in global like hoistng. so when we are writing poosrUser twice it's giving error.


    // Spread Operator.
    // Rest operator.
    // Destructuting.

    // Spread Operator.
    const teachersL2: string[] = ["Tanmoy", "mir", "Nahid", "Mezba"];
    const teachersL1: string[] = ["Jhankar Mahbub", "Mir"];

    //  teachersL2.push(teachersL1) //This will give us an error. Because we can't push a whole array to a type array of strings | string[]. 


    // Spread all value and push then into teachersL2. 
    teachersL2.push(...teachersL1)


    // Using rest operator to copy property from a object to another object.
    const friends1 = {
        friend1: "Shakib",
        friend2: "Azam",
        friend3: "Rubel",
        friend4: "Jahangir",
    }

    const friends2 = {
        friend1: "Jihan",
        friend2: "Bakar",
        friend3: "Chagi",
        friend4: "Jahangir khan",
    }

    // Taking all properties from friend1 and friend2 by spread operator.
    const friend3 = {
        ...friends1,
        ...friends2
    }

    // Rest operator for fucntion.
    const greetFriends = (friend1: string, friend2: string, friend3: string): void => {
        console.log`Hi ${friend1}, ${friend2}, ${friend3}`
    }

    // console.log(greetFriends("Rahim", "karim", "Jabbar", "Kuddos")); 

    // Yes, it's giving error expected three arguments but giving one. So, we want write the function in a way that we can greet as much as friend we want. 

    const greetFriendsAgain = (...friends: string[]): void => {
        friends.forEach(element => {
            console.log`Hi ${element}`
        });
    }
    
    console.log(greetFriendsAgain("Rahim", "karim", "Jabbar", "Kuddos")); 

    // Okay now. hehehe.

}