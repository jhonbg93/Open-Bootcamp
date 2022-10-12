// function bucleWhile(num) {
//     if (num === 0 || num === 1) console.log(1)

// }
// bucleWhile(1);
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1)
       console.log(1);
    while (num > 1) {
        num--;
        result *= num;
    }
    console.log(result);
}
factorial(5);

//solucion open bootcamp
let factorial = 1
let num = 10
while (num > 1) {
    factorial *= num
    num--
}
console.log(factorial) // Factorial de 10 = 3628800