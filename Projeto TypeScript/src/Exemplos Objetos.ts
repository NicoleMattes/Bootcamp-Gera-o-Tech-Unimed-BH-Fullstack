const pessoa = {
    nome: 'Maria',
    idade: 28,
    Profissao: 'Desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 29,
    profissao: 'Desenvolvedora'
}

// enum é um basicamente um grupo de constantes para não ter que ficar escrevendo as mesmas coisas vairas vezes
enum Profissao {
    Professora, 
    Atriz, 
    Desenvolvedora,
    JogadorDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const monica: estudante = {
    nome: 'Monica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'pogramação' ]
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('', item)
    }
}

listar(monica.materias)