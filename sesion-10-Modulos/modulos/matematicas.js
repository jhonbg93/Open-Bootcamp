function suma (a, b){
    return a + b;
};

function multiplicar(a, b){
    return a * b;
};

function eleva(a, b){
    return a ** b;
};

function factorial(a){
   let factorial = 1;
   for(let i = 2; i <= a; i++){
    factorial *=  i;
   }
   return factorial;
};

// const fact = factorial(5);
// console.log(fact);

function resta(a, b){
    return a - b;
};

//para exportar con commonJS debemos hacerlo de la siguiente manera------ es la manera menos utlizada
//1.
module.exports = {
    suma,
    resta,
    eleva,
    factorial,
    factorial,
    multiplicar
}