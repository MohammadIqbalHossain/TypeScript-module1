{
    // 
    // Abstraction. 
    // Abtraction is a approach of type decleration where programmmers can get a idea or a method to follow. but actual code implementaion are partially like the type declaraion. 
    
    // Considers we want to follow a structure for making class. where we've declared a interface, interface has all methods of class. but interface doesn't know what is happenning inside the methods.

    // Let's code it.

    interface Vehicle {
        // name: string;
        engineStart: () => void;
        engineMove: () => void;
        engineStops: () => void;
    }

    //We can't use ":" to give a type in a class. Instead we've to use implements 
    class Car implements Vehicle {
        engineStart(){
            console.log('Car is started')
        }

        engineMove(){
            console.log(`car is moving`);
        }

        engineStops(){
            console.log(`car is stopped`);
        }

        test(){
            console.log("Just testing");
        }
    }

    // Intances.
    const tyotaCar = new Car();
    tyotaCar.engineStart();

    //This is a abstraction class, it means the class made to be a structure. we can't implement anything in this class. we can't any write instance for this class. Simply, it's as a leader. other child classes will follow it's structure. 
    abstract class BikeStructure {
        abstract engineStart() : void 

        abstract engineMove() : void; 

        abstract engineStops() : void;

        abstract test() : void;
    }


    // This 'Bike' class is following 'BikeStructure' as an abstract class.
    class Bike extends BikeStructure {
        engineStart(){
            console.log(`Bike has started`);
            
        };
        
        engineMove(){
            console.log(`Bike is moving`);
        };

        engineStops(){
            console.log(`Bike is stopped`);

        };

        test(){
            console.log(`Just testing`);

        };
    }

    const heroHonda = new Bike();
    heroHonda.engineStops(); //log: Bike is stopped.


    // 
}