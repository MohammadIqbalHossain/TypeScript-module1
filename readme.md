

```markdown
# Overview of Programming Paradigms

## Procedural Programming Paradigm

Procedural programming is an approach that organizes code into structured procedures or functions. These procedures consist of a series of well-defined steps or instructions executed sequentially. However, this paradigm may lack the reusability and functionality of more advanced programming paradigms.

### Python Example:

```python
def greet(name):
    print("Hello " + name)
    
greet("developer")
```

## Functional Programming Paradigm

Functional programming treats computation as the evaluation of mathematical functions. It uses building blocks resembling mathematical functions, making code easier to understand and less error-prone.

### JavaScript Example:

```javascript
// Functional programming
function greet(myName) {
    console.log(myName);
}

greet('Developer');
```

## Declarative Programming Paradigm

Declarative programming focuses on describing what you want to achieve rather than writing step-by-step code. Programmers should properly describe the desired outcome, and underlying frameworks or programming languages determine how to achieve it.

### SQL Example:

```sql
-- Declarative programming
SELECT first_name, last_name
FROM employees
WHERE department = 'sales';
```

## Object-Oriented Programming (OOP) Paradigm

Object-Oriented Programming (OOP) organizes programming around objects, which are instances of classes defining data and behavior. Software is designed by modeling real-world objects, each having attributes (data) and methods (functions) operating on the data.

### TypeScript Example:

```typescript
// Object-Oriented Programming
class Greeter {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet(): string {
        return `Hello ${this.name}`;
    }
}

const myGreeter = new Greeter('Iqbal');
const message = myGreeter.greet();
console.log(message);
```

## Event-Driven Programming Paradigm

Event-Driven Programming is a paradigm that listens to user instructions and responds to them. In this paradigm, software is designed to wait for reactive events, such as user clicks or keyboard inputs.

### JavaScript Example:

```javascript
// Event-Driven Programming
document.getElementById('myButton')?.addEventListener('click', () => {
    alert("Button clicked");
});

```

# Module-2: Class and Object 

## Contents:

1. Write a class.
2. Make properties.
3. Initialize properties.
4. Use public parameter property to simplify your code.
5. Instance.

## Code Example:

```typescript
// Write class:
class Cricketer {
    name: string; 
    age: number;
    bestPerformance: string;
    debut: number;

    constructor(name: string, age: number, bestPerformance: string, debut: number){
        this.name = name;
        this.age = age;
        this.bestPerformance = bestPerformance;
        this.debut = debut;
    }

    interviewTalks(){
         console.log(`${this.name} talks about his ${this.bestPerformance}`);
    }
}

const tamimIqbal = new Cricketer("Tamim", 36, "Lords Hundred", 2006);

const tamimAge = tamimIqbal.age;
const tamimPerformance = tamimIqbal.bestPerformance;
```
Explanation for Code Review:

In the above example, we're encountering code repetition. Properties are being declared, written as parameters, and repeated in the constructor. To mitigate this redundancy, we should use the 'public' parameter property.

All the properties of this Cricketer class are publicly accessible. Attempting to access them prompts suggestions. Here's a modified code example that eliminates repetition.

```typescript
class GreatCricketer {
    // public name: string; // If we don't write the public keyword, it's still public. 

    // We also don't need to write properties' names. We're just writing the public keyword before the parameter, and it's all done.
     
    constructor(public name: string, public age: number, public bestPerformance: string, public debut: number){
        // Now, we don't have to initialize.
    }
     
    // A Method (Function).
    interviewTalks(){
         console.log(`${this.name} talks about his ${this.bestPerformance}`);
    }
}
```

### Inheritance in TypeScript

Inheritance is a powerful concept in object-oriented programming that allows a class to inherit properties and methods from another class. This reduces code repetition and promotes code reuse.

## Scenario:

Consider two classes, 'Student' and 'Teacher.' Both share common properties like name, age, and address, as well as a common method, 'sleep.' Initially, these properties and methods are individually written for each class, resulting in code repetition.


```markdown

## Code Example:

```typescript
class Student {
    constructor(public name: string, public age: number, public address: string){
        
    }

    sleep(sleepHours: number){
        console.log(`${this.name} sleeps ${sleepHours} a day.`);
    }
}

class Teacher {
    constructor(public name: string,
        public age: number,
        public address: string,
        public designation: string
        ){

    }

    sleep(sleepHours: number){
        console.log(`${this.name} sleeps ${sleepHours} a day.`);
    }

    takeClass(classHours : number){
        console.log(`${this.name} takes class ${classHours} a day.`);
    }
}
```

### Code Improvement:

Both `'Student'` and `'Teacher'` classes have common properties and methods. To eliminate this repetition, we can create a parent class, `'Person,'` and have both `'Student'` and `'Teacher'` inherit from it.

```typescript
// Parent class
class Person {
    constructor(public name: string, public age: number, public address: string){
        
    }

    sleep(sleepHours: number){
        console.log(`${this.name} sleeps ${sleepHours} a day.`);
    }
}

// Inheriting from the parent class
class Student2 extends Person {
    constructor(public name: string, public age: number, public address: string){
        super(name, age, address);
    }
}

const shoriful = new Student2('Shoriful', 23, "Gahana");
shoriful.sleep(5);
```
 Here we're calling a ```super()``` fucntion in constructor. as we know we're inheriting data from parent. our constructur wouldn't make the student, they are person's property. So, we've to send them to the 'Person' class to make the student. `super()` is a method to send our data to it's parent.

```typescript

// Inheriting from the parent class
class Teacher2 extends Person {
    constructor(public name: string,
        public age: number,
        public address: string,
        public designation: string
        ){
            super(name, age, address);
        }

    takeClass(classHours : number){
        console.log(`${this.name} takes class ${classHours} a day.`);
    }
}

const Karim = new Teacher2('Karim', 34, "Ghana", "Math teacher");
Karim.takeClass(4);
```

In this way, the 'Person' class encapsulates common properties and methods, promoting cleaner and more maintainable code.
```



 ```
 # Type Guard.

In TypeScript, a type guard is a mechanism that allows you to narrow down the type of a variable within a specific code block. It's a conditional statement or function that checks the type of a value and provides a more specific type for TypeScript to infer within that scope.

Type guards are particularly useful when working with union types or types that can be more than one specific shape. They enable you to perform type-specific operations or access properties confidently without the risk of runtime errors.

In this example, Param1 and param2 could be string or a number. If two paremters are number the function will do additon. if not it'll concate both parameter. It's using typeof to check both of them are number.

```typescript
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
```
Another example: using "in" operator to check type.

```typescript

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
```

# Type guard using instanceof.

In TypeScript, the instanceof operator is used to check whether an object is an instance of a particular class or constructor function. It helps you determine if an object is created from a specific class or a class that extends from a particular class.

scenarion: We've a three class one parent class 'Animal', one for 'Cat' and another one is for 'Dog'. both are child of animal class. child's has their own methods. we're making a function where 'Animal' is type of the function and trying to get childs own methods. So, we're checking Cat and Dog methods are instance of Animal by narrow down. if it's instanceof animal then we're getting their own methods. 


```typescript
/Parent class
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
```

```typescript
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
```

let's make checkAnimal function a little bit more clear.

In this examoke isDog will return a boolean.  If it's returns a boolean getAnimal function can't find out if makeBark method is in animal parameter by extends in animal class which is insttance of Dog class. To resolve this problem we're using 'animal is Dog' to specipically saying that it's instanceof Dog.


```typescript
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
```


# Access modifies. 

scenario: consider we've a private property. we don't want to it to be accesible outside the class. it's can't be modified out it's class. To do so, we can use 'private' operator. But, their is a problem, if we use private the property won't be accessible it's child class. If we want it to inherite it's child class we can can 'protected' operator instead of private. 

Note: If a property is protected of privat it's convention to use a undescore (_) before it.

Okay,let's on an example: 

```typescript
class BankAccount {
    readonly id: number
    name: string;
    // private balance: number //If it's private it won't be avialable to child.
    protected _balance: number;

    constructor(id: number, name: string, _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }

    // But we've to add balance to the account. here we'll write a method.
    addBalance(ammount : number){
        this._balance = this._balance + ammount;
    } 

    getBalance(){
        return this._balance
    }

}

// Instances.
const kasifAccount = new BankAccount(23, "kasif", 20);
//Here we can get balance property because it's private or protected.
const addToBalance = kasifAccount.addBalance(30); 

// Now, with the method, we can add a ammount to the balance.
const myBalanace = kasifAccount.getBalance();
console.log(myBalanace);
```


# Getter and setter.

In last modules example we've used to methods to get and add balance to _balance propery. In this example we'll use getter and setter modifiers to to the same thing, but in a cleaner way.

```typescript
class BankAccount {
        readonly id: number
        public name: string;
        protected _balance: number;
    
        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
    
    //   using getter to add balance.
        public set deposit(ammount : number){
            this._balance + ammount;
        }

        // using getter to get balance.
        
        public balance() : number {
            return this._balance
        }
    
    }
    
    // Instances.
    const kasifAccount = new BankAccount(23, "kasif", 20);
    //Here we can get balance property because it's private or protected in instance.

    //adding balance. It's looks like assigninf values but it's not. it's setting the value!.
    const addToBalance = kasifAccount.deposit = 50;
   
    
    // Now, with the getter modifiers, we can get balance.
    const myBalanace = kasifAccount.balance;
    console.log(myBalanace);
```

# Statics in OOP.

When we write a normal class we can get it's properties using instance. when we write different instance for a same property/ class. These two instance wil alocate diffrent place in our memory. if we modify properties or assign values to property. we'll get diffrent data from the class. but we want to same data even though we're declaring two instances. To do so, we'll use static modifies in our class. If we use 'static' modifiers we can't call that property using 'this'. we've to call it using class name. and we also don't need to write instances to get a static value.


```typescript
// okay,lets's code.

    class Counter {
        static count : number = 0;
       static increment(){
            return Counter.count = Counter.count +  1;
        }
       static decrement(){
            return Counter.count = Counter.count - 1;
        }
    }
    

    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.decrement()) // 1, 2, 3, 3

```

 # Polymorphism

 When a method of a class changes it's output based on diffrent situation then can call it polymorphism.

 here, we're written a class 'Shape' that has just a method which return 0. But In class 'Circle' which is a child of 'Shape' that uses same method 'getArea' but return circle area with the help of 'Radius' whic we're getting by a constructor. and third class 'Rectengular' also does same. 


 ```typescript
  // Let's see an example:

    class Shape {
        getArea() :number{
            return 0
        }
    }


    // Circle.
    class Circle extends Shape {
        radius: number;

        constructor(radius: number){
            super()
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    // Rectengular.
    class Rectengular extends Shape {
        height: number;
        width: number
        constructor(height: number, width: number){
            super()
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }


    // Instances.

    // Here we're declaring instances and giving their arguments.
    const myArea = new Shape();
    const myCircle = new Circle(10);
    const myRectengular = new Rectengular(2, 3);
    
    
    const getAreaFromShape = (area: Shape) => {
        console.log(area.getArea())
    }

    getAreaFromShape(myArea);
    getAreaFromShape(myCircle);
    getAreaFromShape(myRectengular);
 ```


 # Abstraction. 

Abtraction is a approach of type decleration where programmmers can get a idea or a method to follow. but actual code implementaion are partially like the type declaraion. 
    
Considers we want to follow a structure for making class. where we've declared a interface, interface has all methods of class. but interface doesn't know what is happenning inside the methods.

Let's code it.

```typescript
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
    tyotaCar.engineStart(); //log: car is started.
```

This is a abstraction class, it means the class made to be a structure. we can't implement anything in this class. we can't write any instance for this class. Simply, it's as a leader. other child classes will follow it's structure.

```typescript
  abstract class BikeStructure {
        abstract engineStart() : void 

        abstract engineMove() : void; 

        abstract engineStops() : void;

        abstract test() : void;
    }
```

This 'Bike' class is following 'BikeStructure' as an abstract class.

```TypeScript
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
```

# Encapsulation.
   Encapsulation means restriction of public access. In a class, we can hide or restrict publicly accesible data. By implementing encapsulationm, the private data will be forviden to override or reassign.

    It's uses some common modifiers to implement.
    1. Public : Using public modifiers in a data or variable will accessible to all.
    2. Private: Private variable can be accessible inside the class.
    3. Protected: Protected data can be inherited to in's child but can't accessible to outside parent and childs.


   Example Public modifiers:

    ```typescript
    class MyName {
        public name: string

        constructor(name: string){
            this.name = name
        }
    }

    //Write an instance to see that it's accessible.
    const myName = new MyName("Iqbal");
    console.log(myName.name);
    ```
    Private modifiers:

    ```typescript
    //Private modifiers:
     class Account {
        private _balance: number

        constructor(_balance: number){
            this._balance = _balance;
        }
    }

    //Write an instance to see that it's accessible.
    const myBalance = new Account(23);
    // console.log(myBalance._balance) //Accessing `_balance` will give us an error.
    ```
    Protected modifiers:

    ```typescript
      //
         class MyBalance {
            protected _balance: number
    
            constructor(_balance: number){
                this._balance = _balance;
            }
        }

        class StudentBalance extends MyBalance {
            _studentbalance : number;

            constructor(_studentbalance: number){
                super(_studentbalance);
                this._studentbalance = _studentbalance;
                console.log(this._balance); //here, _balance is accssible, as it's a child of 'MyBalance'.
            }
        }
    
        //Write an instance to see that it's accessible.
        const studentBalance = new StudentBalance(23);
    ```




```