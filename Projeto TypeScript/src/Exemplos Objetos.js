"use strict";
const pessoa = {
    nome: 'Maria',
    idade: 28,
    Profissao: 'Desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 29,
    profissao: 'Desenvolvedora'
};
// enum é um basicamente um grupo de constantes para não ter que ficar escrevendo as mesmas coisas vairas vezes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const monica = {
    nome: 'Monica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'pogramação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('', item);
    }
}
listar(monica.materias);
