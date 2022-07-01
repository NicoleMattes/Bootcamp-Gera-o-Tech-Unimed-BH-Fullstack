
enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Nicole',
    idade: 26,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Harry',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Mabbye',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "Lucas",
    idade: 19,
    profissao: Trabalho.Padeiro
}