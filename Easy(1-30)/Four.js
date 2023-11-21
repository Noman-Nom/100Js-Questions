
// <!-- 4. How do you check if a variable is an array? -->
let exampleArray = [1,2,4,5]
let exampleNotArray = {key:"Value"}

console.log(Array.isArray(exampleArray))
console.log(Array.isArray(exampleNotArray))


const checkArray = (check)=>{
    if(Array.isArray(check)){
        console.log("This is Array")

    }else{
      console.log("this is not Array")
    }

}

checkArray(exampleArray)
checkArray(exampleNotArray)