function produto(preco:number):void{
    let cal = preco - preco * 0.09;
    console.log(`O valor com desconto é: ${cal}`);    
}
produto (35);

function carro(distancia:number, litros:number):void{
    let call = distancia / litros;
    console.log(`Consumo médio é: ${call}`);    
}
carro (1000,20);

function carroo(distancia:number, litros:number, valor:number):void{
    let valorlitros = litros * valor;
    let consumo = valorlitros / distancia;
    console.log(`O gasto de combustível em reais/km é: ${consumo.toFixed(2)}`);    
}
carroo (50,20,5);


