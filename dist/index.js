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
//Unions
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
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
//Object
