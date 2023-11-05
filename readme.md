

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

### Type Guard.

 ```
# In TypeScript, a type guard is a mechanism that allows you to narrow down the type of a variable within a specific code block. It's a conditional statement or function that checks the type of a value and provides a more specific type for TypeScript to infer within that scope.

# Type guards are particularly useful when working with union types or types that can be more than one specific shape. They enable you to perform type-specific operations or access properties confidently without the risk of runtime errors.

# In this example, Param1 and param2 could be string or a number. If two paremters are number the function will do additon. if not it'll concate both parameter. It's using typeof to check both of them are number.

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
// Another example: using "in" operator to check type.
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



```