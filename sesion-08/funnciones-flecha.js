//funciones tipo flecha-funciones anonimas

const numeros = [1,2,3,4,5,6,9,10]

const dobles = numeros.map((a, index, arrayOriginal)=>{
    return a*2
});

console.log(dobles)

