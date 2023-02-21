//let simpleArray = ['one', 2, 'three', 'true', 'false', 'undefined','null']
let arr = ["John Doe", ["Lily Rose", ["true", ["baseSalary", 23000]]]];

// converted nested array into single array which is 3 levels deep
let convertedArr = arr.flat(3);

console.log(convertedArr); 