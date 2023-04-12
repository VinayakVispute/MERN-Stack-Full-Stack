// Math

// String

// Date
/*
var todayDate = new Date();

console.log(todayDate);

var todayDate2 = new Date("June 26 2003");

console.log(todayDate2);

var todayDate3 = new Date(2003, 6, 26);

console.log(todayDate3);

todayDate3 = new Date(2003, 5, 26);

console.log(todayDate3);

todayDate2.setFullYear(2023);

console.log(todayDate2);
*/

// Array

/*
    // Insertion
        let arr = [1, 2, 4, 5, 6];
        // Insertion at End
        arr.push(7);
        console.log(arr);
        // insertion at Start
        arr.unshift(0);
        console.log(arr);
        // insertion at a position
        arr.splice(3, 0, 3); //syntac : array.splice (index,how many element want to delete,numbers to insert ....)
        console.log(arr);

*/

// Searching
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.indexOf(5));
console.log(numbers.indexOf(55));

console.log(numbers.includes(5)); // Includes returns true ya false
console.log(numbers.includes(55));

console.log(numbers.indexOf(3, 4));

*/

// Finding Elements in Object
/*
const students = [
  { name: "Vinayak Vispute", rollno: 2101201186 },
  { name: "Jayesh Yadav", rollno: 2101201076 },
];

const findStudentByName = students.find((student) => {
  return student.name === "Vinayak Vispute";
});

console.log(findStudentByName);
*/

// Deleting Elements
/*
let arr = [0,1,2,3,4,5,6]

console.log(arr);

// From end
arr.pop();
console.log(arr);

// from start
arr.shift();
console.log(arr);

//from a position
arr.splice(3,1);
console.log(arr);

*/

// Combining & Slicing

// Concating
/*
let num1 = [1,2,3,4,5,6];
let num2 = [7,8,9,10];

let combined = num1.concat(num2)
console.log(num1);

//  Slicing
let slicedArray = num1.slice(2,4);
console.log(slicedArray);

*/
/*

// Spread Operator
let num1 = [1,2,3,4];
let num2 = [5,6,7,8];

// Combined

let num = [... num1,...num2]
console.log(num);

// Copy

let numCopy = [...num]
console.log(numCopy);

*/

// Iterating Array
/*
let arr = [10,20,30,40,50]
  // For Each Loop

  arr.forEach(items=>console.log(items));
  arr.forEach(items=>console.log(items+1));
*/

// Joining Array
/*
let numbers = [1,2,3,4,5,6,7,8,9];
const joined = numbers.join("-")
console.log(joined);
console.log(typeof joined);
  */

// Spilting Array

/*
let message = "mY nAME iS vINAYAK vISPUTE";
let spiltMessage = message.split(" ");
console.log(spiltMessage);
console.log(typeof spiltMessage);
*/

// Sorting Array
/*
let numbers = [4,2,0,3,1,-7,-66];
numbers = [5,10,4,40]
numbers.sort();
console.log(numbers);

//  Reversing Array

numbers.reverse();
console.log(numbers);

*/

// Filtering array
/*
let numbers = [1,2,-1,-4];

let filtered = numbers.filter(items=>(items>0));
console.log(filtered);

*/

// Mapping
/*
let arr = [1,2,3,4]

let mappedArr = arr.map((items)=>{
  return items+1;
})

console.log(mappedArr);
*/


/*
let numbers = [1, 2, -8, 7, -7];

let items = numbers
  .filter((items) => {
    return items >= 0;
  })
  .map((num) => {
    return { value: num };
  });

console.log(items);
*/