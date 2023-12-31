// <!-- 2. Explain the difference between `let`, `const`, and `var`. -->
//     var:


    // Scope: Function-scoped. If declared inside a function, the variable is only accessible within that function.
     // Hoisting: Variables declared with var are hoisted to the top of their scope, which means you can use them before the declaration.
    // Reassignment: Can be reassigned and updated.

    // example


    // for var 
    console.log("...............var .............")
    var a = 13
      const varExample = ()=>{
       var a = 5
        if(a<10){
            console.log("not allowed for cycling")
        }
        else{
            console.log("You are Allowed for Cycling ")
        }
        console.log( "var a =" , a)
      }
      varExample()
      console.log( "var a =" , a)



//       let:

    // Scope: Block-scoped. If declared inside a block (like if or for), the variable is only accessible within that block.
    // Hoisting: Variables declared with let are hoisted to the top of their block, but they are not initialized, so you cannot use them before the declaration.
    // Reassignment: Can be reassigned but not re-declared in the same scope.
    // example


    console.log("...............let .............")
    const letExample = ()=>{
        let b = "noman"
        if(true){
            let c = 20;
            console.log("inside if scope .. let c = ", c)
        
        }
        // console.log(c)  // eror b/c we can not use let outof scope

        // let b = "raza"   // eror b/c not re-declared in the same scope.

    }
    letExample()

//     const:

    // Scope: Block-scoped, just like let.
    // Hoisting: Variables declared with const are also hoisted to the top of their block, but like let, they are not initialized.
    // Reassignment: Cannot be reassigned after declaration. However, for objects and arrays declared with const, their properties or elements can be modified.

    console.log("...............const .............")

    const constExample =()=>{
        const x = "muhammad"
        // x = "raza"   // error
        console.log(x)


    }
    constExample()

