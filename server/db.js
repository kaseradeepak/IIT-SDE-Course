const mongodb = require('mongodb')
const mongoose = require('mongoose')

const dbString = 

// ORM - Object Relational Mapper
// mongoose 
mongoose.connect(dbString)
        .then(() => {
            console.log('Connection Successful')
        })
        .catch((err) => {
            console.log('Connection Unsuccessful: ', err)
        })


