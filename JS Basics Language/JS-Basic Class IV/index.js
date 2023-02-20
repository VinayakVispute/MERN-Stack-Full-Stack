// // console.log('kya haaal');


// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// //function call or invoke
// run();


// //function declaration
// function run() {
//     console.log('running');
// }




// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();


// let x = 1;
// x = 'a';

// console.log(x);


// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// //console.log(sum(1));
// // console.log(sum());
// //console.log(sum(1,2,,3,4,5));

// let ans = sum(1,2,2,3);
// console.log(ans);


//Resting Function

// function sum(num,...vina){
//     console.log(vina);
// }
// rest parameter must will at last so no parameter are allowed after rest parameter

// sum(1,2,3,4,5);


// Getter & Setter

// getter : access properties
// setter : change or mutate properties

// let person = {
//     'firstName' : 'Vinayak',
//     'lastName'  : 'Vispute'
// }

// function fullName(){
//     console.log(`Full Name : ${person.firstName} ${person.lastName}`)  // -> only readonly
// }

// fullName();

// =========== Now

let person = {
    'firstName' : 'Vinayak',
    'lastName'  : 'Vispute',
    get fullName(){
        return (`Full Name : ${person.firstName} ${person.lastName}`);
     },
    set fullName(name){
        let naam = name.split(' ');
        this.firstName=naam[0];
        this.lastName=naam[1];
    }
};

console.log(person.fullName);
person.fullName='Jayesh Yadav'
console.log(person.fullName);