//! Задание 1 

  const person= {
    myName: "Айжан",
    age: 21,
    gender: "Женский",
    city: "Бишкек",
    profession: "Студент",
    maritalStatus: "Не замужем",
};

const {myName, age, gender, city, profession, maritalStatus}= person

console.log("Имя: " + myName)
console.log("Возраст: " + age)
console.log("Пол: " + gender)
console.log("Город: " + city)
console.log("Профессия: " + profession)
console.log("Семейное положение: " + maritalStatus)

//! Задание 2

const num= [1,2,3,4,5,6]

const [first, , , , , last]= num

console.log("Первый элемент:" + first)
console.log("Последний элемент:" + last)

//! Задание 3

function getPerson(person) {
    const { personName = "", personAge = "" } = person;

    return { personName, personAge };
}

const personInfo = {
    personName: "Келгенбаева Айжан",
    personAge: 21,
    personGender: "Женский",
    personCity: "Бишкек",
    personProfession: "Студент",
};

const { personName, personAge } = getPerson(personInfo);
console.log("Имя: " + personName);
console.log("Возраст: " + personAge);


//! Задание 4 

let a = 'Убить нельзя';
let b = 'Помиловать';

[a, b] = [b, a];
  
console.log(a)
console.log(b)

//! Задание 5

const companyInfo= {
    companyName: "Codify Academy",
    address: "105/3 st. Isanova, Bishkek",
    employees: [
      { employeeName: "Aidar", position: "Mentorr" },
      { employeeName: "Nadira", position: "technical support" },
    ],
  }
  
const { companyName, employees: [{ employeeName: firstEmployeeName }] }= companyInfo

console.log("Название компании: " + companyName)
console.log("Имя первого сотрудника: " + firstEmployeeName)


//! Задание 6

const students= [
    { studentName: "Aijana", studentAge: 21 },
    { studentName: "Nazima", studentAge: 19 },
    { studentName: "Nurbol", studentAge: 17 },
    { studentName: "Azim", studentAge: 16 },
    { studentName: "Jangylay", studentAge: 34 },
]
  
for (const { studentName, studentAge } of students) {
    console.log("Имя:" + studentName + ", Возраст:" + studentAge)
}
