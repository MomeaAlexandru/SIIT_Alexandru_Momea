let array = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8, 8, 1, 1];
//display in the console the numbers from 1 to 20
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] < 20) {
    console.log(array[i]);
  }
}
//display in the console the odd numbers from 1 to 20
for (let i = 0; i < array.length; i++) {
  if (array[i] <= 20 && array[i] >= 1 && array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}
//compute the sum of the elements of an array and display it in the console
let total = 0;

for (let i = 0; i < array.length; i++) {
  total += array[i];
}
console.log(total);
////compute the maximum of elements of an array and display it in the console
let highestNumber = array[0];

for (let i = 0; i < array.length; i++) {
  if (highestNumber < array[i]) {
    highestNumber = array[i];
  }
}
console.log(highestNumber);
//compute how many times a certain element appears in an array - tips: use object, var element = 2
const count = {};

for (const element of array) {
  if (count[element]) {
    count[element] += 1; //count[element] = count[element] + 1
  } else {
    count[element] = 1;
  }
}
console.log(count);
