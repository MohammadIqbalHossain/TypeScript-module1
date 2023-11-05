{
// Utlity types.

// we'll some utility types for making life easy.

// let's create a object type first.
type Person = {
    name: string;
    age: number
    email?: string;
    contactNo: string;
}

// Pick type. I want to pick a single type from Person type.
type PersonName = Pick<Person, "name">

// Omit. I want to omit some type in person.
type contactInfo = Omit<Person, 'name' | 'age'>

//Require. I want to have a type where all person's properties are require.
type RequirePerson = Required<Person>;

//Readonly. I want to have a type where all person's properties are readony it's means we can't change their by reassigning values.
type ReadonlyPerson = Readonly<Person>

// Record. Suppoese we've a empthy object. where we'll add some property. but right now we don't know what is it's type will be. in this case we can use record type.

type RecordPerson = Record<string, unknown>

const myObj: RecordPerson = {
   name: "abul",
   age: 52,
}



// 

}