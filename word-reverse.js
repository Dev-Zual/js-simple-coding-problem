function wordReverse(str) {
  const words = str.split(" ");
  let reverseWord = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reverseWord.push(words[i]);
  }
  const join = reverseWord.join(" ");
  return join;
}
const reverseWord = wordReverse("hello world!");
console.log(reverseWord);
