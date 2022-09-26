
// typescript basic data types 

let age:number = 25; // intiger 
let lname: string="abdurehman"; // string data type
let fname: string = "redi"; 
var weight: number = 62.5;
let activated : boolean = true;  // boolean data type


// display values 

console.log("First name is= " + fname);
console.log("Father name is = " + lname);
console.log("Age = " + age);
console.log("Weight " + weight);
console.log("Active user = " + activated);

// array variables 

var arr1 = [1,2,3,4,5];
var arr2:number[] = [1,2,3,4,5];
console.log(arr1)

// tuple variable 

var user: [string, number] = ["abdroid", 1234]
console.log(user)

// constant variable

const small = 1
const mid = 2
const larg = 3

// enum variable type

enum Size {small, Mid, Large}

// typescript object

let drivers: {
    id:number
    name:string
    age?:number

} = {id:23, name:"abdre"}
console.log(drivers)

drivers.name = "belete"
drivers.id = 3242









