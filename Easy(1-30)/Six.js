// What is closure in JavaScript? with example

// In JavaScript, a closure is created when a function is defined within another function (nested function) and it has access to variables from its outer (enclosing) function's scope, even after the outer function has finished execution. In other words, a closure allows a function to "remember" the environment in which it was created, including the variables that were in scope at that time.

const outerFunction = (outerVariable)=>{

    return function innerFunction(innerVeriable){
        console.log(`this is  ${outerVariable}`)
        console.log(`this is  ${innerVeriable}`)
        console.log("hello")

    }
}
 const newFunction = outerFunction("outervariable")
 newFunction('innerVeriable')


//   example 2 

const counterInit = ()=>{
    let count = 0

    return function incCounter(){
        count++
        console.log(count)
    }
}

const counter1 = counterInit()
counter1()
counter1()