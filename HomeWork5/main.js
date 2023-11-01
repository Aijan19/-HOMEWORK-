
//? Задача 1

function concatStrings(string1, string2) {

    const result = string1.concat(string2);
    return result;
  }
  

const str1 = "Привет, ";
const str2 = "мир!";
const concatenatedString = concatStrings(str1, str2);
  
console.log(concatenatedString); 
  


//? Задача 2


function replaceAllOccurrences(originalString, substringToReplace, replacementString) {
    const replacedString = originalString.replaceAll(substringToReplace, replacementString);
    return replacedString;
  }
  
const inputString = "Привет, мир! Привет, вселенная!";
const substring = "Привет";
const replacement = "Здравствуй";
  
const replacedString = replaceAllOccurrences(inputString, substring, replacement);
  
console.log(replacedString);
  

//? Задача 1.1


function stringToLowerCase(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    return lowerCaseString;
  }
  
  
const oriGinalString = "Привет, МИР!";
const lowerCaseResult = stringToLowerCase(oriGinalString);
  
console.log(lowerCaseResult); 


//? Задача 2.1

function stringIncludesSubstring(inputString, substring) {
    const includesSubstring = inputString.includes(substring);
    return includesSubstring;
  }
  

const originalString = "Это пример текста.";
const searchSubstring = "пример";
  
const includesSubstringResult = stringIncludesSubstring(originalString, searchSubstring);
  
console.log(includesSubstringResult); 
  
  
//? Задача 3

const getIndexOf = (inputString, substring) => {
    const index = inputString.indexOf(substring);
    return index
  };
  
  
const originalstring = "Это пример текста.";
const searchsubstring = "пример";
  
const indexOfsubstring = getIndexOf(originalstring, searchsubstring);
  
console.log(indexOfsubstring); 
  

//? Задача 1.3


function splitString(inputString) {
    const wordsArray = inputString.split(" ");
    return wordsArray;
  }
  
  
const orgString = "Это пример текста.";
const wordArray = splitString(orgString);
  
console.log(wordArray);
  

//? Задача 2.2

function sliceSubstring(inputString, startIndex, endIndex) {
    const slicedSubstring = inputString.slice(startIndex, endIndex);
    return slicedSubstring;
  }
  
  
const OriginalString = "Пример строки для извлечения подстроки";
const startIndex = 7; 
const endIndex = 12; 
  
const extractedSubstring = sliceSubstring(OriginalString, startIndex, endIndex);
  
console.log(extractedSubstring); 
  
//? Задача 1.4

function convertToString(number) {
    const stringNumber = number.toString();
    return stringNumber;
  }
  

const myNumber = 67;
const stringRepresentation = convertToString(myNumber);
  
console.log(stringRepresentation); 
  
//? Задача 2.3

function parseToFloat(inputString) {
    const floatValue = parseFloat(inputString);
    return floatValue;
  }
  

const decimalString = "3.14159";
const parsedValue = parseToFloat(decimalString);
  
console.log(parsedValue); 
  

//? Задача 3.1

const sumNumbers = (number1, number2) => {
  const result = number1 + number2;
  return result;
};


const num1 = 5;
const num2 = 7;
const sum = sumNumbers(num1, num2);

console.log(sum); 

//? Задача 1.5

function getFixedNumber(number) {
    const formattedNumber = number.toFixed(2);
    return formattedNumber;
  }
  

const MyNumber = 123.45678;
const formattedString = getFixedNumber(myNumber);
  
console.log(formattedString); 


//? Задача 2.3


function parseToInteger(inputString) {
    const integerNumber = parseInt(inputString, 10);
    return integerNumber;
  }
  
const numberString = "42";
const paRsedValue = parseToInteger(numberString);
  
console.log(paRsedValue);
  

//? Задача 1.6

function addNumbers(number1, number2) {
    const result = number1 + number2;
    return result;
  }
  

const nUm1 = 5;
const nUm2 = 7;
const sUm = addNumbers(nUm1, num2);
  
console.log(sUm); 
  

//? Задача 2.4


function parseFloatFromString(inputString) {
    const floatValue = parseFloat(inputString);
    return floatValue;
  }
  

const floatString = "3.14159";
const pArsedValue = parseFloatFromString(floatString);
  
console.log(pArsedValue); 
 

//? Задача 1.7


const fruits = ["яблоко", "банан", "апельсин"];
fruits.push("груша");
fruits.pop();


console.log(fruits);


//? Задача 2.5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.slice().filter(number => number % 2 === 0);

const evenNumbersString = evenNumbers.join(", ");

console.log(evenNumbersString);


//? Задача 3.3

const colors = ["фиолетовый", "синий", "зеленый"];
colors.unshift("оранжевый");
colors.shift();

console.log(colors);

//? Задача 4

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const mergedArray = firstArray.concat(secondArray);

const searchValue = 4;
const containsValue = mergedArray.includes(searchValue);

console.log(mergedArray);
console.log(`mergedArray содержит значение ${searchValue}: ${containsValue}`);

//?  Задача 1.8

const animals = ["кот", "собака", "попугай"];

animals.push("кролик");

const newIndex = animals.indexOf("кролик");

console.log(animals);
console.log(`Индекс "кролика" в массиве: ${newIndex}`);

//?  Задача 2.6

const Numbers = [1, 2, 3, 4, 5];

const slicedArray = numbers.slice(0, 2);

slicedArray.reverse();

const resultString = slicedArray.toString();

console.log(resultString);

//? Задача 3.4

const Fruits = ["яблоко", "банан", "апельсин"];

fruits.unshift("груша");

fruits.shift();

console.log(fruits);


//? Задача 3.2


const fIrstArray = [1, 2, 3];
const sEcondArray = [4, 5, 6];

const mErgedArray = firstArray.concat(secondArray);

const mErgedString = mergedArray.join(", ");

console.log(mErgedString);

// Доп. Задания

//! Задача 1

function findUniqueWords(str) {
  
  const words = str.toLowerCase().split(/\s+/);

  
  const uniqueWords = {};

 
  words.forEach(word => {
    uniqueWords[word] = true;
  });


  const result = Object.keys(uniqueWords);

  return result;
}


const inPutString = "Сегодня хорошая погода";
const uniqueWordsArray = findUniqueWords(inPutString);
console.log(uniqueWordsArray);

//! Задача 2

function replaceVowelsWithAsterisk(str) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      result += "*";
    } else {
      result += char;
    }
  }

  return result;
}

const iNputString = "Хорошего дня!";
const modifiedString = replaceVowelsWithAsterisk(iNputString);
console.log(modifiedString); 


//! Задача на числа 1

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const average = sum / numbers.length;
  return average;
}

const numberArray = [10, 20, 30, 40, 50];
const averageValue = calculateAverage(numberArray);
console.log(averageValue); 


//! Задача на числа 2

function parseCommaSeparatedNumbers(inputString) {
  const numbersArray = inputString.split(','); 
  const parsedNumbers = [];

  for (let i = 0; i < numbersArray.length; i++) {
    const number = parseInt(numbersArray[i], 10); 
    if (!isNaN(number)) {
      parsedNumbers.push(number); 
    }
  }

  return parsedNumbers;
}

const InputString = "10, 20, 30, 40, 50";
const parsedNumbersArray = parseCommaSeparatedNumbers(InputString);
console.log(parsedNumbersArray); 

//! Задача на массивов 1

function reverseWordsInSentence(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}


const inputSentence = "Как прекрасен этот мир!";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);

//! Задача на массивов 2

function filterUniqueNumbers(numbers) {
  const uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (uniqueNumbers.indexOf(numbers[i]) === -1) {
      uniqueNumbers.push(numbers[i]);
    }
  }

  return uniqueNumbers;
}


const inputNumbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbersArray = filterUniqueNumbers(inputNumbers);
console.log(uniqueNumbersArray); 
