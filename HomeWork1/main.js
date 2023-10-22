
//! Задача 19
let num = -90;

if (num > 0) {
    console.log("Положительное");
  } else if (num < 0) {
    console.log("Отрицательное");
  } else {
    console.log("Ноль");
}

//! Задача 1
let age = 19;

if (age >= 18) {
    console.log('Совершеннолетний');
} else {
  console.log('Несовершеннолетний');
}

//! Задача 4
let day = 7;

switch (day) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
  default:
    console.log('Некорректный день недели! Введите от 1го до 7ми!');
}
//! Задача 2

let isStudent = true;

if (isStudent) {
  console.log('Студент');
} else {
  console.log('Не студент');
}

//! Задача 3

let num1 = 198;
let num2 = 200;

let sum = num1 + num2;

console.log('Сумма этих чисел: ' + sum);

 

//! Задача 13

let grade = "A";

 switch (grade) {
   case "A":
     console.log('Отлично');
     break;
   case "B":
     console.log('Хорошо');
     break;
   case "C":
     console.log('Удовлетворительно');
     break;
   case "D":
     console.log('Плохо');
     break;
   case "F":
     console.log('Провал');
   default:
     console.log('Некорректный ввод!');
 }
  

//! Задача 20

let dayOfWeek = "сб";

switch (dayOfWeek) {
  case "пн":
    console.log("Рабочий день");
    break;
  case "вт":
    console.log("Рабочий день");
    break;
  case "ср":
    console.log("Рабочий день");
    break;
  case "чт":
    console.log("Рабочий день");
    break;
  case "пт":
    console.log("Рабочий день");
    break;
  case "сб":
    console.log("Выходной");
    break;
  case "вс":
    console.log("Выходной");
    break;
  default:
    console.log("Введите день недели правильно!");
}

//! Задача 16  

let isRaining = true;

if (isRaining) {
  console.log("Идет дождь");
} else {
  console.log("Дождя нет");
}



//! Задача 17

let isLeapYear = false;

if (isLeapYear) {
  console.log("Год високосный");
} else {
  console.log("Год не високосный");
}

//! Задача 5

let temperature = 50;

if (temperature < 20) {
    console.log("Холодно");
  } else if (temperature >= 21 && temperature <= 35) {
    console.log("Тепло");
  } else {
    console.log("Горячо");
  }


//! Задача 7

let numm = 7;

if (numm % 2 == 0) {
  console.log("Четное");
} else {
  console.log("Нечетное")
}

//! Задача 9

let userRole = "editor";  

if (userRole === "admin") {
    console.log("Доступ разрешен");
} else if (userRole === "editor") {
    console.log("Доступ ограничен");
} else if (userRole === "viewer") {
    console.log("Доступ запрещен");
} else {
    console.log("Роль не определена");
}

//! Задача 8

let language = "JavaScript";
if (language == "JavaScript") {
  console.log("Поддерживается");
} else {
  console.log("Не поддерживается")
}

//! Задача 10

let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log("Наибольшее число: " + a);
} else if (b >= a && b >= c) {
    console.log("Наибольшее число: " + b);
} else {
    console.log("Наибольшее число: " + c);
}


//! Задача 6

let score = 15; 

let result = (score >= 60) ? "Сдал" : "Не сдал";

console.log(result);

//! Задача 12

let income = 50000; 

let incomeLevel;

if (income > 50000) {
    incomeLevel = "Высокий доход";
} else if (income > 20000) {
    incomeLevel = "Средний доход";
} else {
    incomeLevel = "Низкий доход";
}

console.log(incomeLevel);

//! Задача 14

let password = "mySecurePassword"; 

if (password.length >= 8) {
    console.log("Пароль надежный");
} else {
    console.log("Пароль слишком короткий");
}

//! Задачаь 15

let x = 10;
let y = 5;

let reslt = x > y ? "x больше y" : y > x ? "y больше x" : "x и y равны";

console.log(reslt);

//! Задача 18

const userInput = "Ваша строка здесь";

if (userInput === "") {
  console.log("Пустая строка");
} else {
  console.log("Строка не пуста");
}

//! Задача 19

let nUm = 5; 

if (num > 0) {
  console.log("Положительное");
} else if (num < 0) {
  console.log("Отрицательное");
} else {
  console.log("Ноль");
}

//! Задача 20

let dayofWeek = "пн"; 

switch (dayOfWeek) {
  case "пн":
  case "вт":
  case "ср":
  case "чт":
  case "пт":
    console.log("Рабочий день");
    break;
  case "сб":
  case "вс":
    console.log("Выходной");
    break;
  default:
    console.log("Некорректный день недели");
    break;
}

//? ДОП. ЗАДАЧИ

// ! Задача 1

function isPrime(number) {
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    return true;
  } else if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  let i = 11;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

const numberToCheck = 17;

if (isPrime(numberToCheck)) {
  console.log(numberToCheck + " является простым числом");
} else {
  console.log(numberToCheck + " не является простым числом");
}

//! Задача 2

function isPalindrome(str) {

  str = str.toLowerCase().replace(/ /g, '');

  const reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
}

const inputString = "А роза упала на лапу Азора"; 

if (isPalindrome(inputString)) {
  console.log('Строка является палиндромом.');
} else {
  console.log('Строка не является палиндромом.');
}

//! Задача 3

let examScore = 85; 
let homeworkScore = 75; 

let totalScore = examScore + homeworkScore;

let Grade;
if (totalScore > 90) {
  grade = "A";
} else if (totalScore >= 80 && totalScore <= 89) {
  grade = "B";
} else if (totalScore >= 70 && totalScore <= 79) {
  grade = "C";
} else if (totalScore >= 60 && totalScore <= 69) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Оценка: " + grade);

//! Задача 4

let balance = 1500; 

let withdrawal = 1000; 

if (balance >= withdrawal) {
  console.log("Средств достаточно");
} else {
  console.log("Недостаточно средств");
}

//! Задача 5

function getSeason(month) {

  const seasons = ["Зима", "Весна", "Лето", "Осень"];

  switch (month) {
    case 12:
    case 1:
    case 2:
      return seasons[0]; // Зима
    case 3:
    case 4:
    case 5:
      return seasons[1]; // Весна
    case 6:
    case 7:
    case 8:
      return seasons[2]; // Лето
    case 9:
    case 10:
    case 11:
      return seasons[3]; // Осень
    default:
      return "Некорректный месяц"; 
  }
}


const month = 9; 
const year = 2023; 

const season = getSeason(month);
if (season !== "Некорректный месяц") {
  console.log(`Сезон: ${season}`);
} else {
  console.log("Некорректный месяц");
}
