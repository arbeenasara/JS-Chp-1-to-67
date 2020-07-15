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
var fav = "Super Crisp";
var currAge = 21;
var maxAge = 60;
var est = 2;
var age = maxAge - currAge;
var total = age * est;
document.getElementById("ans").innerHTML = "<h4>The Lifetime Supply Calculator</h4>" + "Favourite Snack: " + fav + "<br>";
document.write("Current Age: " + currAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of Snacks per day: " + est + "<br>");
document.write("You will need " + total  + " super crisp to last you until the ripe old age of " + maxAge);

document.getElementById("ch6").innerHTML = "<h1>Chapter 6-9</h1>";

document.getElementById("qc1").innerHTML = "<h3>Question # 1</h3> Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser";

document.getElementById("qc2").innerHTML = "<h3>Question # 2</h3> What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--";

document.getElementById("qc3").innerHTML = "<h3>Question # 3</h3> Write a program that takes input a name from user & greet the user.";

document.getElementById("qc4").innerHTML = "<h3>Question # 5</h3> Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.";

document.getElementById("qc5").innerHTML = "<h3>Question # 6</h3> Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable.";


document.getElementById("ch9").innerHTML = "<h1>Chapter 9-11</h1>";

document.getElementById("cq1").innerHTML = "<h3>Question # 1</h3> Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”";

document.getElementById("cq2").innerHTML = "<h3>Question # 2</h3> Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.";

document.getElementById("cq3").innerHTML = "<h3>Question # 3</h3> Write a program to take input color of road traffic signal from the user & show the message according to this table";

document.getElementById("cq4").innerHTML = "<h3>Question # 4</h3> Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car";

document.getElementById("cq5").innerHTML = "<h3>Question # 5</h3> Run this script, & check whether alert message would be displayed or not. Record the outputs.";

document.getElementById("cq6").innerHTML = "<h3>Question # 6</h3> Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table";

document.getElementById("cq7").innerHTML = "<h3>Question # 7</h3> Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.";

document.getElementById("cq8").innerHTML = "<h3>Question # 8</h3> Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.";

document.getElementById("cq9").innerHTML = "<h3>Question # 9</h3> Write a program that checks whether the given input is an even number or an odd number.";

document.getElementById("cq10").innerHTML = "<h3>Question # 10</h3> Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”";

document.getElementById("cq11").innerHTML = "<h3>Question # 11</h3> Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %)";

