// ? Задача 1

for (let number = 2; number <= 50; number++) {
    let isPrime = true;
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(number);
    }
  }

  

// ? Задача 2

const N = parseInt(prompt("Введите число N:"));

if (!isNaN(N) && N > 0) {
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Пожалуйста, введите положительное число.");
}


// ? Задача 3

for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  

// ? Задача 4

const a = parseInt(prompt("Введите число N:"));
let sum = 0;

if (!isNaN(a) && a > 0) {
  for (let i = 1; i <= a; i++) {
    sum += i;
  }

  console.log("Сумма чисел от 1 до " + a + " равна " + sum);
} else {
  console.log("Пожалуйста, введите положительное число.");
}


// ? Задача 5


const multiplier = 7;

for (let i = 1; i <= 10; i++) {
  const result = multiplier * i;
  console.log(`${multiplier} * ${i} = ${result}`);
}


// ? Задача 6

const number = prompt("Введите число:");
let sUm = 0;

for (let i = 0; i < number.length; i++) {
  const digit = parseInt(number[i]);
  if (!isNaN(digit)) {
    sUm += digit;
  }
}

console.log("Сумма цифр введенного числа: " + sUm);


// ? Задача 7

const height = parseInt(prompt("Введите высоту пирамиды:"));

if (!isNaN(height) && height > 0) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= height - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += '*';
    }
    console.log(row);
  }
} else {
  console.log("Пожалуйста, введите положительное число.");
}
