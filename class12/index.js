// Revision
// Last Assignemnt Of Typescript Is University Managment System...
// Private    // we will use private for private your salary from other...
// Protected  // when we will use protected so anybody cannot update the salary...                    
// Public     // and for public when we use public so all the people can see the salary...
// class Person {
//    public name:string = "Muhammad"
//    protected _salary:number = 10000000
//     getName(){
//         console.log(this.name)
//     }
// }             
// class Human extends Person{
//     hello(){
//         this._salary
//     }
// }
// let p = new Person()
// let h = new Human()
// console.log()
// Working
//  class Person{
//     private _name = "Muhamamd"
//     getName (){
//         return this._name
//     }
//  }                   
//  class Human extends Person {
//      hello(){
//         this
//      }
//  }
//  let h = new Human()
// Private
// class Person{
//     private _name = "Muhammad"
//     get name(){
//         return this._name
//     }
//     set name(val){
//         this._name = val
//     }
//     updateName(nam:string){
//     this._name = nam
// }
// }
// let p = new Person()
// p.updateName("Abu Bakr")
// console.log(p.name)
// Protected
// class Person{
//     private _name = "Muhammad"
//     private _salary = "10000"
//     get salary(){
//         let isallowed = false
//         if(isallowed) {
//         return this._salary
//         }
//         return "Ap Is Salary Ko Aceess Nahi Kar Sakatay..."
//     }
//     set salary(val){
//         this._salary = val
//     }
//     updateName(nam:string){
//     this._name = nam
// }
// }
// let p = new Person()
// console.log(p.salary)
// For Private Your Salary use this code ... 
// When you will write the true     let isallowed = true  in this code so it will show the salary and when you have write false so it will not show you the salary
//  class Person{
//    private _name = "Muhammad"
//     private _salary = "10000"
//    get salary(){
//     let isallowed = false
//    if(isallowed) {
//   return this._salary
//     }
//     return "Ap Is Salary Ko Aceess Nahi Kar Sakatay..."
//     }
//     set salary(val){
//     this._salary = val
//   }
//     updateName(nam:string){
//    this._name = nam
//   }
//   }
//    let p = new Person()
//   console.log(p.salary)     
// class Player {
//     game(){
//         console.log("Criket")
//     }
// }
// class Game extends Player {
//     game(){
//         console.log("Fotball")
//     }
// }
// let g = new Game()
// g.game();
// class Animal{
//     sound(){
//         console.log("Some Sound")
//     }
// }
// class Cat extends Animal{
//     sound(): void {
//         console.log("Meeeooow.....")
//     }
// }
// class Cow extends Animal{
//     sound(): void {
//         console.log("Muuuuuuuu......")
//     }
// }
let a = { name: "Muhammad" };
let b = { name: "Abu Bakar", age: 9 };
a = b;
class Dog {
    constructor() {
        this.name = "Tommy Dogi...";
    }
}
class Cat {
    constructor() {
        this.name = "Mano Billi...";
        this.age = 3;
    }
}
let d = new Dog();
let c = new Cat(); // fresh
// d = c  no error
// c = d  error
// d = new Cat() no error
// c = new Dog() error
// c = d as Dog error
console.log(d);
console.log(c);
export {};
