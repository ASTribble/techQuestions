'use strict';


//==== FAIR AND SQUARE =================================================
function fairAndSquare(cases){
  const numOfCases = cases[0];
  let caseNum;
  let count = 0;

  for(let i = 1; i <= numOfCases; i++){
    caseNum = i;
    count = 0;
    for (let j = cases[i][0]; j<= cases[i][1]; j++){
      const sqRt = Math.sqrt(j);
      if(isPalindrome(j) && isPalindrome(sqRt)){
        console.log(j);
        count++;
      }
    }
    console.log(`Case #${caseNum}: ${count}`);
  }
  return;
}


function isPalindrome(num){
  const numString = num.toString();

  if (numString.length === 1){ 
    return true;
  }
  else{

    const midIndex = Math.floor(numString.length/2);

    for(let i=0; i<= midIndex; i++){
      if(numString.charAt(i) !== numString.charAt(numString.length - 1 - i)){
        return false;
      }
    }
    return true;
  }
}

// console.log(isPalindrome(242), 'should be true');
// console.log(isPalindrome(24), 'should be false');
// console.log(isPalindrome(2), 'should be true');
// console.log(isPalindrome(23432), 'should be true');
// console.log(isPalindrome(234432), 'should be true');
// console.log(isPalindrome(234234), 'should be flase');

// const input1 = [2, [1,9], [9, 36]];
// // output: case 1: 3, case 2: 1;
// fairAndSquare(input1);
// const input2 = [3, [0, 100], [101, 500], [500, 1000]];
// fairAndSquare(input2);


//==== SUM COMPARISON TO K ==========================

//given a list of numbers, return whether any two sum to k

const inputA = [10, 15, 3, 7];
const kA = 17; //true
const kB = 20; //false

function sumToK(array, k){
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if((array[i] + array[j]) === k){
        return true;
      }
    }
  }
  return false;
}

// console.log('should be true:', sumToK(inputA, kA));
// console.log('should be false:', sumToK(inputA, kB));

// const inputA = [10, 15, 3, 7];
// console.log(inputA.sort((a, b) => a - b));
// const kA = 17; //true
// const kB = 20; //false

function sumToKMap(array, k){
  const map = [];
  for (let i = 0; i < array.length ; i++){
    const mapIndex = array[i];
    map[mapIndex] = 1;
  }
  for (let i = 0; i < array.length; i++){
    if((map[k-array[i]] === 1) && ( k-array[i] !== array[i])){
      return true;
    }
  }
  return false;
}

// console.log('should be true:', sumToKMap(inputA, kA));
// console.log('should be false:', sumToKMap(inputA, kB));



//==== RETURN PRODUCT OF NUMBERS NOT I =========

//return a new array so each element at index I is the product of 
//all the numbers in the original array except the one at i

const input = [1, 2, 3, 4, 5];
//output = [120, 60 40, 30, 24];

const input2 = [3, 2, 1];
//output = [2, 3, 6]

const input3 = [4, 0, 2, 5];
//output = [0, 40, 0, 0]

function productNoI(array){
  const newArray = [];

  for (let i = 0; i < array.length; i++){
    let product = 1;
    for( let j = 0; j < array.length; j++){
      if (i !== j){
        product *= array[j];
      }
    }
    newArray[i] = product;
  }
  return newArray;
}
//this solution is O(n^2) because of the nested loops

console.log('should be [120, 60 40, 30, 24]:', productNoI(input));
console.log('should be [2, 3, 6]:', productNoI(input2));
console.log('should be [0, 40, 0, 0', productNoI(input3));


