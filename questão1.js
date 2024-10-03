//1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function ehQuadradoPerfeito(valor) {
    let raiz = Math.floor(Math.sqrt(valor));
    return raiz * raiz === valor;
}
  
function ehFibonacci(numero) {
    const testePositivo = 5 * Math.pow(numero, 2) + 4;
    const testeNegativo = 5 * Math.pow(numero, 2) - 4;
    const ehFibonacci = ehQuadradoPerfeito(testePositivo) || ehQuadradoPerfeito(testeNegativo);
    return ehFibonacci;
}
  
const numeroInformado = parseInt(prompt("Por favor, informe um número:"), 10);

const pertenceAFibonacci = ehFibonacci(numeroInformado);

if (pertenceAFibonacci) {
    console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
}
  