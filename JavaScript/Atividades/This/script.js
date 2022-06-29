function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de vida`;
}

const pessoa1 = {
    nome: "Nicole",
    idade: 26
}

const pessoa2 = {
    nome: "Lucas",
    idade: 28
}

const animal = {
    nome: "Gigante",
    idade: 5,
    raca: "schnauzer",
}

console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 9));