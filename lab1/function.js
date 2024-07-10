//1st type: without parameter (input) + without return (output)
function sayHello() {
   console.log("Hello world")
}
sayHello()

//2nd type: with parameter + no return
function calculateTotal(a, b) {
   console.log(a+b)
}
calculateTotal(30, 70)

//3rd type: without parameter + with return
function welcome() {
   message = "Welcome to Greenwich Vietnam"
   return message
}
console.log(welcome())

//4th type: with parameter + with return
function calculateMultiplication(x, y) {
   return x * y
}
console.log("Result: " + calculateMultiplication(5, 7))