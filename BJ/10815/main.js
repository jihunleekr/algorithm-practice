const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const cards = input[1].split(' ').map(Number);
const numbers = input[3].split(' ').map(Number);

const cardSet = new Set(cards);
const result = [];

for (const number of numbers) {
  if (cardSet.has(number)) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(' '));