"use strict";
var year; // int data type
var greeting; //str data type
var ex = '!'; //str data type
var yes = true; //boolean data type
var no = false; //boolean data type
var sample;
var _sym1 = Symbol('hello'); //Symbol data type
var _sym2 = Symbol('hello'); //Symbol data type
var _exp1 = undefined;//undefined data type
var _exp2 = null;//null data type
year = 2020;

greeting = 'Hello Typescript ';
sample = greeting + year + ex;
// Prints Hello Typescript 2020!
console.log(sample);

//Function to use Symbol. Expected output is true
function test() {
    if (_sym1 != _sym2) {
        return (yes);
    }
    else {
        return (no);
    }
}
console.log(test());

//Object Declaration
var obj = { name: 'Typescript', paradigm: 'object oriented', developer: 'Microsoft' };
//Expected output: Typescript is an object oriented programming language developed by Microsoft.
console.log(obj.name + ' is an ' + obj.paradigm + ' programming language developed by ' + obj.developer + '.');


//Function to determine if the sum of two variables is NaN(Not-a-Number)
function naNTest(){
    if((isNaN(year + _exp1)) === true){
        return(yes);
    }else{
        return no;
    }
}

//Expected Output: true
console.log(naNTest());


