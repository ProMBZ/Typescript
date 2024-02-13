 // Functions
// function sum( num1: number, num2: number): number {
//     return num1 + num2;
// }

// round braket zaro ri hai? or isy call karna bhi zarori

 // sum();

// let result = sum(3, 6);



// console.log(result);


// Anonimoys Function

// type Sum = (num1: number, num2: number) => number;

// let add: Sum = function(num1, num2){
//     return num1 + num2;
// }

// let result = add(3, 6);

// console.log(result);
// let sum: Sum = function(num1, num2) {
//    return num1 + num2;
// }

// sum(3, 6);

// Arrow Function

// let sum = (num1: number, num2: number): number =>  num1+ num2;

// let result = sum(3, 6);

// console.log(result)


// let fullName = (firstName: string, lastName: = "Khan") => {
   // console.log(firstName, lastName);

//     return firstName + ' ' + lastName;

// };


// let fullN = fullName('Muhammad'); // undefined

// console.log(fullN);

// Rest O[perator]
// console.log("Hello World")

// let makeMessage = (name: string, ...message: string[]) => {

//      console.log(message.join(" "));

// }

// makeMessage("Ali", "Hello", "World", "How", "Are", "You")

function add(arg1: string, arg2: string): string;// option 1
function add(arg1: string, arg2: number): string;// option 2
function add(arg1: string, arg2: any): any {
    return arg1 + arg2;
}
