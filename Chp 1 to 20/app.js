document.getElementById("demo").innerHTML = "<h1>Chapter 1</h1>";


// document.write("<h3>Question # 1</h3> Write a script to greet your website visitor using JS alert box.");
// window.alert("Hello! Welcome to my website...");


// document.write("<h3>Question # 2</h3> Write a script to display following message on your web page");
// window.alert("Error! Please enter a valid password.");


// document.write("<h3>Question # 3</h3> Write a script to display following message on your web page");
// alert("Welcome to JS land...\nHappy Coding!");


// document.write("<h3>Question # 4</h3>Write a script to display following messages in sequence");
// window.alert("Welcome to JS land...");
// window.alert("Happy Coding!");


// document.write("<h3>Question # 5</h3> Generate the following message through browser’s developer console");
// var a = "Hello.. I can run JS through my web browser's console"
// console.log(a);
// alert(a);

document.getElementById("comment").innerHTML = "answers are in comment";



document.getElementById("ch2").innerHTML = "<h1>Chapter 2</h1>";


document.getElementById("heading").innerHTML = "<h3>Question # 1</h3> Declare a variable called username";
var userName = "Arbeena";
document.getElementById("username").innerHTML = userName;


document.getElementById("heading2").innerHTML = "<h3>Question # 2</h3> Declare a variable called myName & assign to it a string that represents your Full Name.";
var x = "Arbeena ";
var y = "Altaf";
var myName = x + y;
document.getElementById("myname").innerHTML = myName;


document.getElementById("heading3").innerHTML = "<h3>Question # 3 </h3> Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box. <br> answers are in comment";
// var message = "Hello World";
// alert(message);


document.getElementById("heading4").innerHTML = "<h3>Question # 4</h3> Write a script to save student’s bio data in JS variables and show the data in alert boxes. <br> answers are in comment";
// var a = "John Doe";
// var b = "15 years old";
// var c = "Certified Mobile Application Development";
// alert(a);
// alert(b);
// alert(c);


document.getElementById("heading5").innerHTML = "<h3>Question # 5</h3> Write a script to display the following alert using one JS variable: <br> answers are in comment";
// var i = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// window.alert(i);


document.getElementById("heading6").innerHTML = "<h3>Question # 6</h3> Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) <br> answers are in comment";
// var email = "arbeena27memon@gmail.com";
// alert("My email address is " + email);


document.getElementById("heading7").innerHTML = "<h3>Question # 7</h3> Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: <br> answers are in comment";
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);


document.getElementById("heading8").innerHTML = "<h3>Question # 8</h3> Write a script to display this in browser through JS <br> answers are in comment";
// document.write("Yah! I can write HTML content through JavaScript");


document.getElementById("heading9").innerHTML = "<h3>Question # 9</h3> Store following string in a variable and show in alert and browser through JS <br> answers are in comment";
// document.write("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
// var i = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(i);



document.getElementById("ch3").innerHTML = "<h1>Chapter 3</h1>";


document.getElementById("qu1").innerHTML = "<h3>Question # 1</h3> Declare a variable called age & assign to it your age. Show your age in an alert box. <br> answers are in comment";
// var age = 21;
// alert("I am " + age + " years old");


document.getElementById("qu2").innerHTML = "<h3>Question # 2</h3> Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. <br> answers are in comment";
// var num = 4;
// alert("You have visited this site " + num + " times");


document.getElementById("qu3").innerHTML = "<h3>Question # 3</h3> Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:";
var birthYear = 1998;
document.getElementById("year").innerHTML = "My birth year is " + birthYear + "<br> Data type of my declared variable is number";


document.getElementById("qu4").innerHTML = "<h3>Question # 4</h3> A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.";
var visitorName = "John Doe";
var productTitle = " T-shirt";
var quantity = 5;
var store = quantity + productTitle;
document.getElementById("store").innerHTML = visitorName + " ordered " + store + "(s) on XYZ Clothing store";



document.getElementById("ch4").innerHTML = "<h1>Chapter 4</h1>";


document.getElementById("que1").innerHTML = "<h3>Question # 1</h3> Declare 3 variables in one statement.";
var i = 42;
var a = 23;
var b = 5;
var total = i + a + b;
document.getElementById("variables3").innerHTML = total;


document.getElementById("que2").innerHTML = "<h3>Question # 2</h3> Declare 5 legal & 5 illegal variable names.";
document.getElementById("legal").innerHTML = "<h4>Legal names</h4>var test <br> var test1 <br> var bioData <br> var user_2 <br> var $user";
document.getElementById("illegal").innerHTML = "<h4>Illegal names</h4>var 1user <br> var bio data <br> var alert <br> var user2_ <br> var .user123";


document.getElementById("que3").innerHTML = "<h3>Question # 3</h3> Display this in your browser";
document.getElementById("exercise").innerHTML = "<h4>Rules for naming JS variables</h4> Variable names can only contain numbers, $ and _. For example: $my_1stVariable <br> Variables must begin with a letter, $ or _. For example: $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords";



document.getElementById("ch5").innerHTML = "<h1>Chapter 5</h1>";


document.getElementById("q1").innerHTML = "<h3>Question # 1</h3> Write a program that take two numbers & add them in a new variable. Show the result in your browser.";
var a = 3;
var b = 5;
var i = a + b;
document.getElementById("sum").innerHTML = "Sum of " + a + " and " + b + " is " + i;


document.getElementById("q2").innerHTML = "<h3>Question # 2</h3> Repeat task1 for subtraction, multiplication, division & modulus.";
var a = 3;
var b = 5;
var i = a - b;
document.getElementById("subtract").innerHTML = "<h4>Subtract</h4>" + "Sum of " + a + " and " + b + " is " + i;

var a = 3;
var b = 5;
var i = a * b;
document.getElementById("multiplication").innerHTML = "<h4>Multiplication</h4>" + "Sum of " + a + " and " + b + " is " + i;

var a = 3;
var b = 5;
var i = a / b;
document.getElementById("division").innerHTML = "<h4>Division</h4>" + "Sum of " + a + " and " + b + " is " + i;

var a = 3;
var b = 5;
var i = a % b;
document.getElementById("modulus").innerHTML = "<h4>Modulus</h4>" + "Sum of " + a + " and " + b + " is " + i;


document.getElementById("q3").innerHTML = "<h3>Question # 3</h3> Do the following using JS Mathematic Expressions";
var a = undefined;
document.getElementById("exb").innerHTML = "Value after variable declaration is " + a;

var b = 5;
document.getElementById("exc").innerHTML = "Initial value is: " + b;

var c = 5;
var i = c + 1;
document.getElementById("exd").innerHTML = "Value after increment is: " + i;

var d = 6;
var i = d + 7;
document.getElementById("exe").innerHTML = "Value after addition is: " + i;

var i = 13;
var a = i - 1;
document.getElementById("exe").innerHTML = "Value after decreament is: " + a;

var a = 5;
var i = a / 3;
document.getElementById("exf").innerHTML = "The remainder is: " + i;


document.getElementById("q4").innerHTML = "<h3>Question # 4</h3> Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.";
// var cost = 600;
// var i = cost * 5;
// document.getElementById("cost").innerHTML = "Total cost to buy 5 tickets to a movie is " + i + "PKR";


document.getElementById("q5").innerHTML = "<h3>Question # 5</h3> Write a script to display multiplication table of any number in your browser.";
// var num = 4;
 
// var num = parseInt(num); //parse the num to number
// var i = 0;
// document.write("<h4>Table of 4</h4><table>");

// for(i=1;i<11;i++) {
//     document.write("<tr><td>" + num +  "</td><td>x</td><td>" + i +  "</td><td>=</td><td>" + num*i + "</td></tr>");
// }
// document.write("</table>");


document.getElementById("q6").innerHTML = "<h3>Question # 6</h3> The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”.";
// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F <br>';
//     document.write(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C';
//     document.write(message);
// } 
// cToF(25);
// fToC(70);

document.getElementById("q7").innerHTML = "<h3>Question # 7</h3> Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables";
// var price1 = 650;
// document.write("<h4>Shopping Cart</h4> Price of item 1 is " + price1 + "<br>");

// var quan1 = 3;
// document.write("Quantity of item 1 is " + quan1 + "<br>");

// var price2 = 100;
// document.write("Price of item 2 is " + price2 + "<br>");

// var quan2 = 7;
// document.write("Quantity of item 2 is " + quan2 + "<br>");

// var shipCharges = 100;
// document.write("Shipping charges " + shipCharges + "<br>");

// var a = price1 * quan1;
// var b = price2 * quan2;
// var total = a + b + shipCharges;
// document.write("<br> Total cost of your order is " + total);


document.getElementById("q8").innerHTML = "<h3>Question # 8</h3> Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser";
// var totalMarks = 980;
// var marksObt = 840;
// var total = marksObt / totalMarks * 100;
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Obtained marks: " + marksObt + "<br>");
// document.write("Percentage: " + total + "%");


document.getElementById("q9").innerHTML = "<h3>Question # 9</h3> Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.";
// var usd = 104.80;
// var usdq = 10;
// var total = usd * usdq;
// var riyal = 28;
// var riyalq = 25;
// var total1 = riyal * riyalq;
// var curr = total1 + total;
// document.write("<h4>Currency in PKR</h4> Total Currency in PKR: " + curr);


document.getElementById("q10").innerHTML = "<h3>Question # 10</h3> Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression";
// var num = 10;
// var i = num + 5 * 10 / 2;
// document.write("Total: " + i); 


document.getElementById("q11").innerHTML = "<h3>Question # 11</h3> The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.";
// var currYear = 2020;
// var birthYear = 1998;
// var total = currYear - birthYear;
// document.write("Current Year: " + currYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is : " + total);


document.getElementById("q12").innerHTML = "<h3>Question # 12</h3> The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.";
// var fav = "Super Crisp";
// var currAge = 21;
// var maxAge = 60;
// var est = 2;
// var age = maxAge - currAge;
// var total = age * est;
// document.getElementById("ans").innerHTML = "<h4>The Lifetime Supply Calculator</h4>" + "Favourite Snack: " + fav + "<br>";
// document.write("Current Age: " + currAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snacks per day: " + est + "<br>");
// document.write("You will need " + total  + " super crisp to last you until the ripe old age of " + maxAge);

document.getElementById("ch6").innerHTML = "<h1>Chapter 6-9</h1>";

document.getElementById("qc1").innerHTML = "<h3>Question # 1</h3> Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser";
// var a = +prompt("Enter a number");

// document.write("Result" + "<br/>");
// document.write("The value of a is: " + a + "<br/>");
// document.write("..............................................." + "<br>");
// document.write("<br>");

// Pre-Increment
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("<br>");

// Post- Increment
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a + "<br>")
// document.write("<br>");

// Pre-Decrement
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("<br>");

// Post-Decrement
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

document.getElementById("qc2").innerHTML = "<h3>Question # 2</h3> What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--";
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write("The value of a is " + a + "<br>");
// document.write("The value of b is " + b + "<br>");
// document.write("The result is " + result + "<br>" + "<br>");

// document.write("<b>" + "Explanation of Solution" + "</b>" + "<br>");
// document.write("a = 2, b = 1" + "<br>");
// document.write("--a  -  --b  +  ++b  +  b--" + "<br>");
// document.write("--a" + "<br>");
// document.write("  1" + "<br>");
// document.write("--a  -  --b" + "<br>");
// document.write("  1  -   0 " + "<br>");
// document.write("--a  -  --b  +  ++b" + "<br>");
// document.write("  1  -   0   +    1 " + "<br>");
// document.write("--a  -  --b  +  ++b   +  b--" + "<br>");
// document.write("  1  -   0   +    1   +   1" + "<br>");
// document.write("  1 +    1   +    1 " + "<br>");
// document.write("3" + "<br>");


document.getElementById("qc3").innerHTML = "<h3>Question # 3</h3> Write a program that takes input a name from user & greet the user.";
// var i = prompt("Enter your name");
// document.write("Hello " + i + "! " + "How are you?");

document.getElementById("qc4").innerHTML = "<h3>Question # 5</h3> Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.";
var a = 5, x = 0;
var a = +prompt("Enter table number");
document.write("<b> Table </b>" + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x) + "<br>");
document.write(a + " x " + ++x + " = " + (a * x));

document.getElementById("qc5").innerHTML = "<h3>Question # 6</h3> Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable.";
// document.write("<h2> Marksheet </h2>");

// a) Take three subjects name from user and store them in 3 different variables. 
// subject1 = prompt("Enter name of subject 1: ");
// subject2 = prompt("Enter name of subject 2: ");
// subject3 = prompt("Enter name of subject 3: ");

// b) Total marks for each subject is 100, store it in another variable.
// var totalMarks = 300;

// c) Take obtained marks for first subject from user and stored it in different variable.
// subject1Marks = +prompt("Enter marks of " + subject1);

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// subject2Marks = +prompt("Enter marks of " + subject2);
// subject3Marks = +prompt("Enter marks of " + subject3);

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var percentage1 = (subject1Marks / 100) * 100;
// var percentage2 = (subject2Marks / 100) * 100;
// var percentage3 = (subject3Marks / 100) * 100;

// var obtainedMarks = (subject1Marks + subject2Marks + subject3Marks);
// var percentage = (obtainedMarks / totalMarks) * 100;
// percentage = percentage.toFixed(3);


// document.write("<Table>");

// document.write("<tr>");
// document.write("<th> Subject </th>");
// document.write("<th> Total Marks </th>");
// document.write("<th> Obtained Marks </th>");
// document.write("<th> Percentage </th>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject1 + "</td>");
// document.write("<td>" + 100 + "</td>");
// document.write("<td>" + subject1Marks + "</td>");
// document.write("<td>" + percentage1 + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject2 + "</td>");
// document.write("<td>" + 100 + "</td>");
// document.write("<td>" + subject2Marks + "</td>");
// document.write("<td>" + percentage2 + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject3 + "</td>");
// document.write("<td>" + 100 + "</td>");
// document.write("<td>" + subject3Marks + "</td>");
// document.write("<td>" + percentage3 + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<th>" + "</th>");
// document.write("<th>" + totalMarks + "</th>");
// document.write("<th>" + obtainedMarks + "</th>");
// document.write("<th>" + percentage + "%" + "</th>");
// document.write("</tr>");

// document.write("</Table>");



document.getElementById("ch9").innerHTML = "<h1>Chapter 9-11</h1>";


document.getElementById("cq1").innerHTML = "<h3>Question # 1</h3> Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”";
// var city = prompt("Enter city name");

// if (city == "karachi") {
//         alert("Welcome to  the city of lights");
// }

document.getElementById("cq2").innerHTML = "<h3>Question # 2</h3> Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.";
// var gender = prompt("Please enter your gender!");

// if (gender == "male") {
//         document.write("Good Morning Sir.");
// }
// else if (gender == "female") {
//         document.write("Good Morning Ma’am.");
// }
// else {
//         document.write("Good Morning.");
// }

document.getElementById("cq3").innerHTML = "<h3>Question # 3</h3> Write a program to take input color of road traffic signal from the user & show the message according to this table";
// var color = prompt("Enter color of road traffic signal");

// if (color === "Red") {
//         alert("Must Stop!");
// }
// else if (color === "Yellow") {
//         alert("Ready to Move!");
// }
// else if (color === "Green") {
//         alert("Move Now!");
// }
// else {
//         alert("Error! You had entered wrong color.");
// }


document.getElementById("cq4").innerHTML = "<h3>Question # 4</h3> Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car";
// var fuel = +prompt("Enter amount of remaining fuel in car (in litres)");
// if (fuel < 0.25) {
//         document.write("Please refill the fuel in your car!");
// }

document.getElementById("cq5").innerHTML = "<h3>Question # 5</h3> Run this script, & check whether alert message would be displayed or not. Record the outputs.";
// Part A
// var a = 4;
// if (++a === 5) {
//         alert("Given condition for variable a is true");
// }

// Part B
// var b = 82;
// if (b++ === 83) {
//         alert("Given condition for variable b is true");
// }

// Part C
// var c = 12;
// if (c++ === 13) {
//         alert("condition 1 is true");
// }

// if (c === 13) {
//         alert("condition 2 is true");
// }

// if (++c < 14) {
//         alert("condition 3 is true");
// }

// if (c === 14) {
//         alert("condition 4 is true");
// }

// Part D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//         alert("The cost equals");
// }

// Part E
// if (true) {
//         alert("True");
// }

// if (false) {
//         alert("False");
// }

// Part F
// if ("car" < "cat") {
//         alert("Car is smaller than cat");
// }


document.getElementById("cq6").innerHTML = "<h3>Question # 6</h3> Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table";
// var obtainedMarks = +prompt("Enter Obtained Marks of three subjects: ");
// var totalMarks = +prompt("Enter total Marks: ");
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h3>" + "Mark Sheet" + "<h3>");
// document.write("Total Marks: " + totalMarks + "</br>");
// document.write("Marks Obtained: " + obtainedMarks + "</br>");
// document.write("Percentage: " + percentage + "</br>");

// if (percentage >= 80 && percentage < 100) {
//         document.write("Grade: A-one" + "<br>");
//         document.write("Remarks: Excellent" + "<br>");
// }

// else if (percentage >= 70 && percentage < 80) {
//         document.write("Grade: A" + "<br>");
//         document.write("Remarks: Good" + "<br>");
// }

// else if (percentage >= 60 && percentage < 70) {
//         document.write("Grade: B" + "<br>");
//         document.write("Remarks: You need to improve" + "<br>");
// }

// else if (percentage < 60) {
//         document.write("Grade: Fail" + "<br>");
//         document.write("Remarks: Sorry" + "<br>");
// }

// else {
//         document.write("Error!" + "<br>");
// }

document.getElementById("cq7").innerHTML = "<h3>Question # 7</h3> Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.";
// var secretNum = 8;
// var guessNum = +prompt("Guess the secret number ranging from 1 to 10 ");

// if (guessNum == secretNum) {
//         document.write("Bingo! Correct answer");
// }
// else if (guessNum == ++secretNum) {
//         document.write("Close enough to the correct answer");
// }
// else {
//         document.write("Your guess is incorrect");
// }

document.getElementById("cq8").innerHTML = "<h3>Question # 8</h3> Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.";
// var num = +prompt("Enter any number");
// if ((num % 3) === 0) {
//         alert("The number is divisible by 3");
// }
// else {
//         alert("The number is not divisible by 3");
// }

document.getElementById("cq9").innerHTML = "<h3>Question # 9</h3> Write a program that checks whether the given input is an even number or an odd number.";
// var num = +prompt("Enter any even or odd number");
// if ((num % 2) === 0) {
//         document.write("the number is even");
// }
// else {
//         document.write("the number is add");
// }

document.getElementById("cq10").innerHTML = "<h3>Question # 10</h3> Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”";
// var temp = +prompt("Enter  the temperature");
// if (temp > 40) {
//         document.write("It is too hot outside.");
// }
// if (temp > 30) {
//         document.write("The Weather today is Normal.");
// }
// if (temp > 20) {
//         document.write("Today’s Weather is cool.");
// }
// if (temp > 10) {
//         document.write("OMG! Today’s weather is so Cool.");
// }


document.getElementById("cq11").innerHTML = "<h3>Question # 11</h3> Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %)";
// var a = +prompt("Enter First Number");
// var b = +prompt("Enter Second Number");
// var operation = ("Enter opertion you want to perform", "+, -, *, /, %");
// var result;

// if (operation == "+") {
//         result = a + b;
//         document.write("The sum of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result);
// }
// else if (operation == "-") {
//         result = a - b;
//         document.write("The subtraction of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result);
// }
// else if (operation == "*") {
//         result = a * b;
//         document.write("The multiplication of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result);
// }
// else if (operation == "/") {
//         result = a / b;
//         document.write("The division of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result);
// }
// else if (operation == "%") {
//         result = a % b;
//         document.write("The reminder of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result);
// }
// else {
//         document.write("You enter wrong operation");
// }



document.getElementById("ch12").innerHTML = "<h1>Chapter 12-13</h1>";


document.getElementById("l1").innerHTML = "<h3>Question # 1</h3> Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).";
// var char = prompt("Enter anything in uppercase, lowercase or number");
// char.charCodeAt(0);

// if (char >= 48 && char <= 57) {
//         document.write("The given charecter is a number");
// }
// else if (char >= 65 && char <= 97) {
//         document.write("The given charecter is a uppercase letter");
// }
// else if (char >= 97 && char <= 122) {
//         document.write("The given charecter is a lowercase letter");
// }

document.getElementById("l2").innerHTML = "<h3>Question # 2</h3> Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.";
// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");

// if (a > b) {
//         document.write("The largest number is" + " " + a);
// }
// else if (b > a) {
//         document.write("The largest number is" + " " + b);
// }
// else if (a == b) {
//         document.write("Both numbers are equal");
// }

document.getElementById("l3").innerHTML = "<h3>Question # 3</h3> Write a program that takes input a number from user & state whether the number is positive, negative or zero.";
// var num = +prompt("Enter any positive or negative integer");

// if (num > 0) {
//         document.write("The given number is positive");
// }
// else if (num < 0) {
//         document.write("The given number is negative");
// }
// else if (num1 === 0) {
//         document.write("The given number is Zero");
// }

document.getElementById("l4").innerHTML = "<h3>Question # 4</h3> Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise";
// var alphabet = +prompt("Enter the alphabet to check it is vowel or not");

// if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "o") {
//         document.write("The given alphabet is vowel");
// }
// else {
//         document.write("The given alphabet is not a vowel");
// }

document.getElementById("l5").innerHTML = "<h3>Question # 5</h3> Write a program that a. Store correct password in a JS variable. b. Asks user to enter his/her password c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.";
// var i = "12345"
// var password = prompt("Enter your password");

// if (password == "") {
//         document.write(" Please enter your password");
// }
// else if (password == i) {
//         document.write("Correct! The password you entered matches the original password");
// }
// else {
//         document.write("Incorrect password");
// }

document.getElementById("l6").innerHTML = "<h3>Question # 6</h3> This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = 'Good day'; else greeting = 'Good evening'; }";
// var greeting;
// var hour = 13;
// if (hour < 18) {
//         greeting = "Good day";
// }
// else {
//         greeting = "Good evening";
// }

document.getElementById("l7").innerHTML = "<h3>Question # 7</h3> Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements";
// var time = +prompt("Please enter 24 hours clock format time \nlike: 1900 = 7pm.");

// if (time >= 0000 && time < 1200) {
//         alert("Good Morning!");
// }

// else if (time >= 1200 && time < 1700) {
//         alert("Good Afternoon!");
// }

// else if (time >= 1700 && time < 2100) {
//         alert("Good Evening!");
// }

// else if (time >= 2100 && time <= 2359) {
//         alert("Good Night!");
// }

// else {
//         alert("Error!");
// }



document.getElementById("ch14").innerHTML = "<h1>Chapter 14-16</h1>";


document.getElementById("la1").innerHTML = "<h3>Question # 1</h3> Declare an empty array using JS literal notation to store student names in future.";
// var cars = [];

document.getElementById("la2").innerHTML = "<h3>Question # 2</h3> Declare an empty array using JS object notation to store student names in future.";
// var cars = newArray();

document.getElementById("la3").innerHTML = "<h3>Question # 3</h3> Declare and initialize a strings array.";
// var fruits = ["apple", "mango", "grapes", "orange", "strawberry"];
// document.write(fruits);

document.getElementById("la4").innerHTML = "<h3>Question # 4</h3> Declare and initialize a numbers array.";
// var num = [1, 2, 3, 4, 5, 6, 7, 8];
// document.write(num);

document.getElementById("la5").innerHTML = "<h3>Question # 5</h3> Declare and initialize a boolean array.";
// var i = [true, false, true, false];
// document.write(i);

document.getElementById("la6").innerHTML = "<h3>Question # 6</h3> Declare and initialize a mixed array.";
// var a = ["hi", 1, true];
// document.write(a);

document.getElementById("la7").innerHTML = "<h3>Question # 7</h3> Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:";
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "Phd"];
// var num = 1;
// var i = 0;

// document.write("<h3>" + "Qualifications" + "<h3>");

// document.write(num++ + ")" + " " + qualification[i++] + "<br>");
// document.write(num++ + ")" + " " + qualification[i++] + "<br>");
// document.write(num++ + ")" + " " + qualification[i++] + "<br>");
// document.write(num++ + ")" + " " + qualification[i++] + "<br>");
// document.write(num++ + ")" + " " + qualification[i++] + "<br>");
// document.write(num++ + ")" + " " + qualification[i++] + "<br>");
// document.write(num++ + ")" + " " + qualification[i++] + "<br>");
// document.write(num++ + ")" + " " + qualification[i++] + "<br>");

document.getElementById("la8").innerHTML = "<h3>Question # 8</h3> Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:";
// var stu = ["arbeena", "majid", "sara"];
// var marks = [481, 426, 360];
// var i = 0;
// var a = 0;
// var x = 0;

// var totalMarks = 500;

// document.write("Score of" + " " + stu[i++] + " " + "is" + " " + marks[a++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>");
// document.write("Score of" + " " + stu[i++] + " " + "is" + " " + marks[a++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>");
// document.write("Score of" + " " + stu[i++] + " " + "is" + " " + marks[a++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>");

document.getElementById("la9").innerHTML = "<h3>Question # 9</h3> Initialize an array with color names. Display the array elements in your browser.";
// var colors = ["purple", "maroon", "light blue", "tea pink"];
// document.write(colors + "<br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
// Display the updated array in your browser.

// var addColor = prompt("What color you wants to add to the beginning?");
// colors.unshift(addColor);
// document.write("Add color to the beginning: " + " " + colors + "<br>");


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.

// var addColor = prompt("What color you wants to add to the end?");
// colors.push(addColor);
// document.write("Add color to the end: " + " " + colors + "<br>");


// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.

// var addColor = prompt("What color you wants to add to the beginning?");
// colors.unshift(addColor);

// var addColor = prompt("Add one more color that you wants to add to the beginning?");
// colors.unshift(addColor);
// document.write("Add two more colors to the start: " + " " + colors + "<br>");


// d. Delete the first color in the array. 
// Display the updated array in your browser.

// colors.shift();
// document.write("Delete color from start: " + " " + colors + "<br>");


// e. Delete the last color in the array. 
// Display the updated array in your browser. 

// colors.pop();
// document.write("Delete color from start end: " + " " + colors + "<br>");


// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. 
// Display the updated array in your browser.

// var index = +prompt("Write index number where you want to add color");
// var addColor = prompt("What color you want to add?");

// colors.splice(index, 0, addColor);
// document.write("updated array : " + " " + colors + "<br>");


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// var index = +prompt("Write index number from where you want to delete color.");
// var index2 = +prompt("How many colors you want to delete?");
// colors.splice(index, index2);
// document.write("updated array : " + " " + colors + "<br>");


document.getElementById("la10").innerHTML = "<h3>Question # 10</h3> Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.";
// var arr = [59, 25, 66, 45, 75, 23];
// document.write("students scores : " + "<br>" + arr + "<br>" + "<br>");

// var sort = arr.sort()
// document.write("sorted scores : " + "<br>" + sort);

document.getElementById("la11").innerHTML = "<h3>Question # 11</h3> Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.";
// var cities = ["karachi", "lahore", "murre", "islamabad", "hyderabad", "quetta"];
// document.write("Cities are" + "<br>" + cities + "<br>" + "<br>");

// var selectedCities = cities.slice(1, 4);
// document.write("Selected cities are" + "<br>" + selectedCities);


document.getElementById("la12").innerHTML = "<h3>Question # 12</h3> Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)";
// var arr = ["This", "is", "my", "cat"];
// document.write("Array" + "<br>" + arr + "<br>" + "<br>");

// var arr1 = arr.join(" ");
// document.write("String" + "<br>" + arr1);


document.getElementById("la13").innerHTML = "<h3>Question # 13</h3> Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)";
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var out;
// document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

// out = devices.shift();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.shift();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.shift();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.shift();
// document.write("Out:" + "<br/>" + out);

document.getElementById("la14").innerHTML = "<h3>Question # 14</h3> Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)";
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var out;
// document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

// out = devices.pop();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.pop();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.pop();
// document.write("Out:" + "<br/>" + out + "<br/>");
// out = devices.pop();
// document.write("Out:" + "<br/>" + out);

document.getElementById("la15").innerHTML = "<h3>Question # 15</h3> Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:";
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var i = 0;

// document.write("<select>");
// document.write("<option>" + phone[i++] + "</option>");
// document.write("<option>" + phone[i++] + "</option>");
// document.write("<option>" + phone[i++] + "</option>");
// document.write("<option>" + phone[i++] + "</option>");
// document.write("<option>" + phone[i++] + "</option>");
// document.write("</select>");



document.getElementById("ch17").innerHTML = "<h1>Chapter 17-20</h1>";


document.getElementById("laq1").innerHTML = "<h3>Question # 1</h3> Declare and initialize an empty multidimensional array. (Array of arrays)";
var arr = [];

document.getElementById("laq2").innerHTML = "<h3>Question # 2</h3> Declare and initialize a multidimensional array representing the following matrix:";
var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

document.getElementById("laq3").innerHTML = "<h3>Question # 3</h3> Write a program to print numeric counting from 1 to 10.";
// for (x = 1; x <= 10; x++) {
//     document.write(x + "<br>");
// }

document.getElementById("laq4").innerHTML = "<h3>Question # 4</h3> Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.";
// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");

// document.write("<h3>" + " Multiplication Table of " + table + "</h3>")
// document.write("<h3>" + " Length " + length + "</h3>")
// for (i = 1; i <= length; i++) {
//         document.write(table + " " + "x" + " " + i + " " + "= " + (i * table) + "<br>");
// }

document.getElementById("laq5").innerHTML = "<h3>Question # 5</h3> Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]";
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var list = fruits.join("<br>");

// document.write(list);

// document.write("<br>" + "<br>");

// for (i = 0; i <= fruits.length; i++) {
//         document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

document.getElementById("laq6").innerHTML = "<h3>Question # 6</h3> Generate the following series in your browser. See example output.";
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h3> Counting </h3>");

// for (x = 1; x <= 15; x++) {
//         document.write(x + "," + " ");
// }
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<h3> Reverse counting </h3>");

// for (x = 10; x >= 1; x--) {
//         document.write(x + "," + " ");
// }
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<h3> Even </h3>");

// for (x = 0; x <= 20; x = x + 2) {
//         document.write(x + "," + " ");
// }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// document.write("<h3> Odd </h3>");

// for (x = 1; x <= 20; x = x + 2) {
//         document.write(x + "," + " ");
// }
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
// document.write("<h3> Series </h3>");

// for (x = 2; x <= 20; x = x + 2) {
//         document.write(x + "k" + "," + " ");
// }


document.getElementById("laq7").innerHTML = "<h3>Question # 7</h3> You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:";
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var a = prompt("Welcome to Ideal bakery. What do you want to order sir/ma'am?");
// var b = 0;

// for (i = 0; i <= items.length; i++) {
//         if (items[i] == a) {
//                 b= 1;
//                 document.write(a + " " + "is available at index" + " " + i + " " + "in our bakery");
//         }
// }

// if (b == 0) {
//         document.write("We are sorry" + " " + a + " " + "is not available in our bakery")
// }

document.getElementById("laq8").innerHTML = "<h3>Question # 8</h3> Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].";
// var a = [24, 53, 78, 91, 12];
// var b = a[0];

// for (i = 0; i < a.length; i++) {

//         if (a[i] > b) {

//                 b = a[i];
//         }
// }

// document.write("Array items: " + " " + a + "<br>");
// document.write("The largest no is: " + " " + b);

document.getElementById("laq9").innerHTML = "<h3>Question # 9</h3> Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]";
// var a = [24, 53, 78, 91, 12];
// var b = a[0];

// for (i = 0; i < a.length; i++) {

//         if (a[i] < b) {

//                 b = a[i];
//         }
// }

// document.write("Array items: " + " " + a + "<br>");
// document.write("The smallest no is: " + " " + b);

document.getElementById("laq10").innerHTML = "<h3>Question # 10</h3> Write a program to print multiples of 5 ranging 1 to 100.";
// for (x = 5; x <= 100; x = x + 5) {
//     document.write(x + "," + " ");
// }
