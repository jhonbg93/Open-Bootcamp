//asi hacemos funciones publicas que podemos usar en otros modulos 

export function suma (a, b){
    return a + b;
};

export function multiplicar(a, b){
    return a * b;
};

function eleva(a, b){
    return a ** b;
};

export function factorial(a){
   let factorial = 1;
   for(let i = 2; i <= a; i++){
    factorial *=  i;
   }
   return factorial;
};


export function resta(a, b){
    return a - b;
};


