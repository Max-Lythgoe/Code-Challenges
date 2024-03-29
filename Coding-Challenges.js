// 1480 Running Sum of 1d Array
var runningSum = function(nums) {
    let total = 0
    let result = []
    
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i]
        result.push(total)
    }
    return result
};
//

// 724. Find Pivot Index
var pivotIndex = function(nums) {
    let totalSum = 0;
    
    for (let i=0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    
    let leftSum = 0;
    for (let i=0; i<nums.length; i++) {
        if (i != 0) leftSum += nums[i-1];
        if (totalSum - leftSum - nums[i] == leftSum) {
            return i;
        }
    }
    
  return -1;
};
//

//14 Longest Common Prefix //
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        console.log("")
    }
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i ++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix
    
};
//

// 20. Valid Parentheses //
var isValid = function(s) {
    
    let bracket = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let heap = [];
    
    for(let char of s){
        if(bracket[char]) {
            heap.push(bracket[char])
        } else {
            if(heap.pop() !== char) return false
        }
    }
    
    return (!heap.length)
};
//

//isPalindrome//
string = string.toLowerCase();
let reversedString = string.split("").reverse().join("");
console.log(reversedString); 
if (string === reversedString) {
  console.log(`${string} is palindrome`);
} else {
  console.log(`${string} is NOT palindrome`);
}
//

//square digits//
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

//

// even or odd//
function even_or_odd(number) {
  
    let divNumber = (number % 2)
    
    console.log(divNumber)
    
    if (divNumber == 0) {
      return 'Even'
    } else {
      return 'Odd'
    }
  }
  //

  // binary addition //
  function addBinary(a,b) {
    return (a + b).toString(2)
    }
//


// find number //

function findNumber(arr, k) {
    let result = 'NO';
    arr.forEach(item => {
      if(k === item) {
        return result = 'YES';
      }
    })
      return result;
  }
//

// sum multiples of 3 or 5 //
function solution(number){
  
    let sum = 0;
    
    for(let i = 1; i < number; i++) {
      if(i%3 === 0 || i%5 ===0) {
        sum += i;
      }
    }
    return sum
}
//

//backwords strings//
function reverseWords(str) {
  let arrWords = str.split(' ')  
  let backWrds = arrWords.map(word => word.split('').reverse().join(''))
  return backWrds.join(' ')
}

//

// Convert number to reversed arrray of digits //
function digitize(n) {

  return n.toString().split('').map(Number).reverse();

}
//

//remove the minimum //
function removeSmallest(numbers) {
  const copy = numbers.slice(0)
 let smallestValue = numbers.indexOf(Math.min(...numbers))
 copy.splice(smallestValue, 1);
 return copy
  
}
//

//regex validate pin code //
const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin)
//

//shortest word - my solution //
function findShort(s){
  const words = s.split(" ");
  
  let numbers = [];
  
  for(let i = 0; i < words.length; i++) {
    numbers.push(words[i].length)
    }
  return Math.min(...numbers)
}
//

//highest and lowest//
function highAndLow(numbers){
  nums = numbers.split(" ");
  
  return `${(Math.max(...nums))}` + ` ` + `${(Math.min(...nums))}`
}
//

//Will there be enough space?//
function enough(cap, on, wait) {
  const pass = (cap - on - wait)
  
  if (pass <= 0) {
    return Math.abs(pass)
  } else {
    return 0
  }
}
//

// Count the divisors of a number //
function getDivisorsCnt(n){
  let count = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    count += 1;
  }
}
return count
}
//
//is this a triangle?//
function isTriangle(a,b,c)
{
  return (a + b > c) && (a + c > b) && (b + c > a);
}
//
//you're a square!//
var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}
//

//Check for factor//
function checkForFactor (base, factor) {
  return (base % factor == 0 ? true : false)
}
//

//Function 2 - squaring an argument//
function square(num) {
  return num*num
}
//

// Isogram //
function isIsogram(str){
  return new Set(str.toLowerCase()).size == str.length;
}
//
//super duper easy//
function problem(x){
  if (typeof x === 'string') {
    return 'Error'
  } else {
    return (x * 50) + 6
  }
}
//
//Remove anchor from URL //
/* I solved it like this*/
function removeUrlAnchor(url){
  let List = []
  
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '#') {
      return List
    } else {
      List += url[i]
    }
  } return List
}
/*alternativley could have done this...*/
function removeUrlAnchor(url){
  return url.split('#')[0];
}
//

//Find the Capitals//
var capitals = function (word) {
  let digits = []
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      digits.push(word.indexOf(word[i]))
    }
  }
  return digits
};
//

//growth of a population//
function nbYear(p0, percent, aug, p) {
  for (var count = 0; p0 < p; count++) {
    p0 += p0 * percent / 100 + aug | 0
  }
  return count
}
//

//find the middle element//
function gimme (triplet) {
  return triplet.indexOf([...triplet].sort((a,b) => a-b)[1])
}
//