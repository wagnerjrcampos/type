// função simples

function showmessage(msg:string):void{
    console.log(msg);
}

showmessage('Óla Mundo');

//função simples com template string
function getText(text:string):string {
    return `O texto informado foi: ${text}`
}

console.log(getText('kkkkkkkkkkkkkkkkkk'));

// funções com paramentos opcionais
let sum = 0;
function contador(inc?:number):void{
    sum += inc || 1; // || > Ou
    console.log(sum);
}

//chamada da função
contador(1);
contador(10);
contador(30);
contador();

//OUTRA FORMA
//let sum = 0;
//function contador(inc?:number = 1):void{
//    sum += inc || 1; // || > Ou
//    console.log(sum);
//}

//contador(1);
//contador(10);
//contador(30);
//contador();


//Funções de seta (function arrow)

let info:(resposta:string) => string;
info = resposta => `Está proximo do fim da aula? ${resposta}`;

console.log(info('Ainda falta 1h'));

//Funções de seta com expressão ternária

let situacao:(frequencia:number, media:number) => string;
situacao = (frequencia, media) => (frequencia >= 75 && media >= 6)
? "Aprovado" : "Reprovado";

console.log(`A situação do aluno é: ${situacao(75, 9)}`);

//Exercicio 4

let dn:(nome:string, idade:number) => number;
dn = (nome, idade) => (nome && idade - 2019)


console.log(`Ano de nascimento é: ${dn ('wagner', 18)}`);

