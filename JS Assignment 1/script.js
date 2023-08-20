// 1. Question: Reverse a string without using the built-in reverse() method.

var txt = "abc";
var revTxt = txt.split("").reverse().join("");
console.log("Question - 1:");
console.log(revTxt);

// 2. Question: Count the number of vowels in a given string.

function countVowels(str) {
    var vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  var inputString = "KIT MERN Development";
  var numberOfVowels = countVowels(inputString);
  console.log("Question - 2:");
  console.log(`Number of vowels: ${numberOfVowels}`);

// 3. Question: Convert the first letter of each word in a sentence to uppercase.
  
  function capFirstLetter(sentence) {
    var words = sentence.split(' ');
    var capWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    return capWords.join(' ');
  }
  
  var inputTxt = "kit gulshan branch";
  var capSentence = capFirstLetter(inputTxt);
  console.log("Question - 3:");

  console.log(capSentence);
  
// 4. Question: Check if a string is a palindrome.
  
  function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
//   var inputString = "kit gulshan branch";
  var inputString = "level";
  var isInputPalindrome = isPalindrome(inputString);
  console.log("Question - 4:");

  if (isInputPalindrome) {
    console.log("The input string is a palindrome.");
  } else {
    console.log("The input string is not a palindrome.");
  }

// 5. Question: Find the sum of all positive numbers in an array.  

  function sumOfPositiveNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  var numbers = [3, -2, 8, -1, 5, -4, 7];
  var positiveSum = sumOfPositiveNumbers(numbers);
  console.log("Question - 5:");

  console.log(`Sum of positive numbers: ${positiveSum}`);

// 6. Question: Find the index of the first occurrence of a specific element in an array.

  function indexOfFirstOccurrence(arr, target) {
    let index = arr.indexOf(target);

    return index >= 0 ? index : -1;
  }
  
  var numbers = [5, 10, 15, 20, 25, 15];
  var targetNumber = 15;
  var index = indexOfFirstOccurrence(numbers, targetNumber);
  console.log("Question - 6:");

  if (index !== -1) {
    console.log(`Index of first occurrence of ${targetNumber}: ${index}`);
  } else {
    console.log(`${targetNumber} not found in the array.`);
  }

//  7. Question: Remove all duplicates from an array without built-in methods.  

  function removeDuplicates(arr) {
    const uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  var numbers = [3, 5, 3, 8, 10, 5, 8];
  var withoutDuplicates = removeDuplicates(numbers);
  console.log("Question - 7:");

  console.log(`Array without duplicates: ${withoutDuplicates}`);

//  8. Question: Sort the array in ascending and descending without built-in methods.

  function ascendingSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  function descendingSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          // Swap elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  var numbers = [5, 3, 8, 1, 2, 7];
  var numbersAscending = [...numbers];
  var numbersDescending = [...numbers];
  
  ascendingSort(numbersAscending);
  descendingSort(numbersDescending);
  console.log("Question - 8:");

  console.log(`Ascending order: ${numbersAscending}`);
  console.log(`Descending order: ${numbersDescending}`);

// 9. Question: Print all even numbers between 1 and 20 using a while loop.

var number = 2;
console.log("Question - 9:");

while (number <= 20) {
  console.log(number);
  number += 2;
}

// 10. Question: Calculate the factorial of a number using a do-while loop.

function calculateFactorial(number) {
    let factorial = 1;
    let i = 1;
  
    do {
      factorial *= i;
      i++;
    } while (i <= number);
  
    return factorial;
  }
  
  var inputNumber = 5;
  var factorial = calculateFactorial(inputNumber);
  console.log("Question - 10:");

  console.log(`Factorial of ${inputNumber} is: ${factorial}`);

// 11. Question: Iterate through the properties of an object using a for-in loop.

  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Engineer"
  };
  console.log("Question - 11:");

  for (const property in person) {
      console.log(`${property}: ${person[property]}`);
  }
  
//  12. Question: Loop through an array using a for-of loop and double each element.

var originalArray = [2, 5, 8, 10, 3];
var doubledArray = [];

for (const element of originalArray) {
  doubledArray.push(element * 2);
}
console.log("Question - 12:");

console.log("Original Array:", originalArray);
console.log("Doubled Array:", doubledArray);

// 13. Question: Check if a number is even or odd and return a corresponding message.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "The number is even.";
    } else {
      return "The number is odd.";
    }
  }
  
  var inputNumber = 7;
  var resultMessage = checkEvenOrOdd(inputNumber);
  console.log("Question - 13:");

  console.log(resultMessage);
  
  // 14. Question: Find the maximum of three numbers using nested ternary operators.

  function findMax(a, b, c) {
    return (a > b)
      ? (a > c ? a : c)
      : (b > c ? b : c);
  }
  
  var num1 = 12;
  var num2 = 25;
  var num3 = 8;
  
  var maxNumber = findMax(num1, num2, num3);
  console.log("Question - 14:");

  console.log(`The maximum number is: ${maxNumber}`);
  
  // 15. Question: Determine if a year is a leap year or not.

  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const inputYear = 2024;
  console.log("Question - 15:");

  if (isLeapYear(inputYear)) {
    console.log(`${inputYear} is a leap year.`);
  } else {
    console.log(`${inputYear} is not a leap year.`);
  }
  