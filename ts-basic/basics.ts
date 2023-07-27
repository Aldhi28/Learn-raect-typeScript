// Primitives: number, string, boolean
// More complex type: arrays, objects
// Function Types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "aldhi";

let isInstructor: boolean;

isInstructor = true;

// More complex type

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "aldhi",
  age: 26,
};

// person = {
//     isEmployee: true
// }

let people: Person[];

// Type interface

let course: string | number = "React - The Complete Guide";

course = 123452;

// function & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('')
