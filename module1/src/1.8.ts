{
    // Destructuring in TypeScript.



    //Object destructuring.
    const userInfo = {
        name: "Iqbal",
        contact: "01800000000",
        hobbies: {
            reding: true,
            travel: "Not so much"
        },
        address: "Temba bavuma"
    }

    // This  ia a example of desctructuring in nested object. here contact: phoneNum is not settting data type. it's name alisis. We are giving another name to it. we can write data types here. 
    const { contact: phoneNum, hobbies: { travel } } = userInfo;

    // Array destructuing. 

    const warriors : string[] = ["Jon snow", "Mormont", "Ageon targeryen", "Ariya stark", "Rob stark"];
    
    // Here I've a string 'warriors' I will need "Ageon targeryen" here. I will skip first two value with (,,)| comma. greatWarrior = "Ageon targeriyen" now. Now, I want to have rest of them in abother array of string. 
    // so I'm using rest operator here to take rest of them in a variable.
    const [,, greatWarrior, ...restWarriors] = warriors;























}