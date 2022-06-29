const alunos = [
    {
        nome: 'Harry',
        nota: 5,
        turma: "5 º B",
    },
    {
        nome: "Lucaum",
        nota: 4.5,
        turma: "5 º B",
    },
    {
        nome: "Nicole",
        nota: 10,
        turma: "5 º B",
    },
];


function alunosAprovados(arr, media) {
    let aprovados =[]

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        };
    }
return aprovados;
}

console.log(alunosAprovados(alunos, 5));

