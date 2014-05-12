document.write("<h3>Strings</h3>");
// Writing to the document
document.write("Max value in JS: " + Number.MAX_VALUE+"<br/>");
document.write("Min value in JS: " + Number.MIN_VALUE+"<br/><br />");

// String examples
var sample_string = "Here is a string.";
document.write(sample_string + "<br /><br />");

// Concatenate two strings
var first_string = "First String + ";
var second_string = "Second String.";
var combined_string = first_string + second_string;
document.write(combined_string + "<br />");

// Get length of a string
document.write("Length of string: " + combined_string.length + "<br />");

// Get a substring
document.write("Substring (starts at 0, length of 5): " + combined_string.substr(0, 5) + "<br />");

// Access a character at a given position
document.write("Character at 0: " + combined_string.charAt(0) + "<br />");

// Return the index of a value
document.write("Index of 't' is: " + combined_string.indexOf('t') + "<br /><br />");

document.write("<h3>Strings & Numbers</h3>");
// Strings & Ints
// Adding a string & an int results in a string
var str_var = "5";
var num_var = 10;
var total = str_var + num_var;
document.write("Adding a str and an int yields a str: <br />");
document.write("5 + 10 = " + total + "<br/>");

// However, you may cast a string into a number
total = Number(str_var) + num_var;
document.write("However, you may cast a string to an int with the Number() method:<br />");
document.write("5 + 10 = " + total + "<br/>");

// And you can cast a number to a string
total = str_var + String(num_var);
document.write("And you can cast an int to a string using the String() method:<br />");
document.write("5 + 10 = " + total + "<br/>");

// Multiplying a string and an int results in an int
var multiply_total = str_var * num_var;
document.write("Multiplying a str and an int yields an int: <br />");
document.write("5 * 10 = " + multiply_total + "<br/><br />");

document.write("<h3>Floats</h3>");
// When working with floats, you can round to a specified precision
var pi_var = 3.141592653;
var pi_var2 = pi_var.toFixed(5);
document.write("pi_var before toFixed(5): " + pi_var + "<br />");
document.write("Datatype of (pi_var): " + typeof(pi_var) + "<br />");
document.write("pi_var2 = pi_var.toFixed(5): " + pi_var2 + "<br />");
document.write("Datatype of (pi_var2): " + typeof(pi_var2) + "<br />");
document.write("parseInt(pi_var): " + parseInt(pi_var) + "<br />");
document.write("parseInt(pi_var2): " + parseInt(pi_var2) + "<br /><br />");


document.write("<h3>Boolean</h3>");
// Boolean works just like Java
bool_var = Boolean(23);
document.write("Boolean of 23 is " + bool_var + ".<br />");
var rand_num1 = 5;
var rand_num2 = 10;
document.write("Is 5 > 10? " + (rand_num1 > rand_num2) + "<br />");
document.write("Is 5 >= 10? " + (rand_num1 >= rand_num2) + "<br />");
document.write("Is 5 < 10? " + (rand_num1 < rand_num2) + "<br />");
document.write("Is 5 <= 10? " + (rand_num1 <= rand_num2) + "<br />");
document.write("Is 5 = 10? " + (rand_num1 === rand_num2) + "<br />");
document.write("Is 5 != 10? " + (rand_num1 !== rand_num2) + "<br />");
document.write("Is 5 < 10 and 5 != 10 ? " + ((rand_num1 < rand_num2) && (rand_num1 !== rand_num2)) + "<br /><br />");

// Arrays
document.write("<h3>Arrays</h3>");
var vehicles = new Array("car", "truck", "van");
document.write("The array is: {" + vehicles + "}<br />");
document.write("The second element of the array is: {" + vehicles[1] + "}<br />");

// Iterate through elements in the array
document.write("Iterate through elements; vehicles: {");
for (i in vehicles) {
    if (i == vehicles.length-1) {
        document.write(vehicles[i] + "}");
    } else {
        document.write(vehicles[i] + ", ");
    }
}

// Conditional Operators: Syntax is similar to Java
document.write("<h3>Conditional Operators</h3>");
var rand_var = (5 < 10) ? "5 is less than 10<br />" : "5 is greater than 10" + "<br />";
document.write("rand_var = " + rand_var);

// Switch
var state = "Louisiana";
document.write("The switch says var_state = ");
switch (state)
{
    case "Louisiana":
        document.write("Louisiana");
        break;
    case "Texas":
        document.write("Texas");
        break;
}
document.write("<br />");

// Loops
document.write("Iterate using a while loop: ");
var count = 1;
while (count <= 10)
{
    if (count == 10) {
        document.write(count);
    }
    else {
        document.write(count + ", ");
    }
    count++;
} 
document.write("<br />");

// The continue statement
document.write("Modulus & the 'continue' statement: ");
count = 1;
while (count <= 10)
{
    if (count % 2) {
        count++;
        continue;
    }
    if (count < 10) {
        document.write(count + ", ");
    }
    else {
        document.write(count + "<br />");
    }
    count++;
}

// For loop
document.write("For loop: ");
for (i = 0; i < 10; i++) {
    if (i == 9) {
        document.write(i);
    }
    else{
        document.write(i + ", ");
    }
} document.write("<br ");