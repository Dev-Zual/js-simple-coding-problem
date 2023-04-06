let first = 5;
let second = 7;
const temp = first;
first = second;
second = temp;
console.log(first, second);

// approach 2
[first, second] = [second, first];
