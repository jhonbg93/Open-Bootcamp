const miFunct = val =>{
    if(typeof val === "number"){
        return val * 2; 
    }
    //return false;
    throw new Error("El valor debe ser de tipo numero")
}

var numero = 9

try{
    //Esto se mostrara si se esta ejecuatando de manera correcta
 console.log("Se esta ejecutando de manera correcta");
 const doble = miFunct(numero)
 console.log(doble);
}catch(e){
    //Se ejecurara si hay un error
    console.log("Error");
}finally{
    console.log("Se ejecurar siempre,si hay error o no")
}

