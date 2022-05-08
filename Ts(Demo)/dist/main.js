"use strict";
//Basic Types
let id = 5;
let company = "CodeValue";
let isPublished = true;
let x = "Hello"; //can change for what you want
let ids = [1, 2, 3, 4, 5];
//ids.push('hello')//=error=just number
let arr = [1, true, "hello"];
//tuple
let person = [1, "may", false];
//let person:[number,string,boolean]=[1,false,'may']//=error=boolean before string
//tuple array
let employee;
employee = [
    [1, "may"],
    [2, "alisa"],
    [3, "shirley"],
    [4, "ron"],
];
//union
let pid = 22;
pid = "22";
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up); //0
/*we can do :
enum Direction1{
    up=1,
    Down,//and this will be=2
    Left,//""=3
    Right,//""=4
}*/
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left); //Left
//objects
const user = {
    id: 206,
    name: "may",
};
console.log(user); //{id: 206, name: 'may'}
//another way:
const user1 = { id: 206, name: "may" };
const newUser = {
    id: 206,
    name: "may",
};
//type assertion
let cid = 1;
//let customerid=<number>cid
let customerid = cid;
//functions
function addNum(x, y) {
    //return number
    return x + y;
}
function log(message) {
    //void function,get string/number
    console.log(message);
}
const user11 = {
    id: 1,
    name: "may",
};
const P1 = 1;
const user12 = {
    id: 1,
    name: "may",
};
user12.id = 5;
const user122 = {
    id: 1,
    name: "may",
};
const add = (x, y) => x + y;
// name :interface func=(inputs):return value
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const may = new Person(206, "may");
console.log(may); //Person {id: 206, name: 'may'}
//class with Private
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const mayy = new Person1(206, "may");
// mayy.id=5//=error=privarte/protected
//extends
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); //super from perdon
        this.position = position;
    }
}
const emp = new Employee(3, "shawn", "Developer");
console.log(emp.name); //shawn
//generic
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["may", "alisa", "ron", "shirly"]);
strArray.push("mayy");
console.log(strArray);
