{
    // 

    // Generic type using Interface. 

    // Write an Interface for object. 
    // B = null means if it's not avialble it's null.
    interface Developer<T, B = null> {
        name: string;
        email: string;
        computer: {
            name: string,
            model: string,
            price: number
        };
        SmartWatch: T;
        bike?: B
    };

    type SmartWatch<T, S> = {
        watchModel: string;
        display: string;
        heartTrack?: T;
        sleepTrack?: S;
    }

    const poorDeveloper: Developer<SmartWatch<boolean, boolean>> = {
        name: "Iqbal",
        email: "mdiqbal@gmail.com",
        computer: {
            name: "HP",
            model: "B-34HJ",
            price: 24000
        },
        SmartWatch: {
            watchModel: "Lenovo B12",
            display: "Gurilla",
            heartTrack: false,
            // sleepTrack: false //It's optional
        }
    }

    interface Bike {
        bikeName: string;
        engineCapacity: string;
        price: number
    }

    const richDeveloper: Developer<SmartWatch<boolean, boolean>, Bike> = {
        name: "Iqbal",
        email: "mdiqbal@gmail.com",
        computer: {
            name: "HP",
            model: "B-34HJ",
            price: 24000
        },
        SmartWatch: {
            watchModel: "Lenovo B12",
            display: "Gurilla",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            bikeName: "Yamaha",
            engineCapacity: "300cc",
            price: 1.500000
        }
    }

    // 
}