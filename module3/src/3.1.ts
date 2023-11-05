// Procesural programming paradigm. 

// Procedural programming paradigm is a approach of programming that sets a computer programming  in a structured produres or funciton. These procedure consist of a series of well-defined steps or instruction that are executed seqentially. However it may lack reusability and functionaly of advance programming paradigm.


// Python example:

def greet(name)
    print("Hello" + name);

greet("developer")


// Functional programming paradigm:

// Functional programming is lieke set of building block that are like mathmatical function. that helps you make your code easier to understamd and less bug fiendly. In functional programming paradigm function are treats like a king.

// Functional programming.
function greet(myName){
    console.log(myName)
}

greet('Developer');

// Declarative programming: Declarative programming focused on what you want to achive rather that writing step-by-step code to achive that outcome. Programmer should properly descripe what he wants to accomplish. and underlying frameworks or programming will find out how to achive the outcome.


Declarative programming.
SELECT first_name, last_name;
FROM empolyees
WHERE depertment = 'sales'


// Object-Oriendted-Programming: Object oriented programmming (OOP) is programming paradigm that organizes programming around the objects. which are instance of classes defining data and behevior. In OOP, software are designed by modeling real world objects, each having arrtibutes (data) and methods (Fucntion) that operates on the data.

class greeter {
    private name : string 

    constructor(name: string){
        this.name = name;
    };

    public greet(): string {
        return `Hello ${this.name}`
    }
}

const myGreeter = new greeter('Iqbal');
const message = myGreeter.greet();
console.log(message);


// Event-driven-Programming: event driven programming is paradigm that listens to user instruction responds to it. In evetn-driven-programming sofware are designed to wait for react events. such as user clicks keyboard inputs and so on.

document.getElementById('myButton')?.addEventListener('click', () => {
    alert("Button clicked");
})

