var student1 = {
    "name" : "Ankit",
    "age" : 22,
    "course" : "AIML",
    "email" : "ankit@gmail.com",
    "is_placed" : true,
    "address" : {
        "house_no" : 111,
        "area" : "Sector 1",
        "city" : "Gurgaon",
        "State" : "Haryana",
        "pin_code" : 122101
    }
}

// console.log(student["email"])
// console.log(student.email)

// student.city = "Delhi"
// student.email = "ankit1@gmail.com"

// console.log(student)

// delete student.city

// console.log(student)

var student2 = {
    "name" : "Dhiraj",
    "age" : 22,
    "course" : "AIML",
    "email" : "ankit@gmail.com",
    "is_placed" : true,
    "address" : {
        "house_no" : 111,
        "area" : "Sector 1",
        "city" : "Gurgaon",
        "State" : "Haryana",
        "pin_code" : 122101
    }
}

const students = [student1, student2]

// console.log(students)
//In this for loop, const keyword is allowed as javascript creates a new variable in each iteration.
for(const y of students) {
    y.country = "India"
}
// console.log(students)

// In this loop, we can't use const keyword as we are re-assigning the new value in each iteration.
// for(const i = 1; i <= 10; i++) {
//     console.log("Hi")
// }

// console.log(Object.keys(student1))

// console.log(Object.values(student1))

// console.log(Object.entries(student1))

// function fun() {
//     console.log("Fun function")
// }

// fun()
