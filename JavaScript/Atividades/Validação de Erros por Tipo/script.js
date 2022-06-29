function validaArry(arr, num) {
try{
    if (!arr && !num) throw new ReferenceError("Envie os Parâmetros");

    if (typeof arr !== 'object') 
        throw new TypeError("O Array precisa ser do tipo object");

    if (typeof num !== 'number')  
        throw new TypeError("Array precisa ser do tipo number");

    if (arr.lenght !== num) 
        throw new RangeError("Tamanho inválido");
    
    return arr;
}
catch(e){
    if (e instanceof ReferenceError) {
        console.log("Este erro é um ReferenceError");
        console.log(e.name);
        console.log(e.message);
    } else if (e instanceof TypeError) {
        console.log("Este erro é um TypeError");
        console.log(e.name);
        console.log(e.message);
    } else if (e instanceof RangeError) {
        console.log("Este erro é um RangeError");
        console.log(e.name);
        console.log(e.message);
    }else {
        console.log("tipo de erro não esperado:" +  e);
    }
}

}

console.log(validaArry())

console.log(validaArry(5, 5 ))

console.log(validaArry([], 'a'))