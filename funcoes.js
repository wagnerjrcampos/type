// função simples
function showmessage(msg) {
    console.log(msg);
}
showmessage('Óla Mundo');
//função simples com template string
function getText(text) {
    return "O texto informado foi: " + text;
}
console.log(getText('kkkkkkkkkkkkkkkkkk'));
// funções com paramentos opcionais
var sum = 0;
function contador(inc) {
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
var info;
info = function (resposta) { return "Est\u00E1 proximo do fim da aula? " + resposta; };
console.log(info('Ainda falta 1h'));
//Funções de seta com expressão ternária
var situacao;
situacao = function (frequencia, media) { return (frequencia >= 75 && media >= 6)
    ? "Aprovado" : "Reprovado"; };
console.log("A situa\u00E7\u00E3o do aluno \u00E9: " + situacao(75, 9));
//Exercicio 4
function pessoa(nome, idade, mes) {
    var anoNas = (mes <= 2) ? 2019 - idade - 1 : 2019 - idade;
    console.log("Data de Nascimento do  " + nome + " \u00E9 " + anoNas);
}
pessoa('wagner', 18, 2);
//Exercicio 5
var somar = 0;
function cal(inc) {
    somar += inc || 0; // || > Ou
    console.log("Soma: " + somar);
}
//chamada da função
cal(10);
cal(20);
cal();
//Exercicio 6
//let verificaPar : (numero:number) => string;
var verificaPar = function (numero) { return (numero % 2 == 0) ? "par" : "Impar"; };
console.log(verificaPar(2));
