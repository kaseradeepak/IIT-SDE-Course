// Arrays 
// int a[]
// String arr[]

let xyz = {}
let students = ["Ankit", "Dhiraj", 'Masai', true, 10, 100.123, xyz, 'Masai']

// console.log(students)
//length property
// console.log(students.length)

// push method - adds an element at the end of an array.
// students.push(100)
// console.log(students)

//pop method - removes and returns the last element from the array
// console.log(students.pop())
// console.log(students)

// shift and unshift

//unshift - It adds an element at the start of an array
students.unshift('IIT')
// console.log(students)

// includes - It returns true/false depending upon the value is present or not in the array.
// console.log(students.includes('IIT'))

// indexOf
// console.log(students.indexOf('IIT'))
// console.log(students.indexOf('100.123'))
// console.log(students.indexOf(100.123))

// console.log(students.indexOf('Masai')) // returns the index of first occurrrence of the element.

// console.log(students.lastIndexOf('Masai'))
// console.log(students.indexOf(xyz))

//Slice - Creates a new array containting the selected elements.
// Slice method doesn't change the original array.
console.log(students)

// slice(startIndex, endIndex)
// startIndex - inclusie
// endIndex - exclusive
// console.log(students.slice(1, 4))

// console.log(students)

//splice: Changes the original array by removing, adding or replacing elements.
//splice(startIndex, deleteCount, item1, item2, .......)
students.splice(1, 2, "Chandigarh", "Mandi", "India")

console.log(students)




