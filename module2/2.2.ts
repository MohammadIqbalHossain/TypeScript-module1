{
    // 

    // Interface: Interface is like type alias. we can use interface as like type. we can also mis-match between them. only difference is we can use type in declaring primitive type, but we can't use interface for declearing Primitive value.

    // Use type alias for primitive.
    type FavColor = string;
    const favColor = "skyblue";

    // Using interface and type alias in object. 
    type CarAlias = {
        name: string;
        model: number;
        price?: number
    }

    interface CarInterFace {
        name: string;
        model: number;
        price?: number
    }

    // Using type alias here.
    const myCar: CarAlias = {
        name: 'volvo',
        model: 500,
    }

    // Using type interface here.
    const familyCar: CarInterFace = {
        name: 'volvo',
        model: 500,
        price: 200,
    }

    // Using intersection in type alias and interface. 
    type HotCar = CarAlias & { comment: string };

    // Using intersection in intersection and interface. 
    interface GreatCar extends CarInterFace { isFerrari: boolean };

    // Mismatching them. 

    interface YourCar extends CarAlias { isBuyable: boolean };


    const friendCar: HotCar = {
        name: 'bmw',
        model: 500,
        comment: "wow" //withrowin this will give error.
    }

    const neighboursCar: GreatCar = {
        name: 'ferrari',
        model: 500,
        isFerrari: true //withrowin this will give error.
    }


    // Using interface and type aliasis for array.

    //Type alias.
    type Food = string[];

    const myFood: Food = ["Banana", "Onion"];

    // Interface.
    interface RollNumber {
        [index: number]: number
    }

    let studentsRoll: RollNumber = [1, 3, 5];


    // Using interface and type aliasis for Function.

    // Type Aliasis.
    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2


    // Interface.
    interface Add2 {
        (num1: number, num2: number): number
    }

    const add2: Add2 = (num1, num2) => num1 + num2;




    // 
}