

```markdown
# Overview of Programming Paradigms

This repository provides examples for different programming paradigms. Each paradigm offers a unique approach to structuring code and solving problems.

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

Explore these examples to gain insights into how each paradigm approaches problem-solving and code organization.
```

Feel free to use or modify this `README.md` file for your repository!
