//Basic Types
let id: number = 26
let person: string = 'Swarangi'
let isWorking: boolean = true
let x:any = 'Hello'

let age:number 
age=8

//Arrays
let seq: number[] = [1,2,3]
let arr: any[] = [1, true, "swara"]

//Tuple
let people: [number, string, boolean] = [1, 'swara', true]

//Tuple Array
let employee: [number, string] [] 
employee = [
    [1, 'swara'],
    [2, 'sinu'],
    [3, 'asa']
]

//Unions - holds more than 1 type
let e_id: string | number 
e_id = '22'

//Enum - name constants 
enum Direction1{
    Up = 1,
    Down,
    Right,
    Left
}
// console.log(Direction1)

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Right = 'Right',
    Left = 'Left'
}

//Objects- instance containing key value pair
//type template | type can be used with primitives & unions
type User = {
    id:number
    name: string
}

const user: User = {
    id: 1,
    name: 'Swara'
}


//Void - no return type
function greet() : void {
    console.log("Hello")
}

//only null & undefined is assigned to void
let a : void = undefined
// let b: void = 1 //Error


//Type Assertion
let cid: any = 1
//let customerId = <number>cid

//assigning the value of cid to customerId with specifying the type
let customerId = cid as number 

//Functions
function addNum(x:  number, y:number) : number{
    return x+y
}

//Interfaces
interface UserInterface {
    id:number
    name: string
    age?: number //optional
}
const user1: UserInterface = {
    id: 1,
    name: 'Swara'
}

interface Mathfunc {
    (x:number, y:number): number 
}

const sub: Mathfunc = (x:number, y:number): number => x-y
const add: Mathfunc = (x:number, y:number): number => x+y

