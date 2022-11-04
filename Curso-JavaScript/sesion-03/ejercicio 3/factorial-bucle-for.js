function factorialize(num) {
    // Si num = 0 OR num = 1, el factorial regresa 1
    if (num === 0 || num === 1)
        console.log(1);

    // Empezamos el bucle FOR con i = 4
    //Decremento i después de cada iteración
    for (var i = num - 1; i >= 1; i--) {
        //Guardamos el valor de num en cada iteración
        num = num * i; // o num *= i;
        /* 
                        num      var i = num - 1       num *= i         i--       i >= 1?
        1ª iteración:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
        2ª iteración:  20           3 = 4 - 1         60 = 20 * 3       2          yes
        3ª iteración:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
        4ª iteración: 120           1 = 2 - 1        120 = 120 * 1      0          no             
        5ª iteración: 120               0                120
        Fin del bucle FOR 
        */
    }
    console.log(num)

}
factorialize(5);

//Solucion open bootcamp

let factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
}
console.log(factorial) // Factorial de 10 = 3628800