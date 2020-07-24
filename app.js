// ---------------------Chapter#1 ALERTS---------------------

// Question # 1
// alert("Welcome !!!")


// Question # 2
// alert("Error! Please enter a valid password.")


// Question # 3
// alert("Welcome to JS Land... \nHappy Coding!" );


// Question # 4
// alert("Welcome to JS Land..." );
// alert("Happy Coding!" );


// Question # 5
// console.log("Hello... I can run JS through my web browser's console")


// Question # 6
// Question # 7



// ---------------------Chapter#2 VARIABLES FOR STRINGS---------------------

// Question # 1
var username;


// Question # 2
var myName = "Wajiha Qaiser";


// Question # 3
// var message;
// message = "Hello World";
// alert(message)


// Question # 4
// var name = "Jhone Doe";
// alert(name)

// var age = "15 years old"
// alert(age)

// var certification = "Certified Mobile Application Development"
// alert(certification)


// Question # 5
// var food = "PIZZA";
// alert(food + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" + food.slice(0,2) + "\n" + food.slice(0,1))


// Question # 6
// var email = "wajihaqaiser777@gmail.com"
// alert("My email address is" + " " + email)


// Question # 7
// var book = "A smarter \n way to learn JavaScript"
// alert("I am trying to learn from the Book" + " " + book)


// Question # 8
// document.write("Yah! I can write HTML content through JavaScript")


// Question # 9
// var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(a)
// document.write(a)



// ---------------------Chapter#3 VARIABLES FOR NUMBERS---------------------

// Question # 1
// var age = 20
// alert("I am" + " " + age + " " + "years old")


// Question # 2
// var i = 0;
// i++
// alert("You have visited this site" + " " + i + " " + "times")


// Question # 3
// var birthYear = 2000
// document.write("My birth year is" + " " + birthYear +  "<br> Data type of my declared variable is number <br>" )  


// Question # 4
// var visitorName = "<b> John Doe </b>"
// var product = "<b> T-shirt(s) </b>"
// var quantity = "<b> 5 </b>"
// document.write(visitorName + " " + "ordered" + " " + quantity + " " + product + " "  + "on XYZ Clothing store")



// ---------------------Chapter#4 VARIABLE NAMES: LEGAL & ILLEGAL---------------------

// Question # 1
var a, b, c ;


// Question # 2
// legal variable names
var num,  _num,  $num,  num1,  myalert ;

// illegal variable names
// var 5name,  "name",  alert,  first name,  100 ;  


// Question # 3
// document.write("<h1> Rules for naming JS variables </h1><br> Variable names can only contain numbers, $ and _ . For example : $my_1stVariable <br>Variable must begin with a letter, $ or _ . For example : $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords")



// ---------------------Chapter#5 MATH EXPRESSIONS---------------------

// Question # 1
var num1 = 3
var num2 = 5
var result = num1 + num2
// document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result + "<br>")


// Question # 2
// var sub = num1 - num2
// document.write("Diff of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sub + "<br>")

// var mul = num1 * num2
// document.write("Multiple of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + mul + "<br>")

// var div = num2 / num1
// document.write("Division of" + " " + num2 + " " + "and" + " " + num1 + " " + "is" + " " + div + "<br>")

// var mod = num2 % num1
// document.write("Modulus of" + " " + num2 + " " + "and" + " " + num1 + " " + "is" + " " + mod + "<br>")


// Question # 3
// var number;

// document.write("Value after variable declaration is" + " " + number + "<br>")

// number = 5;

// document.write("Initial value:" + " " + number + "<br>")

// number++

// document.write("Value after increment is:" + " " + number + "<br>")

// number = number + 7

// document.write("Value after addition is:" + " " + number + "<br>")

// number--

// document.write("Value after decrement is:" + " " + number + "<br>")

// number = number % 3

// document.write( "The remainder is: " + " " + number  + "<br>")


// Question # 4
// var price = 600
// var price = 600 * 5
// document.write("Total cost to buy 5 tickets to a movie is" + " " + price + "PKR")


// Question # 5
// var n = 5 
// document.write("<h1>Table of 5</h1> ")

// for (var i=1; i<=10; i++){
// document.write( n + "*" + i + "=" + n*i + "<br>")
// }  


// Question # 6
// var C = 25;
// var fahrenheit = (C * 9/5) + 32
// document.write(C + "&#8451; is " + " " + fahrenheit + "&#8457; <br>")

// var F = 70;
// var celsius = (F - 32) * (5/9)
// document.write(F + "&#8457; is " + " " + celsius + "&#8451;")


// Question # 7
// document.write("<h1>Shopping Cart</h1>")

// var price1 = 650
// var price2 = 100
// var quantity1 = 3
// var quantity2 = 7
// var shippingCharges = 100

// var total = (price1 * quantity1) + (price2 * quantity2) + shippingCharges
// document.write("<br><br> Price of item 1 is" + " " + price1 + "<br> Quantity of item 1 is" + " " + quantity1 + "<br> Price of item 2 is" + " " + price2 + "<br> Quantity of item 2 is" + " " + quantity2 + "<br> Shipping Charges" + " " + shippingCharges + "<br><br><br> Total cost of your order is" + " " + total )


// Question # 8
// document.write("<h1>Mark Sheet</h1>")

// var totalMarks = 980;
// var marksObtained = 804;
// var per = (marksObtained * 100) / totalMarks

// document.write("<br><br> Total marks:" + " " + totalMarks + "<br> Marks obtained:" + " " + marksObtained 
// + "<br> Percentage:" + " " + per + "%")


// Question # 9
//  document.write("<h1>Currency in PKR</h1>")

//  var dollar = 10;
//  var riyal = 25;

//  var rupees = (10 * 104.80) + (25 * 28)
//  document.write("<br><br> Total Currency in PKR:" + " " + rupees)


// Question # 10
var num = 45
num = (num + 5) * 10 / 2


// Question # 11
// document.write("<h1>Age Calculator</h1>")

// var currentYear = 2016
// var birthYear = 1992
// var age = currentYear - birthYear

// document.write("<br><br>Current Year:" + " " + currentYear + "<br>Birth Year:" + " " + birthYear + "<br>Your Age is:" + " " + age)
// document.write("<br>They are either" +  " " + age + " " + "or" + " " + --age + " " + "years old")


// Question # 12
// document.write("<h1>The Geometrizer</h1>")

// var radius = 20
// var circumference = 2 * Math.PI * radius
// var area = Math.PI * Math.pow(radius , 2)

// document.write("<br><br>Radius of a circle:" + " " + radius + "<br> The circumference is:" + " " + circumference + "<br> The area is:" + " " + area)


// Question # 13
// document.write("<h1>The Lifetime Supply Calculator</h1>")

// var snack = "chocolate chip"
// var currentAge = 15
// var maxAge = 65
// var amount = 3
// var total = (maxAge - currentAge) * 3

// document.write("<br><br> Favourite Snack:" + " " + snack + "<br> Current age:" + " " + currentAge + "<br> Estimated Maximum Age:" + " " + maxAge + "<br> Amount of snacks per day:" + " " + amount + "<br> You will need" + " " + total + " " + snack + " " + "to last you until the ripe old age of" + " " + maxAge )



// ---------------------Chapter#6-9 MATH EXPRESSIONS---------------------

// Question # 1
// document.write("Result:<br>")

// var a = 10;
// document.write("The value of a is:" + " " + a + "<br>.................................................<br><br>")

// ++a;
// document.write("The value of ++a is:" + " " + a + "<br> Now the value of a is:" + " " + a)

// a++;
// document.write("<br><br><br>The value of a++ is:" + " " + a +"<br> Now the value of a is:" + " " + a ) 

// --a;
// document.write("<br><br><br>The value of --a is:" + " " + a + "<br> Now the value of a is:" + " " + a)

// a--;
// document.write("<br><br><br>The value of a-- is:" + " " + a + "<br> Now the value of a is:" + " " + a ) 


// Question # 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

/*
 --a == 1 
 --a - --b == 1
 --a - --b + ++b == 2
 --a - --b + ++b + b-- == 3 
 */

// document.write("a is:" + " " + a + "<br>b is:" + " " + b + "<br>result is:" + " " + result)


// Question # 3
// var username = prompt("Enter your name")
// alert("Welcome" + " " + username)
// document.write("Welcome" + " " + username)


// Question # 5
// var n = prompt("Enter a number")
// for (var i = 1; i<=10 ; i++){
//     document.write( n + "*" + i + "=" + n*i + "<br>")
// }



// Question # 6
// var sub1 = prompt("Enter 1st subject name")
// var sub2 = prompt("Enter 2nd subject name")
// var sub3 = prompt("Enter 3rd subject name")
// var totalMarks = 100
// var marks1 = parseInt(prompt("Enter 1st subject marks"))
// var marks2 = parseInt(prompt("Enter 2nd subject marks"))
// var marks3 = parseInt(prompt("Enter 3rd subject marks"))
// total = totalMarks * 3
// totalObtained = marks1 + marks2 + marks3

// document.write("<table> <th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th> <tr><td>" + sub1 +"</td><td>" + totalMarks +"</td><td>" + marks1 +"</td><td>" + (marks1*100)/totalMarks +"%</td></tr>  <tr><td>" + sub2 +"</td><td>" + totalMarks +"</td><td>" + marks2 +"</td><td>" + (marks2*100)/totalMarks +"%</td></tr>  <tr><td>" + sub3 +"</td><td>" + totalMarks +"</td><td>" + marks3 +"</td><td>" + (marks3*100)/totalMarks +"%</td></tr>  <th></th> <th>" + total +"</th><th>"+ totalObtained +"</th><th>"+ (totalObtained*100)/total +"%</th> </table>")



// ---------------------Chapter#9-11 USER INPUT & CONDITIONAL STATEMENT---------------------

// Question # 1
// var city = prompt("Enter city name")
// if (city == "Karachi" || city == "karachi" ) {
//     alert("Welcome to city of lights")
// }


// Question # 2
// var gender = prompt("Enter Gender")
// if (gender == "male" || gender == "Male" ) {
//     alert("Good Morning Sir")
// }
// if (gender == "female" || gender == "Female") {
//     alert("Good Morning Ma’am")
// }


// Question # 3
// var trafficSignal = prompt("Enter color of road traffic signal")
// if (trafficSignal == "Red" || trafficSignal == "red"  ) {
//     document.write("<table> <th> Signal color</th> <th>Message</th> <tr><td><center>"+ trafficSignal +"</center></td><td>Must stop</td></tr> </table>")
// }
// if (trafficSignal == "Yellow" || trafficSignal == "yellow"  ) {
//     document.write("<table> <th> Signal color</th> <th>Message</th> <tr><td><center>"+ trafficSignal +"</center></td><td>Ready to move</td></tr> </table>")
// }
// if (trafficSignal == "Green" || trafficSignal == "green"  ) {
//     document.write("<table> <th> Signal color</th> <th>Message</th> <tr><td><center>"+ trafficSignal +"</center></td><td>Move now</td></tr> </table>")
// }


// Question # 4
// var fuel =prompt("Enter remaining fuel in car (in litres)")
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car")
// }


// Question # 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//         alert("car is smaller than cat");
//         }    


// Question # 6
// var marksObtained = prompt("Enter your marks obtained in three subjects")
// var totalMarks = prompt("Enter total marks")
// var per = (marksObtained * 100) / totalMarks
// var grade , remarks;

// if (per >= 80 && per <= 100) {
//     grade  = "A-one"
//     remarks = "Excellent";
// }
// if (per >= 70 && per < 80) {
//     grade  = "A"
//     remarks = "Good";
// }
// if (per >= 60 && per < 70) {
//     grade  = "B"
//     remarks = "You need to improve";
// }
// if ( per < 60) {
//     grade  = "Fail"
//     remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1>" + "<br><br>Total marks :" + " " + totalMarks + "<br>Marks obtained :" + " " +marksObtained
// + "<br>Percentage :" + " " + per + "%" + "<br>Grade :" + " " + grade + "<br>Remarks :" + " " + remarks)


// Question # 7
// var secretNum = 7;
// var guessedNum = prompt("Enter number")
// if ( guessedNum == secretNum) {
//     alert("Bingo! Correct answer")
// }
// if ( guessedNum == secretNum + 1  || guessedNum == secretNum - 1 ) {
//  alert("Close enough to the correct answer")   
// }


// Question # 8
// var num = prompt("Enter number")
// if ( num % 3 === 0){
//     alert(num + " " + "is divisible by 3 ")
// }


// Question # 9
// var num = prompt("Enter number")
// if ( num % 2 == 0) {
//     alert(num + " " + "is an even number")
// }
// else{
//     alert(num + " " + "is an odd number")
// }


// Question # 10
// var temperature = prompt("Enter Temperature")
// if ( temperature > 40 ) {
//     alert("It is too hot outside")
// }
// if ( temperature > 30 && temperature <= 40 ) {
//     alert("The Weather today is Normal")
// }
// if ( temperature > 20 && temperature <= 30 ) {
//     alert("Today’s Weather is cool")
// }
// if ( temperature > 10 && temperature <= 20 ) {
//     alert("OMG! Today’s weather is so Cool")
// }


// Question # 11
// var firstNum = prompt("Enter first number")
// var secondNum = prompt("Enter second number")
// var operation = prompt("Which operation you wannna perform?" , "+," + "   " + "-," + "   " + "*," + "   " + "/," + "   " + "%")

// if (operation === "+") {
//     result = parseInt(firstNum) + parseInt(secondNum)
//     // alert(result)
// }
// if (operation === "-") {
//     result = parseInt(firstNum) - parseInt(secondNum)
//     // alert(result)
// }
// if (operation === "*") {
//     result = parseInt(firstNum) * parseInt(secondNum)
//     // alert(result)
// }
// if (operation === "/") {
//     result = parseInt(firstNum) / parseInt(secondNum)
//     // alert(result)
// }
// if (operation === "%") {
//     result = parseInt(firstNum) % parseInt(secondNum)
//     // alert(result)
// }
// alert(result)



// ---------------------Chapter#12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS--------------------- 

// Question # 1
// var input = prompt("Enter any character")

// if (input  >= 0 && input  <= 9 ) {
//     alert(input + " " + "is a number" )
// }

// else if (input.charCodeAt(0)  >= 65 && input.charCodeAt(0)  <= 90 ) {
//     alert("Uppercase Letter")
// }

// else if (input.charCodeAt(0)  >= 97 && input.charCodeAt(0)  <= 122 ) {
//     alert("Lowercase Letter")
// }


// Question # 2
// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// if ( num1 === num2) {
//     alert("Both are equal")
// }
// else if (num1 > num2)(
//     alert(num1 + " " + "is larger number")
// )
// else{
//     alert(num2 + " " + "is larger number")
// }


// Question # 3
// var num = prompt("Enter any number");

// if ( num > 0) {
//     alert(num + " " + "is positive number")
// }
//  else if ( num < 0) {
//     alert(num + " " + "is negative number")
// }
// else if (num == 0) {
// alert("Number is zero")
// }


// Question # 4
// var char = prompt("Enter any character")

// if ( char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
//     alert("TRUE")
// }
// else {
//     alert("FALSE")
// }


// Question # 5
// var correctPass = "igtv5"
// var userPass = prompt("Enter your password")

// if (userPass == ""){
//     alert("Please enter your password")
// }
// else if (correctPass === userPass ){
// alert("Correct! The password you entered matches the original password")
// }
// else {
//     alert("Incorrect password")
// }


// Question # 6
// var greeting;
// var hour = 13;

// if (hour < 18) {
// alert(greeting = "Good day");
// }
// else {
// alert(greeting = "Good evening");
// }


// Question # 7
// var time = prompt("Enter time in 24 hours clock format like: 1900 = 7pm")

// if ( time >= 0000 && time < 1200) {
//     alert("Good morning!")
// }
// else if ( time >= 1200 && time < 1700) {
//     alert("Good afternoon!")
// }
// else if ( time >= 1700 && time < 2100) {
//     alert("Good evening!")
// }
// else if ( time >= 2100 && time < 2359) {
//     alert("Good night!")
// }



// ---------------------Chapter#14-16 ARRAYS---------------------

// Question # 1
var names = [];


// Question # 2
var names = new Array() ;


// Question # 3
var strArray = ["wajiha" , "qaiser" , "bscs" , "ubit"]


// Question # 4
var numArray = [ 1 , 10 , 32 , 76 , 99 , 1000]


// Question # 5
var boolArray = [true , false , false , true];


// Question # 6
var mixedArr = ["qaiser" , true , 75 , 220 , false]


// Question # 7
// var qualifications = ["1)  SSC \n" , "2) HSC \n", "3) BCS", "4) BS", "5) BCOM", "6) MS", "7) M. Phil." , "8) PhD"]
// qualifications = qualifications.join("<br>")

// document.write("<h1>Qualifications:</h1>" + "<br>" + qualifications)


// Question # 8
// var names = [ "Michael" , "John" , "Tony" ]
// var scores = [320 , 230 , 480]
// var totalMarks = 500;
// var per = [  scores[0]*100/totalMarks , scores[1]*100/totalMarks , scores[2]*100/totalMarks ];

// for(var i=0 ; i<=2 ; i++){
// document.write("Score of" + " " + names[i] + " " + "is" + " " + scores[i]  + ". Percentage:" + " " + per[i] + "%<br>")
// }


// Question # 9
// var colors = ["red" , "green" , "blue" , "orange" , "black" , "white<br>"]
// document.write(colors + "<br>")

// var startColor = prompt("what color you want to add to the beginning")
// colors.unshift(startColor)
// document.write(colors + "<br>")

// var endColor = prompt("what color you want to add to the end")
// colors.push(endColor)
// document.write(colors + "<br>")

// colors.unshift("purple" , "grey")
// document.write("<br>" + colors + "<br>")

// colors.shift()
// document.write("<br>" + colors + "<br>")

// colors.pop()
// document.write("<br>" + colors + "<br>")

// var index = prompt("at which index you want to add a color")
// var color = prompt("what color you want to add")
// colors.splice( index , 0 , color )
// document.write( colors + "<br>")

// var deleteIndex = prompt(" at which index you want to delete color(s)")
// var n = prompt("how many colors you want to delete")
// colors.splice(deleteIndex , n)
// document.write( colors + "<br>")


// Question # 10
// var scores = [320,230,480,120]
// document.write("Scores of Students :" + " " + scores + "<br>")

// ordered = scores.sort()
// document.write("Ordered Scores of Students :" + " " + ordered)


// Question # 11
// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
// document.write("<h2>Cities list:</h2>" + cities )

// var selectedCities = [];
// selectedCities = cities.slice(2,4)
// document.write("<br><br><h2>Selected cities list:</h2>" + selectedCities )


// Question # 12
// var arr = ["This" , "is" , "my" , "cat"];
// document.write("<h2>Array:</h2>" + arr )

// arr = arr.join(" ")
// document.write("<h2>String:</h2>" + arr )


// Question # 13
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"]
// document.write("<h2>Devices:</h2>" + devices )

// // devices = devices.join(" ")

// for(var i=0 ; i<4 ; i++){
//      dev = devices.shift()
//     document.write("<h4>Out:</h4>" + dev)
// }


// Question # 14
// var devices = [];

// for(var i=0 ; i<4 ; i++){
//     dev = prompt("Enter devices")
//     devices.push(dev)
//     }
// document.write("<h2>Devices:</h2>" + devices )

// for(var i=0 ; i<4 ; i++){
//     out = devices.pop()
//     document.write("<h4>Out:</h4>" + out)
// }


// Question # 15
// var manufacturers = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

// document.write("<select>")
// for (var i = 0; i < manufacturers.length; i++) {
//   document.write(  "<option>" + manufacturers[i] + "</option>" )
// }
// document.write("</select>")



// ---------------------Chapter#17-20 ARRAYS AND LOOP---------------------

// Question # 1
// var arr1 = [];
// var arr2 = [];
// var arr3 = [];
// var array = [ arr1, arr2, arr3 ];

// var otherMethod = [
//                     [   ],
//                     [   ],
//                     [   ],
//                 ];

                
// Question # 2
// var arr1 = [0,1,2,3];
// var arr2 = [1,0,1,2];
// var arr3 = [2,1,0,1];

// var array = [ arr1.join(" "), arr2.join(" "), arr3.join(" ") ];

// for (var i=0; i<array.length; i++){
// document.write(array[i] + "<br>" )
// }


// Question # 3
// for (var i=1 ; i<=10 ; i++){
//     document.write(i + "<br>")
// }


// Question # 4
// var table = prompt("Enter a number to show its multiplication table")
// var len = prompt("Enter length of multiplication table")

// document.write("<h3>Multiplication table of" + " " + table + "<br> Length" + " " + len + "<br></h3>")

// for(var i=1; i<=len ; i++){
//     document.write(table + " " + "*" + " " + i + " " + "=" + " " + table*i + "<br>")
// }


// Question # 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }

// document.write("<br><br>")

// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index" + " " + i  + " " + " is "+ " " + fruits[i] + "<br>")
// }


// Question # 6
// document.write("<h2>Counting:</h2>")

// for (var index = 1; index <= 15; index++) {
//      document.write(index + ", ")
// }


// document.write("<h2>Reverse counting:</h2>")

// for (var index = 10; index >= 1; index--) {
//      document.write(index + ", ")
// }


// document.write("<h2>Even:</h2>")

// for (var index = 0; index <= 20; index++) {
//      document.write(index + ", ")
//      index++
// }


// document.write("<h2>Odd:</h2>")

// for (var index = 1; index < 20; index++) {
//      document.write(index + ", ")
//      index++
// }


// document.write("<h2>Series:</h2>")

// for (var index = 2; index <= 20; index++) {
//      document.write(index + "k, ")
//      index++
// }


// Question # 7
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")

// for(var i=0 ; i<items.length ; i++){
//     if(items[i] === search){
//         document.write(search + " " + "is available at index" + " " + i + " " + "in our bakery")
//         break;
//     }
    
//     else{
//     document.write("We are sorry. " + " " + search.toUpperCase() + " " + "is not available in our bakery ")
//    }
// }

    
// Question # 8
// var arr = [24, 53, 78, 91, 12] 

// var large = arr[0];

// for(var i=1; i<arr.length; i++)
// {
//     if(large > arr[i]){
        
//         large = large;
//     }

//     else{
//         large = arr[i]
//        }
// }
// document.write("Array items:" + " " + arr + "<br>")
// document.write("The largest number is" + " " + large)


// Question # 9
// var arr = [24, 53, 78, 91, 12] 

// var small = arr[0];

// for(var i=1; i<arr.length; i++)
// {
//     if(small < arr[i]){
        
//         small = small;
//     }

//     else{
//         small = arr[i]
//        }
// }
// document.write("Array items:" + " " + arr + "<br>")
// document.write("The smallest number is" + " " + small)


// Question # 10
// var n = 5;

// for(var i=1; i<=20; i++){
//     document.write(n*i + ", " )
// }



// ---------------------Chapter#21-25 STRING METHODS---------------------

// Question # 1
// var firstName = prompt("FIRST NAME");
// var lastName = prompt("LAST NAME");
// var fullName = firstName + " " + lastName;
// console.log("Hello!" + " " + fullName);


// Question # 2
// var phoneModel = prompt(" Favorite Mobile Phone Model ")
// document.write("My favourite phone is:" + " " + phoneModel + "<br>")

// var length = phoneModel.length;
// document.write("Length of string:" + " "  + length);


// Question # 3
// var country = "Pakistani";
// var index = country.indexOf("n");
// document.write("String:" + " " + country + "<br> Index of  'n':" + " " + index)


// Question # 4
// var str = "Hello World";
// var lastIndex = str.lastIndexOf("l")
// document.write("String:" + " " + str + "<br> Last index of  'l':" + " " + lastIndex)


// Question # 5
// var country = "Pakistani";
// var char = country.charAt(3);
// document.write("String:" + " " + country + "<br> Character at index 3:" + " " + char)


// Question # 6
// var firstName = prompt("FIRST NAME");
// var lastName = prompt("LAST NAME");
// var fullName = firstName.concat(" " , lastName)
// console.log("Hello!" + " " + fullName);


// Question # 7
// var city = "Hyderabad";
// var replacement = city.replace("Hyder" , "Islam")
// document.write("City:" + " " + city + "<br> After replacement:" + " " + replacement)


// Question # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacement = message.replace(/and/g , "&")
// document.write(message + "<br> " +  replacement)


// Question # 9
// var num = "472";
// document.write("Value:" + " " + num + "<br> Type:" + " " + typeof(num) + "<br> Value:" + " " + num + "<br> Type:" + " " + typeof(Number(num)) );


// Question # 10
// var str = prompt("Enter some text")
// var upperCase = str.toUpperCase()
// console.log("User input:" + " " + str + "\nUpper case:" + " " + upperCase)


// Question # 11
// var str = prompt("Enter some text")
// var titleCase = str.slice(0,1)
// var otherStr = str.slice(1,str.length)
// titleCase = titleCase.toUpperCase() + otherStr
// console.log("User input:" + " " + str + "\nTitle case:" + " " + titleCase)


// Question # 12
// var num = 35.36 ;
// var result = num.toString().replace("." , "");
// document.write("Number:" + " " + num + "<br> Result:" + " " + result)


// Question # 13
// var username = prompt("Enter username");

// for(var i=0; i<username.length; i++){
//    if(username.charCodeAt(i) === 64 || username.charCodeAt(i) === 33 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 46 ){
// // if(username[i] === "@" || username[i] === "!" || username[i] === "." || username[i] === ","){
//     alert("Please enter a valid username");
//     break;
// }
// }


// Question # 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
// search = search.toLowerCase();

// for(var i=0 ; i<items.length ; i++){
//     if(items[i] === search){
//         document.write(search + " " + "is available at index" + " " + i + " " + "in our bakery <br>")
//         break;
//        }

//     document.write("We are sorry, " + " " + search + " " + "is not available in our bakery <br>")
// }


// Question # 15
// var password = prompt("Enter your password")







// Question # 16
// var university = "University of Karachi";
// var output = university.split("");

// for(var i=0; i<output.length; i++){
//     document.write(output[i] + "<br>")
// }


// Question # 17
// var str = prompt("Enter some text")
// var result = str.slice(str.length-1)
// document.write("User input:" + " " + str + "<br> Last character of input:" + " " + result)


// Question # 18
// var text = "The quick brown fox jumps over the lazy dog";
// var count=0;

// var result = text.toLowerCase().split(" ");

// for(var i=0; i<result.length; i++){
//     if(result[i] === "the"){
//         count += 1;
//     }
// }
// document.write("Text:" + " " + text + "<br>There are" + " " + count + " " + "occurrence(s) of word 'the' ")



// ---------------------Chapter#26-30 MATH METHODS---------------------

// Question # 1
// var num = +prompt("Enter any positive number")
// var roundOff = Math.round(num);
// var ceil = Math.ceil(num)
// var floor = Math.floor(num)

// document.write("number:" + " " + num + "<br> round off value:" + " " + roundOff + "<br> floor value:" + " "  + floor + "<br>ceil value:" + " " + ceil)


// Question # 2
// var num = parseFloat( prompt("Enter any negative number"));
// var roundOff = Math.round(num);
// var ceil = Math.ceil(num)
// var floor = Math.floor(num)

// document.write("number:" + " " + num + "<br> round off value:" + " " + roundOff + "<br> floor value:" + " "  + floor + "<br>ceil value:" + " " + ceil)


// Question # 3
// var num = +prompt("Enter number")
// var absolute = Math.abs(num)
// document.write("The absolute value of" + " " + num + " " + "is" + " " + absolute)


// Question # 4
// var num = Math.floor( Math.random() * 6 ) + 1;

// OR  var num = Math.floor( Math.random() * 7 )

// document.write("random dice value:" + " " + num )


// Question # 5
// var num = Math.floor( Math.random() * 2 ) + 1

// if(num == 2){
//     document.write(num + "<br> random coin value: Heads")
// }
// else{
//     document.write(num + "<br> random coin value: Tails")
// }


// Question # 6
// var num = Math.floor( Math.random() * 100 ) + 1;

// document.write("random number between 1 and 100:" + " " + num)


// Question # 7
// var weight = prompt("Enter your weight in kilograms");
// var output = parseFloat(weight)
// var final = ((Math.random()*output) + 1)
// document.write("The weight of user is" + " " + final.toFixed(1) + " " + "kilograms");


// Question # 8
// var secretNum = Math.floor(Math.random() * 10) + 1;
// var input = +prompt("Enter a number between 1 and 10")

// if(input === secretNum){
// alert("Congratulations!")
// }
// else{
//     alert("Try again!")
// }



// ---------------------Chapter#31-34 DATE METHODS---------------------

// Question # 1
// var date = new Date();
// document.write(date);


// Question # 2
// var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
// var now = new Date();
// var month = now.getMonth();
// alert("Current month:" + " " + monthNames[month])


// Question # 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var day = now.getDay();
// var nameOfToday = dayNames[day];
// document.write("Today is" + " " + nameOfToday)


// Question # 4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var day = now.getDay();
// var nameOfToday = dayNames[day];

// if(nameOfToday === "Sat" || nameOfToday === "Sun"){
//     document.write("It’s Fun day")
// }


// Question # 5
// var now = new Date();
// var date = now.getDate();

// if(date < 16){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last days of the month")
// }


// Question # 6
// var now = new Date();
// var time = now.getTime();
// var minutes = time/(1000*60*60);

// document.write("Current Date:" + " " + now + "<br>");
// document.write("Elapsed milliseconds since January 1 , 1970:" + " " + time + "<br>" )
// document.write("Elapsed minutes since January 1 , 1970:" + " " + minutes)


// Question # 7
// var now = new Date();
// var hours = now.getHours();

// if(hours < 11){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")
// }


// Question # 8
// var laterDate = new Date("December 31, 2020")
// document.write("Later date:" +" "+laterDate)


// Question # 9
// var ramadan = new Date("April 24, 2020");
// var millsSince1 = ramadan.getTime()

// var now = new Date()
// var millsSince2 = now.getTime()

// var averageMills = millsSince2 - millsSince1
// var days = averageMills/(1000*60*60*24)
// var ceil = Math.ceil(days)

// document.write(ceil + " " +"days have passed since 1st Ramadan, 2020 ")


// Question # 10
// var now = new Date("December 5, 2015")
// var millsSince1 = now.getTime();

// var then = new Date("january 1, 2015")
// var millsSince2 = then.getTime();

// var averageMills = millsSince1 - millsSince2;
// var seconds = averageMills/(1000*60)
// var ceil = Math.ceil(seconds)

// document.write("On reference date " + now + "," + " <br>" + ceil +" seconds had passed since beginning of 2015 ")


// Question # 11
// var now = new Date();
// document.write("current date: " + now +"  <br>" )

// var hours = now.getHours();

// var str = hours.toString();
// var ago = +str - 1; 

// var then = new Date(now.setHours(ago))
// document.write("1 hour ago, it was " + then)


// Question # 12
// var now = new Date();
// alert("current date: " + now  )

// var year = now.getFullYear();

// var str = year.toString();
// var ago = +str - 100; 

// var then = new Date(now.setFullYear(ago))
// alert("100 years back, it was " + then)


// Question # 13
// var age = prompt("YOUR AGE")
// document.write("Your age is " + age )

// var now = new Date();
// var birthYear = Math.ceil(now.getFullYear() - age );
// document.write("<br>Your birth year is " + birthYear )


// Question # 14
// document.write("<h1> K-Electric Bill </h1>")

// var cusName = prompt("CUSTOMER NAME")
// var currMonth = prompt("CURRENT MONTH")
// var units = prompt("Number of Units")
// var unitCharges = 16;
// var surcharge = 350;

// var netAmount = units * unitCharges;
// var grossAmount = netAmount + surcharge;

// document.write("Customer Name: " + cusName + "<br> Month: " + currMonth + "<br> Number of units: " + units
// + "<br> Charges per unit: " + unitCharges + "<br><br> Net Amount Payable (within Due Date): " + netAmount
// + "<br> Late payment surcharge: " + surcharge + "<br> Gross Amount Payable (after Due Date): " + grossAmount)



// ---------------------Chapter#35-38 FUNCTION---------------------

// Question # 1
// function dateTime() {
//     var now = new Date();
//     document.write(now)
// }

// dateTime()


// Question # 2
// function greeting(firstName , lastName){
// document.write("Hello! Good Morning, " + firstName + " " + lastName)
// }

// greeting("Wajiha" , "Qaiser...");


// Question # 3
// function addition() {
//     var num1 = prompt("Enter first number")
//     var num2 = prompt("Enter second number")

//     var add = +num1 + +num2;
//     document.write("sum of " + num1 + " and " + num2 + " is " + add)
// }

// addition();
// addition();


// Question # 4
// function operation(num1 , num2 , operator) {
//     var result;

//     if (operator == "+") {
//         result = num1 + num2;
//         return result;
//     }
//     else if (operator == "-") {
//         result = num1 - num2;
//         return result;
//     }
//     else if (operator == "*") {
//         result = num1 * num2;
//         return result;
//     }
//     else if (operator == "/") {
//         result = num1 / num2;
//         return result;
//     }
//     else if (operator == "%") {
//         result = num1 % num2;
//         return result;
//     }
//     else{
//         document.write("Invalid operator")
//     }

// }

// var output =  operation(1000 , 500 , "/");
// document.write(output);

// var output =  operation(90, 8 , "*");
// document.write("<br>" + output);

// var output =  operation(2.5 , 65 , "+"   );
// document.write("<br>" + output);


// Question # 5
// function square(num) {
//     var output = Math.pow(num , 2);
//     document.write("<br> square of " + num + " is " + output)
// }

// square(100);
// var result = square(8);


// Question # 6
// function factorial(numb) {

// }





// Question # 7
// function counting() {
//     var num1 = +prompt("Start number")
//     var num2 = +prompt("End number")

//     for(var i=num1; i<=num2; i++){
//         document.write(i + "<br>")
//        }
// }

// counting();


// Question # 8
// function calculateHypotenuse() {
//     var base = +prompt("Base of right angle triangle")
//     var per = +prompt("Perpendicular of right angle triangle")

    
//     function calculateSquare(num) {
//     var square =  Math.pow(num , 2) 
//     return square;
//     }
   
//     var baseSq = calculateSquare(base);
//     var perSq = calculateSquare(per);


//     var hypSq = baseSq + perSq;
//     var hyp = Math.sqrt(hypSq);
//     document.write("Hypotenuse of right angle triangle is " + hyp)
// }

// calculateHypotenuse();


// Question # 9
// function area(width , height){
//     var area = width * height;
//     document.write("Area of rectangle is " + area)
// }

// area(10, 36);
// area();





// Question # 10
// Question # 11
// Question # 12
// Question # 13
// Question # 14


