

// var inputNumber = prompt('Please enter an integer');
// var total = 1;

// for (i = 0; i < inputNumber; i++){
//     total = total * (inputNumber - i);
// }

// console.log(inputNumber + '! = ' + total);


// by using recursion
function factorial(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
const num = prompt('Enter a number: ');

if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a number');
}