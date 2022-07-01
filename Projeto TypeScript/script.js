let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');


function somarNumeros(numero1, numero2) {
    // Verifica se os valores recebidos são numeros
    if(typeof numero1 === number && typeof numero2 === number) {
        return numero1 + numero2;
    // Caso não sejá type Number, converte para Number 
    } else {
        return Number(numero1) + Number(numero2);
    } 
}

button.addEventListener('click', () => {
    console.log(input1.value, input2.value);
})