//basic typescript varibles

let a: number; //for numeiric values 1,2,3,3.5
let b: string;   //for strings
let c: boolean //true false,
let d: null    //null
let e: undefined //undefined
let f: any //for any tpe
let g: unknown //mostly we use when we don't know the type of value at the time of declaration ,but before sing this we have to first check

//example of any

// let value: unknown = "hello";

// value.toUpperCase(); // ❌ Error

let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

/**
 * unknow vs any
 * Both any and unknown can store any value
 * on any we can call methods diretly but for unkown we have first check type
 * any is not type safe but unknown is
 * any don't require type checking while unknown requires
 */



//---Array-------

let nums: number[] = [1, 2, 34] //number type arrary
let names: string[] = ["zeeshan", "ahmad"] ///string type array

//alternative syntax mostly we use in react
let nums1:Array <number>  = [1,2,3]

//object

let user : {
    name: string
    age:number 
} = {
    name: "zeeshan",
    age:12
}

function sum(a: number, b: number):number {
    return a+b
}

//Unioun 
let id: number | string

id = 1 //success
id = "zeeshan" //success
//id=true //error id can only be a number or string



// -------interface
//interface is used to define the shape of an object

interface USER{
    id: number,
    name: string,
    age:number
}

let employe: USER = {
    id:12,name:"ahmad",age:100
}

//type is use to define the shape of unions, primitives, tuples, functions, etc

//1 with objects
type User = {
  name: string;
  age: number;
};
//2 with union
type Status = "loading" | "success" | "error";

//3 with primary type
type ID = string;
type Age = number;

//Interfce support type merginging 
interface User1 {
  name: string;
}

interface User1 {
  age: number;
}




//typescript automitically merges above two 
const emp2: User = {
  name: "Zeeshan",
  age: 28,
};
//we can also merge them manually
interface User1 {
  name: string;
  age: number;
}

//Type does NOT merge , it will throw error You cannot redefine a type
// type u1 = {
//   name: string;
// };

// type u1 = {
//   age: number;
// }; // Error     Produces never


//for Extending interface uses extends while type uses &

interface person1{
    name: string,
    age:number
}
interface person2 extends person1{
    address:string
}

let obj: person2 = {
    age: 12,
    name: "zeeshan",
    address:'frasthar'
}

//multiple interfce extend

interface A{
    a:string
}
interface Bh{
    b:string
}
interface Cm extends A,Bh {
    c:string
}




//type

type p1 = {
    name:string
}
type p2 = p1 & {
    age:number
}

let obc: p2={
    name: "as",
    age:12
}


//multiple interfce extends

type O = {
    a:string
}
type P = {
    b:string
}
type M = O & P & {
    c:string
}



//some common mistakes
interface A {
  age: number;
}

interface B {
  age: string;
}

interface CK extends A, B { } // ❌ Error
//TypeScript immediately complains because age can't be both number and string.

//Yes, an interface can extend a type using extends keywod, 
type Person = {
  name: string;
  age: number;
};

interface Employee extends Person {
  salary: number;
}

// type can also extends interfce using &
interface Person1 {
  name: string;
  age: number;
}

type Employee1 = Person & {
  salary: number;
};


//in typescript if we have to type optional we use ?

type login = {
    username: string
    password?:string
}


let Login: login = {
    username:"zeeshan"
}

//An enum is a special "class" that represents a group of constants

enum Code{
    not_found = 404,
    success = 200,
    created = 201,
    server_error = 500
    
}
Code.created //404 

//by default  if we don't set values to these constants like not_found it will give us numbers starting from 0



//A tuple is a typed array with a pre-defined length and types for each index.
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];



class Person2 {
  name: string | undefined;
}
      
const person = new Person2();
person.name = "Jane";

console.log(person);

