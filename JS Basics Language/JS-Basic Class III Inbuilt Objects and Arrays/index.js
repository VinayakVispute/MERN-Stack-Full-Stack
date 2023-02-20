// console.log('Let start the Process....');

// let lastName = 'Vispute';
// // Using the String constructor to create a new string object
// let firstName = new String('Vinayak');

// // Using the length property to get the length of the string
// console.log(lastName.length);

// // Accessing a specific character of the string using bracket notation
// console.log(lastName[4]);

// // Using the includes method to check if the string contains a specific substring
// console.log(lastName.includes('a'));
// console.log(lastName.includes('i'));

// // Using the startsWith method to check if the string starts with a specific substring
// console.log(lastName.startsWith('i'));

// // Using the endsWith method to check if the string ends with a specific substring
// console.log(lastName.endsWith('k'));
// console.log(lastName.endsWith('e'));

// // Using the toUpperCase and toLowerCase methods to convert the case of the string
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());

// // Using the trim method to remove whitespace from the beginning and end of the string
// let temp=" ABC ";
// console.log(temp.trim());

// // Using the replace method to replace a substring with another substring
// console.log(temp.trim().replace('BC','bc'));

// let message = "This is my message for this file"
// let words = message.split(" ");

// console.log(words)

//Date Object in javascript

// let date = new Date();
// console.log(date);

// let date2 = new Date("June 26 2003 03:00");
// console.log(date2);

// let date3 = new Date(2004, 5, 26);
// console.log(date3);

// date3.setFullYear(2003);
// console.log(date3);

//Arrays

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// arr.unshift(0);
// console.log(arr);
// arr.push(arr);
// console.log(arr);
// arr.splice(2,0,"a",'b','c')
// console.log(arr);

// let courses = [
//     {pos: 1 ,naam :'Vinayak'},
//     {pos: 2 ,naam :'Jayesh'},
// ];

// // console.log(courses);

// // to find in object .......find is used which takes function as agrument for condition to find the object and it returns objects

// let ifPresent = courses.find( ifPresent => ifPresent.naam =='Jayesh');

// console.log(ifPresent)

// let arr1 = [1, 2, 3, 4, 5, 6];

// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// arr1.splice(2,1);
// console.log(arr1);



// Removing array

// let array = [1,2,3,4,5,6];
// let array2 = array // Here since its objects reference is copied 

//Method 1

// array = [] // it will clear but since array2 is reference copy of array ...it should also be deleted but it doesnt......
// console.log(array, array2);

//Method 2

// array.length=0; //it clears both array means original one also and reference copy also
// console.log(array,array2) 


// Method 3

// array.splice(0,array.length);
// console.log(array,array2)



// Combining and Slicing Array

// let firstArray =  [1,2,3];
// let secondArray = [4,5,6];

// let combined = firstArray.concat(secondArray);
// console.log(combined);

// combined = [1,2,3,4,5,6]
// let slicedArray = combined.slice(3,combined.length)
// console.log(slicedArray)


// Spread Operator

// let firstArray =  [1,2,3];
// let secondArray = [4,5,6];

// combining twp array using speard operator
// let combined = [... firstArray,'a',...secondArray];
// console.log(combined);


// copying array using speard operator

// let copyArray = [...firstArray]
// console.log(copyArray)


// iterating a array

// let array = [1,2,3,4,5,6,7,8,9];
// // for in looop
// for(let values in array){
//     console.log(`${values} => ${array[values]}`);
// }
// // for of loop //only on iterators
// for(let values of array){
//     console.log(values);
// }

// // for each loop

// array.forEach(values=>console.log(values))




// Joining two array

// let numbers = [1,2,3,4,5,6];

// let joined = numbers.join('-');
// console.log(joined);


// spiliting the string

// let spilitArray = joined.split('-');

// console.log(spilitArray)


//Filtering Array 

// let array = [1,2,3,4,22,154,24,23,48,14,47]

// let a= array.filter((num)=>num%2!=0)
// console.log(a);



// mapping method

// let number = [7,8,9,10];

// let stringNumber = number.map((value)=>{
//     return value.toString();
// });

// let stringNumber2 = number.map((value)=>{
//     return "StudentNumeber "+value;
// });
// console.log(stringNumber);
// console.log(stringNumber2);


// mapping with/to Array

let number = [7,8,9,10];
let mapped = number.map(values=>{
    let obj = {"values" : values};
    return obj;
})

console.log(mapped);