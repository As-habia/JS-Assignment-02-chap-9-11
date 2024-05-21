
// //task 1//
var city = +prompt("Where do you live?")
var correctAns = "karachi";



if (city === correctAns){
    alert("Correct")

}
else{
alert("“Welcome to city of lights”")
}


// //task 2//
var gender = prompt("Please enter your gender (male/female):");
var correctAns1 = "male";
var correctAns2 = "female";

if (gender === correctAns1) {
    alert("Good Morning Sir");
} else if (gender === correctAns2) {
    alert("Good Morning Ma’am");
} else {
    alert("Invalid input. Please enter 'male' or 'female'.");
}


//     // //task3//
    var signalColor = prompt("Please enter the color of the road traffic signal (red/yellow/green):").toLowerCase();

    if (signalColor === "red") {
        alert("Must Stop");
    } else if (signalColor === "yellow") {
        alert("Ready to move");
    } else if (signalColor === "green") {
        alert("Move now");
    } else {
        alert("Invalid input. Please enter 'red', 'yellow', or 'green'.");
    }
    

//    //task4//
    var remainingFuel = parseFloat(prompt("Please enter the remaining fuel in your car (in litres):"));

    if (remainingFuel < 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("Your fuel level is sufficient");
    }

    //task5//
    var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}


//task7//

var secretNumber = 3;

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The secret number is " + secretNumber);
}

//task8//
var number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}

//task9//
var number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    alert("The number " + number + " is even.");
} else {
    alert("The number " + number + " is odd.");
}

//task10//
var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is freezing outside!");
}

//task11//
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber === 0) {
        result = "Cannot divide by zero";
    } else {
        result = firstNumber / secondNumber;
    }
} else if (operation === "%") {
    if (secondNumber === 0) {
        result = "Cannot find modulus by zero";
    } else {
        result = firstNumber % secondNumber;
    }
} else {
    result = "Invalid operation";
}

alert("Result: " + result);


//task6//
var totalMarks = 300;

var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));

var totalObtained = subject1 + subject2 + subject3;
var percentage = (totalObtained / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry, you are fail";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + totalObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");


