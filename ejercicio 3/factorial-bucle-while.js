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
factorial(1);