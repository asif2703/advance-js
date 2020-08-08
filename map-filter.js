const number = [2,3,4,5,6];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result  = element*element;
//     output.push (result);
// }
// console.log(output);

// function square(element) {
//     return element*element;
// }

// const result = number.map(function(element){
//     return element*element;
// }) 
// console.log(result);

// const result = number.map(x => x*x);
// console.log(result);

const bigger = number.filter(x => x>5);
console.log(bigger);
const sortOut = number.find(x => x < 5);
console.log(sortOut); 
