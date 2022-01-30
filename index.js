// Create a constructor function called teacher with at least two relevant properties
// Create one more constructor function called person which should accept name and subject.
// since person is a teacher, we need person to inherit properties of teacher.
// use call, apply, bind seperately inside person constructor function and create a three person object which should contain both the properties of teacher and person.

function teacher(gender, age){
    this.gender=gender
    this.age=age

}

function person(name , subject,age,gender){
    teacher.call(this,age,gender)
    this.name=name
    this.subject=subject
}
function person2(name , subject,age,gender){
    teacher.apply(this,[age,gender])
    this.name=name
    this.subject=subject
}
function person3(name , subject,age,gender){
    var bindFunc=teacher.bind(this,age,gender)
    bindFunc()
    this.name=name
    this.subject=subject
}
var teacher1 = new person("Yogendra","Physics",24,"Male")
// console.log(teacher1) //by call

var teacher2 = new person2("Yogendra","Physics",24,"Male")
// console.log(teacher2) // by apply

var teacher3 = new person3("Yogendra","Physics",24,"Male")
// console.log(teacher3)   // by bind