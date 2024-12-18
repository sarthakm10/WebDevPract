/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let num = 1;
sum = 0;
while (num <= 5) {
   sum = sum + num;
   num++;
}
console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
let j = 5;
let countdown = [];
while (j>=1) {
   countdown.push(j);
   j--;
}
console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
let tea;
let teaCollection = [];
//do {
   //prompt doesn't work in node js
   // tea = prompt("Please enter your favorite tea");
//    if (tea !== "stop") {
//       teaCollection.push(tea);
//    }
// } while (tea !== "stop");
// console.log(teaCollection);


/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
k = 1;
let total = 0;
do {
   if (k <= 3) {
      total += k;
      k++;
   }
} while (k <= 3);
console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
let arr = [2, 4, 6];
let multipliedNumbers = [];
for (let l = 0; l < arr.length; l++){
   let multipledNum = arr[l] * 2;
   multipliedNumbers.push(multipledNum);
}
console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let citylist = [];
for (let s = 0; s<cities.length; s++){
   const myCities = cities[s];
   console.log(myCities);
   citylist.push(myCities);
}
console.log(citylist);