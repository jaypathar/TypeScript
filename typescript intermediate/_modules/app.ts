// importing class form modules teacher and student.
import teacherLogin from "./teacher"
import studentLogin from "./student"

// creating object of class imported 
const student = new studentLogin()
console.log(student.data)
const teacher = new teacherLogin()
console.log(teacher.data)