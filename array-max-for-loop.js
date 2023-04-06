const numbers = [21, 43, 100, 12, 23, 105, 54, 67, 90, 1, 55, 33, 110];

function maxInArray(numArray) {
  let largest = numArray[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numArray[i] < largest) {
      largest = numArray[i];
    }
  }
  return largest;
}

const maxNumber = maxInArray(numbers);
console.log(maxNumber);
