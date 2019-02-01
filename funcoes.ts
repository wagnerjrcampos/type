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

function pessoa(nome:string, idade: number, mes:number):void{
let anoNas = (mes <= 2) ? 2019 - idade - 1 : 2019-idade;
console.log(`Data de Nascimento do ${nome} é ${anoNas}`);
}
//Exercicio 5

let somar = 0;
function cal(inc?:number):void{
    somar += inc || 0; // || > Ou
    console.log(`Soma: ${somar}` );
}
//chamada da função
cal(10);
cal(20);
cal();

//Exercicio 6
//let verificaPar : (numero:number) => string;
let verificaPar = numero => (numero % 2 == 0) ? "par" : "Impar";
console.log(verificaPar(2));




