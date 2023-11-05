{
    // 
    // Statics in OOP.

    // When we write a normal class we can get it's properties using instance. when we write different instance for a same property/ class. These two instance wil alocate diffrent place in our memory. if we modify properties or assign values to property. we'll get diffrent data from the class. but we want to same data even though we're declaring two instances. To do so, we'll use static modifies in our class. If we use 'static' modifiers we can't call that property using 'this'. we've to call it using class name. and we also don't need to write instances to get a static value.
    
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

    


   
   


    // 
}