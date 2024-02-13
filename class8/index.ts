 // Revision
 //Try This This Is The Best

// type Person = {
//     name: string;
//     age: number;
//     email: string;
// }

// const person = {
//     name: "Muhammad",
//     age: 11,
//     email: "muhammadzohaib1415@gamil.com",
//      children?: {             // for telling that  the children is opitional use this ?
//         name: "Zamin",
//         age: 4,
//     },
//     car: {
//         model: 2023,
//         color: "Black"                       // and the ,,, is must hai lagana
//     }
// }

// console.log(person.children.name)


// const person2: Person = {
//     name: "Abu Bakar",
//     age: 9,
//     email: "abubakarzohaib1415@gmail.com"

// }

//Class Work:\

// type Student = {
//     name: string,
//     rollNumber: string
// }

// type Teacher = {
//     name: string,
//     experince: number
// }

// let std1: Student = {
//     name: "Muhammad",
//     rollNumber: "PIAIC123"
// }

// let teacher1: Teacher = { 
//     name: "Zia",
//     experince : 10,
// }

// // let both: Student | Teacher = {
// //     name: "Abu Bakar",
// //     experince: 2,
// //     rollNumber: "213"
// // }

// let both: Student & Teacher = {             // when you write this | it will only show name so write & it wull show all
//     experince: 22,
//     name: "Hafsa",
//     rollNumber: "PIAIC456"
// }                

// both.rollNumber

// any never unknown

// let a: any = 10;
// let b: boolean = true;

// a = "Hello World"
// a = b;
// a = b;
// b

// let a: unknown = "Hello World";
// let b: unknown = true;

// a = 10;
// a = true;
// a = {}

// a = b

// b = a

// let a: string = "Hello World";

// if (typeof a === "string") {
//     console.log(a)
// } else {
//     console.log(a);
// }

// let myname: unknown = "Zia";
// console.log((myname as string).toUpperCase());       // see this roud bracket     

// myname

// let a: string = "Muhamamd";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
// let b: unknown = 22;

// a = b as number;

// let meetingDay: string = "Monday"          // Make this for interview          meeting days

// if (meetingDay === "Sunday") {
//     console.log("No Meeting")
// }  else if (meetingDay === "Monday") {
//     console.log("Meeting at 10:00 AM")
// }

 // enum

//  let days: "Monday" |  "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

// Calulator Operation Try Thisd

// enum  Operator {
//     Addition,
//     Subtraction, 
//     Multiplication, 
//     Division, 
// }

// let cal: Operator = Operator.Addition;

// if(cal === Operator.Addition) {
//     console.log(2 + 2)
// } else if  (cal === Operator.Subtraction) {
//     console.log( 2 - 3)
// }

// const enum Colr1 {Red = 1, Green, Blue}; 

let fruits:string