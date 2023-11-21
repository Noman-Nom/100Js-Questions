
// <!-- What is the significance of the `typeof` operator? -->



    
// <!-- The typeof operator in JavaScript is used to determine the type of a variable or an expression. It returns a string indicating the data type of the operand. It's a useful tool for checking the type of a variable before performing certain operations or validations. -->


let exampleString = "Muhammad Noman"
let exampleNumber = 45;
let exampleBolean = true;
let exampleNull = null;
let exampleUndefined;
let exampleArrray=[1,2,3,4,5,6,7,8,9];
let exampleObject = {key:"value"}

console.log(typeof exampleString)
console.log(typeof exampleNumber)
console.log(typeof exampleBolean)
console.log(typeof exampleNull)
console.log(typeof exampleUndefined)
console.log(typeof exampleArrray)
console.log(typeof exampleObject)



const exampleFunction = ()=>{
    console.log("this is function")
}

exampleFunction()

console.log(typeof exampleFunction)
