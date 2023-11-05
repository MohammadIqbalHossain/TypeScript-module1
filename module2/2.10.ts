{
    // 
    // Mapped types: we'll convert a type another typei using mapped types.

    // How we do it in JavaScript?
    const arrayOfNumber: number[] = [1, 3, 56];
    const arrayOfStrings: string[] = arrayOfNumber.map(number => number.toString());
    console.log(arrayOfStrings);


    // Here we've a type of object numbers.
    type AreaNumber = {
        height: number;
        width: number
    };


    // converting it using hart coded value.
    type AreaString = {
        [key in "height" | "width"]: string
    }

    // Convert using keyof operator.
    type AreaString1 = {
        [key in keyof AreaNumber]: string
    };

    // Look up type.
    type LookUpArea = AreaNumber['height'];

    // Mapped types using lookup and generics.
    // We looping in area number and taking it's key and converting it into a strng.
    type AreaString2<T> = {
        [index in keyof T]: T[index];
    };


    const result : AreaString2<{name: string, age: number}> = {name: "iqbal", age: 23};


    // 

    // 


}