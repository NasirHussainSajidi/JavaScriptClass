function admission(name="Nasir", age= 21, rollNo= 2323443
){
    console.log("Before", this)
    this.name = name,
    this.age = age, 
    this.rollNo = rollNo
    console.log("after", this)
}
const admissions = admission()
console.log('admission', admission)
const admissions1 = new admission("ali", 21, 1)
const admissions2 = new admission("Hussain", 22, 2)
const admissions3 = new admission("Hassan", 23, 3)

// console.log("admission1", admissions1)
// console.log("admission1", admissions3)
// console.log("admission1", admissions2)
// console.log("admission 1 :",admissions1,"admission2 :", admissions2,"admission3 :", admissions3)

const data = [
    {name:"ali", age:21, rollNo: 1},
    {name:"Hussain", age:22, rollNo: 3},
    {name:"Hassan", age:23, rollNo: 3},

    
    ]
    const studentName  = []
    for(let index in data){
        studentName.push(data[index])
    }
    console.log(studentName);

