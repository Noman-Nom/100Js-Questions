// 5. What is the purpose of the `this` keyword?

// The this keyword in JavaScript is a reference to the object on which the current code is being executed. Its value is determined by how a function is called, and it provides a way to access the properties and methods of the object to which it belongs. The behavior of this can vary depending on the context in which it is used.


const Object = {
    name: "Muhammad Noman",
    message: function(){
        // console.log(this.name + ` Hello`)
        // console.log(this.name, ` Hello`)
        console.log(`${this.name} Hello`)
        console.log(this)
    }



}
Object.message()