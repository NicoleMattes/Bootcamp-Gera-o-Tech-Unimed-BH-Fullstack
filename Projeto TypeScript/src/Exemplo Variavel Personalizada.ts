type input1 = string | number;
type input2 = string | number;

function somarValores(input: number | string, imput2: number | string) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
}

console.log(somarValores(1, 5));
console.log(somarValores('Ola', 'Mundo!'));
console.log(somarValores('1', 5));

