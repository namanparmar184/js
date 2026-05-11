



// ===============================
// Chapter 14–16 - Arrays in JavaScript
// ===============================



// // Question 1
// var studentNames = [];



// // Question 2
// var studentNamesObj = new Array();



// // Question 3
// var stringArray = ["Ali", "Ahmed", "Sara"];



// // Question 4
// var numberArray = [10, 20, 30, 40];



// // Question 5
// var booleanArray = [true, false, true];



// // Question 6
// var mixedArray = ["Ali", 20, true, 5.5];



// // Question 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications:</h2>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// document.write("<br>");



// // Question 8
// var students = ["Ali", "Ahmed", "Sara"];
// var scores = [420, 380, 470];
// var totalMarks = 500;

// for (var i = 0; i < students.length; i++) {
//     var percent = (scores[i] / totalMarks) * 100;
//     document.write("Score of " + students[i] + " is " + scores[i] +
//         ". Percentage: " + percent + "%<br>");
// }

// document.write("<br>");



// // Question 9
// var colors = ["Red", "Green", "Blue"];

// document.write("Original Array: " + colors + "<br>");

// // a
// colors.unshift(prompt("Enter color to add at beginning"));
// document.write("After unshift: " + colors + "<br>");

// // b
// colors.push(prompt("Enter color to add at end"));
// document.write("After push: " + colors + "<br>");

// // c
// colors.unshift("Yellow", "Purple");
// document.write("After adding two colors: " + colors + "<br>");

// // d
// colors.shift();
// document.write("After shift: " + colors + "<br>");

// // e
// colors.pop();
// document.write("After pop: " + colors + "<br>");

// // f
// var indexAdd = +prompt("At which index to add color?");
// var colorName = prompt("Enter color name:");
// colors.splice(indexAdd, 0, colorName);
// document.write("After splice add: " + colors + "<br>");

// // g
// var indexDel = +prompt("At which index to delete color?");
// var countDel = +prompt("How many colors to delete?");
// colors.splice(indexDel, countDel);
// document.write("After splice delete: " + colors + "<br><br>");



// // Question 10
// var scoresArr = [320, 230, 480, 120];

// scoresArr.sort(function(a, b) {
//     return a - b;
// });

// document.write("Sorted Scores: " + scoresArr + "<br><br>");



// // Question 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(0, 3);

// document.write("Selected Cities: " + selectedCities + "<br><br>");



// // Question 12
// var arr = ["This ", " is ", " my ", " cat"];
// var result = arr.join("");

// document.write(result + "<br><br>");



// // Question 13 (FIFO - Queue)
// var fifo = [];

// fifo.push("1");
// fifo.push("2");
// fifo.push("3");

// document.write("FIFO: " + fifo + "<br><br>");



// // Question 14 (LIFO - Stack)
// var lifo = [];

// lifo.push("A");
// lifo.push("B");
// lifo.push("C");

// document.write("LIFO: " + lifo.reverse() + "<br><br>");



// // Question 15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");

// for (var i = 0; i < phone.length; i++) {
//     document.write("<option>" + phone[i] + "</option>");
// }

// document.write("</select>");


// ===============================
// Chapter 14–16 - Arrays in JavaScript
// ===============================
