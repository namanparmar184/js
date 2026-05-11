// // ===============================
// // Chapter 1 - Alerts
// // ===============================



// // Question 1
// alert("Welcome to our website!");



// // Question 2
// document.write("Error! Please enter a valid password.<br><br>");



// // Question 3
// document.write("Welcome to JS Land...<br>");
// document.write("Happy Coding!<br><br>");



// // Question 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");



// // Question 5
// console.log("Hello... I can run JS through my web browser's console");



// // Question 6
// alert("Welcome to my website!");



// // Question 7

// // a. Script in Head
// alert("Q7 (a): Script inside Head");


// // b. Script before page HTML
// alert("Q7 (b): Script before page HTML");


// // c. Script inside page HTML
// alert("Q7 (c): Script inside page HTML");


// // d. Script after page HTML
// alert("Q7 (d): Script after page HTML");




// // ===============================
// // Chapter 1 - Alerts
// // ===============================



// // ===============================
// // Chapter 2 - Variables for Strings
// // ===============================



// // Question 1
// var username;



// // Question 2
// var myName = "Your Full Name";



// // Question 3
// // a + b + c
// var message;
// message = "Hello World";
// alert(message);



// // Question 4
// var studentName = "Ali";
// var age = "20";
// var course = "Web Development";

// alert(studentName);
// alert(age);
// alert(course);



// // Question 5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);



// // Question 6
// var email = "example@example.com";
// alert("My email address is " + email);



// // Question 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);



// // Question 8
// document.write("Yah! I can write HTML content through JavaScript<br><br>");



// // Question 9
// var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);
// document.write(str);


// ===============================
// Chapter 2 - Variables for Strings
// ===============================

// ===============================
// Chapter 3 - Variables for Numbers
// ===============================



// // Question 1
// var age = 20;   // apni age yahan likho
// alert("I am " + age + " years old");



// // Question 2
// var visits = 1;

// visits = visits + 1; // har reload pe manually increase (basic example)

// document.write("You have visited this site " + visits + " times<br><br>");



// // Question 3
// var birthYear = 2005;   // apna birth year yahan likho

// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is number<br><br>");



// // Question 4
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");




// ===============================
// Chapter 3 - Variables for Numbers
// ===============================

// ===============================
// Chapter 4 - Variable Names Rules
// ===============================



// Question 1
var a = 10, b = 20, c = 30;



// Question 2

// Legal variable names
// var myName;
// var $price;
// var _age;
// var user1;
// var total_marks;

// Illegal variable names (only written as examples, JS will not allow them to run)
// var 1name;
// var my-name;
// var var;
// var alert;
// var user name;



// Question 3

// document.write("<h1>Rules for naming JS variables</h1>");

// document.write("<p>Variable names can only contain letters, numbers, $ and _.<br>");
// document.write("For example: $my_1stVariable</p>");

// document.write("<p>Variables must begin with a letter, $ or _.<br>");
// document.write("For example: $name, _name or name</p>");

// document.write("<p>Variable names are case sensitive</p>");

// document.write("<p>Variable names should not be JS keywords</p>");



// ===============================
// Chapter 4 - Variable Names Rules
// ===============================

// ===============================
// Chapter 5 
// ===============================



// // Question 1
// var num1 = 10;
// var num2 = 5;

// var sum = num1 + num2;
// document.write("Sum: " + sum + "<br><br>");



// // Question 2
// var a = 10, b = 5;

// document.write("Subtraction: " + (a - b) + "<br>");
// document.write("Multiplication: " + (a * b) + "<br>");
// document.write("Division: " + (a / b) + "<br>");
// document.write("Modulus: " + (a % b) + "<br><br>");



// // Question 3
// var value;

// document.write("Value after variable declaration is: " + value + "<br>");

// value = 5;
// document.write("Initial value: " + value + "<br>");

// value++;
// document.write("Value after increment is: " + value + "<br>");

// value = value + 7;
// document.write("Value after addition is: " + value + "<br>");

// value--;
// document.write("Value after decrement is: " + value + "<br>");

// document.write("The remainder is: " + (value % 3) + "<br><br>");



// // Question 4
// var ticketPrice = 600;
// var totalTickets = 5;

// document.write("Total cost of buying " + totalTickets + " tickets is " + (ticketPrice * totalTickets) + " PKR<br><br>");



// // Question 5
// var table = 5;

// for (var i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + (table * i) + "<br>");
// }

// document.write("<br>");



// // Question 6
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;

// document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// var f = 70;
// var c = (f - 32) * 5/9;

// document.write(f + "°F is " + c + "°C<br><br>");



// // Question 7
// var item1 = 500;
// var item2 = 300;
// var qty1 = 2;
// var qty2 = 3;
// var shipping = 100;

// var total = (item1 * qty1) + (item2 * qty2) + shipping;

// document.write("<h3>Shopping Cart</h3>");
// document.write("Total cost: " + total + " PKR<br><br>");



// // Question 8
// var totalMarks = 500;
// var obtainedMarks = 380;

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("Percentage: " + percentage + "%<br><br>");



// // Question 9
// var usd = 10;
// var sar = 25;

// var totalPKR = (usd * 104.80) + (sar * 28);

// document.write("Total currency in PKR: " + totalPKR + "<br><br>");



// // Question 10
// var result = ((5 + 5) * 10) / 2;

// document.write("Result: " + result + "<br><br>");



// // Question 11
// var currentYear = 2026;
// var birthYear = 2005;

// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.write("They are either " + age1 + " or " + age2 + " years old<br><br>");



// // Question 12
// var radius = 10;
// var pi = 3.142;

// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write("The circumference is " + circumference + "<br>");
// document.write("The area is " + area + "<br><br>");



// // Question 13
// var snack = "Chips";
// var age = 20;
// var maxAge = 60;
// var perDay = 2;

// var totalNeeded = (maxAge - age) * 365 * perDay;

// document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge);


// ===============================
// Chapter 5 
// ===============================



// ===============================
// Chapter 12 & 13 - IF ELSE Statements
// ===============================



// // Question 1
// var input = prompt("Enter a character:");

// var charCode = input.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     document.write("Input is a number<br>");
// }
// else if (charCode >= 65 && charCode <= 90) {
//     document.write("Input is an Uppercase letter<br>");
// }
// else if (charCode >= 97 && charCode <= 122) {
//     document.write("Input is a Lowercase letter<br>");
// }
// else {
//     document.write("Invalid input<br>");
// }



// // Question 2
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");

// if (num1 > num2) {
//     document.write(num1 + " is larger<br>");
// }
// else if (num2 > num1) {
//     document.write(num2 + " is larger<br>");
// }
// else {
//     document.write("Both numbers are equal<br>");
// }



// // Question 3
// var number = +prompt("Enter a number:");

// if (number > 0) {
//     document.write("Positive number<br>");
// }
// else if (number < 0) {
//     document.write("Negative number<br>");
// }
// else {
//     document.write("Number is zero<br>");
// }



// // Question 4
// var ch = prompt("Enter a single character:");

// if (
//     ch == "a" || ch == "e" || ch == "i" ||
//     ch == "o" || ch == "u" ||
//     ch == "A" || ch == "E" || ch == "I" ||
//     ch == "O" || ch == "U"
// ) {
//     document.write("True (Vowel)<br>");
// } else {
//     document.write("False (Not a vowel)<br>");
// }



// // Question 5
// var correctPassword = "12345";
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     document.write("Please enter your password<br>");
// }
// else if (userPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password<br>");
// }
// else {
//     document.write("Incorrect password<br>");
// }



// // Question 6 (Fixed Code)
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// document.write(greeting + "<br>");



// // Question 7
// var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

// if (time >= 0000 && time < 1200) {
//     document.write("Good Morning<br>");
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon<br>");
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening<br>");
// }
// else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night<br>");
// }
// else {
//     document.write("Invalid time<br>");
// }



// ===============================
// Chapter 12 & 13 - IF ELSE Statements
// ===============================
