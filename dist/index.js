"use strict";
//Basic Types
let id = 26;
let person = 'Swarangi';
let isWorking = true;
let x = 'Hello';
let age;
age = 8;
//Arrays
let seq = [1, 2, 3];
let arr = [1, true, "swara"];
//Tuple
let people = [1, 'swara', true];
//Tuple Array
let employee;
employee = [
    [1, 'swara'],
    [2, 'sinu'],
    [3, 'asa']
];
//Unions - holds more than 1 type
let e_id;
e_id = '22';
//Enum - name constants 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Right"] = 3] = "Right";
    Direction1[Direction1["Left"] = 4] = "Left";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Swara'
};
//Void - no return type
function greet() {
    console.log("Hello");
}
//only null & undefined is assigned to void
let a = undefined;
// let b: void = 1 //Error
//Type Assertion
let cid = 1;
//let customerId = <number>cid
//assigning the value of cid to customerId with specifying the type
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
const user1 = {
    id: 1,
    name: 'Swara'
};
const sub = (x, y) => x - y;
const add = (x, y) => x + y;
