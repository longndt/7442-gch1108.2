//if - else
grade = 3.5
if (grade >= 5.0) {
   console.log("Pass")
   console.log("Congratulations !")
} else {
   console.log("Fail")
   console.log("Prepare for redo class")
}

//if - else if - else
mark = 15
if (mark >= 9.0 && mark <= 10)
   console.log("Distinction")
else if (mark >= 8.0 && mark < 9.0)
   console.log("Merit")
else if (mark >= 5.0 && mark < 8.0)
   console.log("Pass")
else if (mark >= 0.0 && mark < 5.0)
   console.log("Fail")
else
   console.log("Invalid grade")

//ternary operator
grade = 5.6
result = grade >= 5.0 ? "Pass" : "Fail"
console.log("Result : " + result)

//switch - case
speed = 0
switch (speed) {
   case 0:  //if
      console.log("Fan is stopped");
      break;
   case 1:  //else if
      console.log("Fan speed is 1");
      break;
   case 2:  //else if
      console.log("Fan speed is 2");
      break;
   case 3:   //else if
      console.log("Fan speed is 3");
      break;
   default:  //else
      console.log("Invalid speed");
      break;
}

