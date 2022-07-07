// MAP Function
// Syntax array.map(callback[, thisObject])
// array.map(callback(element, index, arr), thisArg)
// Length would be the same of the array function when mapped with the transformed items

const data = [
 {
    name: 'Swara',
    age: 21,
    gender: 'F',
    isinIT: true
 },
 {
    name: 'Ravi',
    age: 24,
    gender: 'M',
    isinIT: false
    
 },
 {
    name: 'Shruti',
    age: 21,
    gender: 'F',
    isinIT: false
    
 },
 {
    name: 'Alay',
    age: 22,
    gender: 'M',
    isinIT: true    
 }
]

// Print validity based on age
let ageValidity = data.map((item) => {
    if (item.age > 21){
        return "Valid"
    }
    else{
        return "Invalid" 
    }
})
console.log(ageValidity)

// Add department to the array
let addDepartment = data.map((item) => {
    if (item.isinIT == true){
        return {...item, Department: 'IT'}
    }
    else{
        return {...item, Department: ''}
    }
})
console.log(addDepartment)

// Print square of items in array
let nums = [1,2,3,4]
console.log(nums.map((num => num*num)))


