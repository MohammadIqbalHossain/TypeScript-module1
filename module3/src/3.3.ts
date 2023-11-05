{
    // Inheritance: 
     
    // Suppose we've two class 'Student' and 'Teacher'. all the students properties, methods are available in teacher class. In this scenarion we've to write all everything repeatedly. To omit this code reapeataion we can write a parent class and inherite or take parents properties and methos in our 'Student' and 'Teacher' class. 

    // In this way we can add child's classes it's own  properties and methods and also inherit their parents properties. 

    // Okay enought taklkings let's write the code:

    class student {
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

    // Now, you can see both 'Student' and 'Teacher' has name, address, age sleep property in common. so we'll write a parent class to omit these repeatation. 


    // This is the parent class. 
    class Person {
        constructor(public name: string, public age: number, public address: string){
        
        }

        sleep(sleepHours: number){
            console.log(`${this.name} sleeps ${sleepHours} a day.`);
        }
    }



    class Student2 extends Person {
        constructor(public name: string, public age: number, public address: string){
          super(name, age, address)
        }
    }

    // Here we're calling a super() fucntion in constructor. as we know we're inheriting data from parent. our constructur wouldn't make the student, they are person's property. So, we've to send them to the 'Person' class to make the student. super() is a method to send our data to it's

    const shoriful = new Student2('shoriful', 23, "Gahana");
    shoriful.sleep(5);


    class Teacher2 extends Person {
        constructor(public name: string,
            public age: number,
            public address: string,
            public designation: string
            ){
                super(name, age, address)
            }

            takeClass(classHours : number){
                console.log(`${this.name} takes class ${classHours} a day.`);
            }
    }

    const Karim = new Teacher2('Karim', 34, "Ghana", "Math teacher");
    Karim.takeClass(4);

    // 
}