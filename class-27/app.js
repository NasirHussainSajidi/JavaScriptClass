const person = {
    Name: "Nasir Hussain",
    age: 21,
    cnic: 7110236504849,
    cource :{
        wmd: "Web and Mobile App Development",
        gda: "Graphic Desiging and Vedio Animation",
        AI: "Genitic AI"
    }
}

// for(key in person){
//     console.log(`${key}:${person[key]}`)
// }

// console.log(person.cource.gda)
//  const courses = 'courses'
//  const courseName = 'gda'

//  console.log(person['courses']['gda'])
//  console.log(person[courses][courseName]);

// console.log(person["Name"]);
// console.log(person["cnic"]);

const admissionForm = [
    {
        Name: "Nasir Hussain",
        age: 21,
        cnic: 7110236434849,
        rollNo: 1,
        cource: {
            wmd: "Web and Mobile App Development",
            gda: "Graphic Desiging and Vedio Animation",
            AI: "Genitic AI"
        },
        marks:60,
    },
    {
        Name: "Kashif Hussain",
        age: 18,
        cnic: 7110236504849,
        rollNo:2,
        cource: {
            wmd: "Web and Mobile App Development",
            gda: "Graphic Desiging and Vedio Animation",
            AI: "Genitic AI"
        },
        marks:40
    },
    {
        Name: "Asim Hussain",
        age: 23,
        cnic: 7110233204849,
        rollNo:3,
        cource: {
            wmd: "Web and Mobile App Development",
            gda: "Graphic Desiging and Vedio Animation",
            AI: "Genitic AI"
        },
        marks:83
    },
    {
        Name: "Abis Hussain",
        age: 26,
        cnic: 7110244504849,
        rollNo: 4,
        cource: {
            wmd: "Web and Mobile App Development",
            gda: "Graphic Desiging and Vedio Animation",
            AI: "Genitic AI"
        },
        marks:54
    },
    {
        Name: "Nisar Hussain",
        age: 27,
        cnic: 7110236504239,
        rollNo: 5,
        cource: {
            wmd: "Web and Mobile App Development",
            gda: "Graphic Desiging and Vedio Animation",
            AI: "Genitic AI"
        },
        marks:77
    },
    {
        Name: "Fida Hussain",
        age: 32,
        cnic: 7110221504849,
        rollNo:6,
        cource: {
            wmd: "Web and Mobile App Development",
            gda: "Graphic Desiging and Vedio Animation",
            AI: "Genitic AI"
        },
        marks:91
    },
    {
        Name: "Ali Haider",
        age: 21,
        cnic: 7110236504849,
        rollNo: 7,
        cource: {
            wmd: "Web and Mobile App Development",
            gda: "Graphic Desiging and Vedio Animation",
            AI: "Genitic AI"
        },
        marks:30
    }
]

// for(let i = 0; i<= admissionForm.length; i++){
//     if(admissionForm[i].age > 30){
//         console.log(admissionForm[i].Name, "Beta course karna ka time khatam hova ha ! ")
//     }else{
//         console.log(admissionForm[i].Name)
//     }
// }

// for(let y = 0; y<= admissionForm.length; y++){
//     if(admissionForm[y].marks > 60){
//         console.log(admissionForm[y].Name, "Good Luk brow")
//     }else{
//         console.log(admissionForm[y].Name, "baye agly bar try karna is bar mushkil ha ")
//     }
// }

const personData = {
    name: 'Ali',
    age: 23,
    "father's Name": 'Aftab',
    "roll No": 1,
    courses: {
        wmd: "Web & Mobile App Development",
        gda: "Graphic Designing & video Animation",
        genai: "Generative Ai" 
    }
}

// console.log(personData)
// //Add data 

// personData.contact = '03408519129'
// console.log(personData)
// // Update Data
// personData.age = 20
// console.log(personData)

// //Delete data

// delete personData.name
// console.log(personData)


const Data = {
    name: 'Ali',
    age: 23,
    "father's Name": 'Aftab',
    "roll No": 1,
    courses: {
        wmd: "Web & Mobile App Development",
        gda: "Graphic Designing & video Animation",
        genai: "Generative Ai" 
    },
    greeting(){
        console.log(`Hi ${this.name}`)
    }
}

Data.greeting()