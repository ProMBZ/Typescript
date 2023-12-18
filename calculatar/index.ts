var prompt = require("prompt-sync")();

let n1 = parseInt(prompt('Please Enter Your First Number:'))

let n2 = parseInt(prompt('Please Enter Your Second Number:'))

let operator = prompt('Please Enter Your Operator (+, -, *, /):')

if (operator == '+'){
    console.log(`The Answer Of ${n1} ${operator} ${n2} = ${n1+n2}`)
}
else if (operator == '-'){
    console.log(`The Answer Of ${n1} ${operator} ${n2} = ${n1+-n2}`)
}
else if (operator == '*'){
    console.log(`The Answer Of ${n1} ${operator} ${n2} = ${n1*n2}`)
}
else if (operator == '/'){
    console.log(`The Answer Of ${n1} ${operator} ${n2} = ${n1/n2}`)
}
else(
    console.log('Please Select The Correct Operator')
)

export{};