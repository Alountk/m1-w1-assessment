// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0){
    return true;
  }else{
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b){
    return a;
  }else{
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  maxNum=0;
  if (a === 0 && b === 0 && c === 0){
    return 0;
  }
  if (a > b && a > c){
      return a;
    }else if(b > a && b > c){
      return b;
    }else if (c > b && c >a){
        return c;
    }else {
    return 0;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length===0){
    return 0;
  }
  return sumArr = numbers.reduce((acumulado,valor)=>{
    return acumulado +=valor;
  });
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length === 0){
    return 0;
  }
  maxNum=0;
  arrmap = numbers.map((num)=>{
    if (num > maxNum){
      maxNum = num;
    }
  });
  return maxNum;
}

// Return the longest string in an array
function longestString(strings) {
  //
  longString = '';
  ls = strings.map((str)=>{
    if (str.length > longString.length){
      longString = str;
    }
  });
  return longString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  if (wordsArr.indexOf(word)===0){
    return true;
  }else{
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
  word=false;
  for (i=0;i<wordsArr.length;i++){
    if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])){
      word= wordsArr[i];
      break;
    }
  }
  return word;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  let first=personObj.firstName;  
  let second=personObj.lastName;
  return first + ' ' +second;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(a){
  return Math.max(...a.map(e => Array.isArray(e) ? maxTwoDimArray(e) : e));
}
