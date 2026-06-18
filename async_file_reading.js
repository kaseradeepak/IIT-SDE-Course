const fs = require('fs') 

console.log('Start')

// Read file1 asynchronously
fs.readFile('f1.txt', function(err, fileData) {
    if(err) {
        console.log(err)
    }
    
    console.log('This if data of file-1: ' + fileData)
})

fs.readFile('f2.txt', function(err, fileData) {
    if(err) {
        console.log(err)
    }
    
    console.log('This if data of file-2: ' + fileData)

    let data = fs.readFileSync('f3.txt')
    console.log('This if data of file-3: ' + data)
})

// fs.readFile('f3.txt', function(err, fileData) {
//     if(err) {
//         console.log(err)
//     }
    
//     console.log('This if data of file-3: ' + fileData)
// })

console.log('End')

// 2 GHz - 2 * 10^9 per seconds