function reverseString(sentence) {
  let reverseWord = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    reverseWord += sentence[i];
  }
  return reverseWord;
}

const result = reverseString("hello world!");
console.log(result);
