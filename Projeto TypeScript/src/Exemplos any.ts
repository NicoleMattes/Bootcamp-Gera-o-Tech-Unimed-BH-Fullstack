let valorAny: any;
valorAny = 1;
valorAny = 'olá';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny; 
let valorString2: string = 'testes'
valorString2 = valorAny;

function somarString(string1: string, string2: string, string3: string) {
    console.log(string1 + string2);
}