//Basic Types

let id: number = 5;
let company: string = "CodeValue";
let isPublished: boolean = true;
let x: any = "Hello"; //can change for what you want
let ids: number[] = [1, 2, 3, 4, 5];
//ids.push('hello')//=error=just number
let arr: any[] = [1, true, "hello"];

//tuple
let person: [number, string, boolean] = [1, "may", false];
//let person:[number,string,boolean]=[1,false,'may']//=error=boolean before string

//tuple array
let employee: [number, string][];
employee = [
  [1, "may"],
  [2, "alisa"],
  [3, "shirley"],
  [4, "ron"],
];

//union
let pid: string | number = 22;
pid = "22";

//enum
enum Direction1 {
  up, //defult=0
  Down, //defult=1
  Left, //defult=2
  Right, //defult=3
}
console.log(Direction1.up); //0
/*we can do :
enum Direction1{
    up=1,
    Down,//and this will be=2
    Left,//""=3
    Right,//""=4
}*/

enum Direction2 {
  up = "up", //defult=0
  Down = "down", //defult=1
  Left = "Left", //defult=2
  Right = "Right", //defult=3
}
console.log(Direction2.Left); //Left

//objects
const user = {
  id: 206,
  name: "may",
};
console.log(user); //{id: 206, name: 'may'}

//another way:
const user1: {
  id: number;
  name: string;
} = { id: 206, name: "may" };

//another way:
type user3 = {
  id: number;
  name: "may";
};
const newUser: user3 = {
  id: 206,
  name: "may",
};

//type assertion
let cid: any = 1;
//let customerid=<number>cid
let customerid = cid as number;

//functions
function addNum(x: number, y: number): number {
  //return number
  return x + y;
}
function log(message: string | number): void {
  //void function,get string/number
  console.log(message);
}

//interface
interface newInterface {
  id: number;
  name: string;
}
const user11: newInterface = {
  id: 1,
  name: "may",
};

//same one
//interface Point=number|string// =error
type Point = number | string;
const P1: Point = 1;

//example
interface newInterface {
  id: number;
  name: string;
  age?: number;
}
const user12: newInterface = {
  id: 1,
  name: "may",
};

user12.id = 5;

// read only
interface newInterfacee {
  readonly id: number;
  name: string;
  age?: number;
}
const user122: newInterfacee = {
  id: 1,
  name: "may",
};
//user122.id=5=error = read only

//interface with function
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
// name :interface func=(inputs):return value

//classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const may = new Person(206, "may");
console.log(may); //Person {id: 206, name: 'may'}

//class with Private
class Person1 {
  private id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
const mayy = new Person1(206, "may");
// mayy.id=5//=error=privarte/protected

//extends
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); //super from perdon
    this.position = position;
  }
}

const emp = new Employee(3, "shawn", "Developer");
console.log(emp.name); //shawn

//generic
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["may", "alisa", "ron", "shirly"]);

strArray.push("mayy");
console.log(strArray);
