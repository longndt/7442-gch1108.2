// single line comment

/* multiple
line
comment */

//Note: JavaScript in general and NodeJS
//in specific, semicolon (;) are optional

//display text to console
console.log("Greenwich Vietnam");
console.log("Cloud Computing")
console.log(2024)
console.log('Today is Wednesday')

//display error to console
console.error("Add data failed !");

//declare variable
var a = 10  //global scope
let b = 15  //local scope
const PI = 3.14  //constant : value not change
$x = 100  //syntax like PHP
y = 88    //syntax like Python

console.log("a = " + a)

//calculation
n = 10;
m = 20;
total = n + m;
console.log(total);
console.log(n * m);

a = 17
b = 3
c = a % b; // %: modulus operator (get remainder of a division)
console.log(c);

//prefix (before) & postfix (after) operator
x = 10
y = x++  //postfix : y=x=10 => x++=x+1=10+1=11
z = ++x  //prefix  : ++x=x+1=11+1=12 => z=x=12

console.log("x = " + x)   //12
console.log("y = " + y)   //10
console.log("z = " + z)   //12

//x++ = ++x = x+1