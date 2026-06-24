// Build this server using Express.
const express = require('express')

// console.log(express)

const app = express(); 

app.use(express.json()); // Built-in Middleware in Express.

app.listen(8002, () => {
    console.log('Express Server Started.')
})

const courses = [
    {id: 1, name: "Java"},
    {id: 2, name: "Python"},
    {id: 3, name: "WebDev"}
]

// CRUD Operations.
// HTTP Methods - GET, PUT, POST, DELETE
app.get('/', (req, res) => {
    res.end("This is the home page.")
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/about', (req, res) => {
    res.end("This is the About page.")
})

app.get('/courses/:id', (req, res) => {
    console.log(req.params)

    let course = courses.find((course) => course.id === parseInt(req.params.id))

    // ! -> negation
    //undefined, 0, null => false 
    // course == undefined
    if(!course) {
        res.status(404).send('Course not found')
    }

    res.status(200).send(course)
})

