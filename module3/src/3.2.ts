{
// Module-2: class and object. 

// Contents: 
// 1. Write a class. 2. make properties. 3. Intialize properties. 4. Use public parameter property to make your code simple. 5. Instance.

// Write class:
class Cricketer {
    name : string; 
    age: number;
    bestPerformence: string;
    debut: number

    constructor(name: string, age: number, bestPerformance: string, debut: number){
        this.name = name;
        this.age = age;
        this.bestPerformence = bestPerformance;
        this.debut = debut
    }

    interviewTalks(){
         console.log(`${this.name} talks about his ${this.bestPerformence}`);
    }
}

const tamimIqbal = new Cricketer("Tamin", 36, "Lords Hundred", 2006);

const tamimAge = tamimIqbal.age;
const tamimPerformance = tamimIqbal.bestPerformence;

// Explanation for Code Review:

// In the above example, we're encountering code repetition. Properties are being declared, written as parameters, and repeated in the constructor. To mitigate this redundancy, we should use the 'public' parameter property.

// All the properties of this Cricketer class are publicly accessible. Attempting to access them prompts suggestions. Here's a modified code example that eliminates repetition.


class GreatCricketer {
    // public name : string; // If we don't write public keyword, it's still public. 

    // We also don't need to write properties name. we're just writing public keyword before parameter and it's all doe. and 
     
    constructor(public name: string, public age: number, public bestPerformance: string, public debut: number){
        // Now. we don't have to initialize.
    }
     
    // A Merhod (Fucntion).
    interviewTalks(){
         console.log(`${this.name} talks about his ${this.bestPerformence}`);
    }
}



// 
}