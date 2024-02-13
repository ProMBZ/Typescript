// function func(nam:string){
//     console.log(nam)
// }
// function hello(text:string,callback:any){
//     callback(text)
// }
// hello("Hello,Hi",func)
// console.log("First")
// setTimeout(()=>console.log("Second"),0)
// for(let i= 0; i<1000000;i++ ){
//     let b = 0
// }
// console.log("Third")
// Try This Promise Pending Project
// let myPromise = new Promise((resolve,reject)=>{
//     console.log("Promise Pending....")
//     setTimeout(()=>{
//         let data = ""
//         if(data){
//             console.log("Promise Resolved....")
//             resolve(data)
//         }else{
//             console.log("Promise Rejected....")
//             reject("Data Fetch Error....")
//         }
//     },2000)
// })
// myPromise
// .then((res)=>(console.log(res)))
// .catch((err)=>(console.log(err)))
fetch("")
    .then((res) => (console.log(res)))
    .catch((err) => (console.log(err)));
export {};
