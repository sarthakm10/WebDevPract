// Checking if a number is greater than another number:
let num1 = 10;
let num2 = 20;
if(num1>num2){
    console.log(`${num1} is greator than ${num2}`);
}
else{
    console.log(`${num2} is greator than ${num1}`);
}

// Checking if a string is equal to another string:
let str1 = "Hello";
let str2 = "Hello";
if(str1 == str2){
    console.log("str1 is equal to str2");
}else{
    console.log("str1 is not equal to str2");
}

//Checking if a variable is a number or not:
let num = 123
if(typeof(num) == 'number'){
    console.log("num is a number");
}else{
    console.log("num is not a number");
}
//Checking if a boolean value is true or false:
let isLoggedIn = true
if (isLoggedIn) {
    console.log("user is logged in");
}else{
    console.log("user is not logged in");
}

// Checking if an array is empty or not:
let arr = ["1", "2", "3"];
if(arr.length == 0){
    console.log("arr is empty");
}else{
    console.log("arr is not empty");
}