

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

