"use strict";
//Reference type: In this module I'll learn how to write objects in TS. Optional and literals.
// Okay let's write a object first. We can define data types like tuople.
const myProfile = {
    company: 'unemployed',
    firstName: 'Mohammad',
    middleName: 'Iqbal',
    lastName: 'Hossain',
    isMarried: true
};
// myProfile.lastName = "Abdullah"; This will give error. 
// Optional:
//If we don't write a property data types. It'll give us error. let's assume we occoured in a situation that middleName property can be there it's optional, so we can make it optional. 
//Literals:
// Now imagine a situtation where we've to store exacly same number or same string we can't edit it. or write a different value or add something to it. think about my first name is will always be mohammad it can't be changed. so, we'll write the value in the  type declaration. and it'll become a type, changing it's value will give error. it's called literals.
