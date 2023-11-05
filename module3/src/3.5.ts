{
    //  
    // Type guard using instanceof.

    // In TypeScript, the instanceof operator is used to check whether an object is an instance of a particular class or constructor function. It helps you determine if an object is created from a specific class or a class that extends from a particular class.

    //scenarion: We've a three class one parent class 'Animal', one for 'Cat' and another one is for 'Dog'. both are child of animal class. child's has their own methods. we're making a function where 'Animal' is type of the function and trying to get childs own methods. So, we're checking Cat and Dog methods are instance of Animal by narrow down. if it's instanceof animal then we're getting their own methods. 

    
    //Parent class
    class Animal {
        constructor(public name: string,public species: string, public sound: string){
            // initilizar scope.
        }

        makeSound(){
            console.log(`${this.name}making sound`);
        }
    };
         // class for dog
    class Dog extends Animal{
        constructor(public name: string,public species: string, public sound: string){
            super(name, species, sound)
        }

        makeBark(){
            console.log(`${this.name} is barking`);
        }
    }

    // class for cat.
    class Cat extends Animal{
        constructor(public name: string,public species: string, public sound: string){
            super(name, species, sound)
        }

        makeMeaw(){
            console.log(`${this.name} is Meawing`);
        }
    }

    // Instance 
    const cat = new Cat('Bilai', 'cat', "meaw meaw");
    const dog = new Dog('shepard', 'dog', "Ghew Ghew");
    
    //This is how to use instancof. 
    const checkAnimal = (animal : Animal) => {
        if(animal instanceof Dog){
            animal.makeBark()
        }
        else if(animal instanceof Cat){
            animal.makeMeaw()
        }
        else{
            animal.makeSound();
        }
    }

    // let's make checkAnimal function a little bit more clear.
    
      //.In this examoke isDog will return a boolean.  If it's returns a boolean getAnimal function can't find out if makeBark method is in animal parameter by extends in animal class which is insttance of Dog class. To resolve this problem we're using 'animal is Dog' to specipically saying that it's instanceof Dog.

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog; 
    };
   
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat; 
    };


    const getAnimal = (animal: Animal) => {
        if(isDog(animal)){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound()
        }

    }

    const result = getAnimal(cat);









    // 
}