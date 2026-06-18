const fs = require('fs') 

console.log('start')
// FileSystem Module - Used to do file operations(Creating, reading, updating, deleting a file)

let data1 = fs.readFileSync('./f1.txt')

console.log('This if data of file-1: ' + data1)

let data2 = fs.readFileSync('./f2.txt')

console.log('This if data of file-2: ' + data2)

let data3 = fs.readFileSync('./f3.txt')

console.log('This if data of file-3: ' + data3)

console.log('end')