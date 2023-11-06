{
    // 
    // Polymorphism: When a method of a class changes it's output based on diffrent situation then can call it polymorphism.

    // here, we're written a class 'Shape' that has just a method which return 0. But In class 'Circle' which is a child of 'Shape' that uses same method 'getArea' but return circle area with the help of 'Radius' whic we're getting by a constructor. and third class 'Rectengular' also does same. 


    class Sleep {
        getSleep(): void{
            console.log(`People sleeeps 8 hours a day.`);
        }
    }

    class Student extends Sleep{
        getSleep(): void {
            console.log(`Student sleeps 7 hours a day`);
        }
    }

    class Developer extends Sleep{
        getSleep(): void {
            console.log(`Developers sleeps 6 hours a day`);
        }
    }

    const normaPerson = new Sleep();
    const student = new Student();
    const developer = new Developer();

    const getSleep = (sleepTime: Sleep) =>{
         return sleepTime.getSleep();
    }

    const result1 = getSleep(normaPerson);
    const result2 = getSleep(student);
    const result3 = getSleep(developer);


    // Let's see another example:

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






    // 
}