const mongodb = require('mongodb')
const mongoose = require('mongoose')

const dbString = "mongodb+srv://deepakkasera18_db_user:MZbDMwe0qZJL08f2@cluster0.kehdnub.mongodb.net/sde_course?appName=Cluster0"

// ORM - Object Relational Mapper

// mongoose 
// Promise 
mongoose.connect(dbString)
    .then(() => {
        console.log('Connection Successful')
    })
    .catch((err) => {
        console.log('Connection Unsuccessful: ', err)
    });

// DataBase Schema 

// Define the schema for courses collection in database.
const courseSchema = new mongoose.Schema({
    title: String,
    instructor: String,
    ratings: Number,
    publishedDate: {type: Date, default: Date.now()}
})

// Model for Course collection.
const courseModel = mongoose.model("courses", courseSchema)

// function to insert a new course in the courses collection.
async function createCourse() {
    let newCourse = new courseModel({
        title: "System Design",
        instructor: "Deepak Kasera",
        ratings: 4.87
    })

    await newCourse.save() 
    console.log('Course saved successfuly in the database.')
}

// createCourse()
async function updateCourse(id) {
    let course = await courseModel.findById(id)

    if (!course) {
        console.log("Course not found, please provide a valid id.")
        return
    }

    course.title = "Java, SpringBoot & Microservices"
    await course.save()
    console.log('Course updated successfuly.')
}

// updateCourse('6a426795cb150df39e0d2f7a')

async function  deleteCourse(id) {
    let course = await courseModel.findByIdAndDelete(id)

    if (!course) {
        console.log("Course not found, please provide a valid id.")
        return
    }
    
    console.log('Course deleted successfuly.')
}

deleteCourse('6a4268084d2f8a2c4af5f548')