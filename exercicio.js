function produto(preco) {
    var cal = preco - preco * 0.09;
    console.log("O valor com desconto \u00E9: " + cal);
}
produto(35);
function carro(distancia, litros) {
    var call = distancia / litros;
    console.log("Consumo m\u00E9dio \u00E9: " + call);
}
carro(1000, 20);
function carroo(distancia, litros, valor) {
    var valorlitros = litros * valor;
    var consumo = valorlitros / distancia;
    console.log("O gasto de combust\u00EDvel em reais/km \u00E9: " + consumo);
}
carroo(50, 20, 5);
