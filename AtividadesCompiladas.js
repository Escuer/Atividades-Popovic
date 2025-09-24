"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* EXERCICIO 01
"Olá Mundo"
*/
// Define e exibe uma mensagem de saudação.
let message = "Olá Mundo!";
console.log(message);
/* FINALIZADO*/
/* EXERCICIO 02
"Variáveis simples"
*/
// Declara e exibe informações pessoais.
let nome = "Eduardo";
let idade = 38;
let cidade = "São Paulo";
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
/* FINALIZADO*/
/* EXERCICIO 03
"Positivo ou Negativo"
*/
// Verifica se um número é positivo ou negativo.
let numero = -5;
if (numero >= 0) {
    console.log(`${numero} é positivo.`);
}
else {
    console.log(`${numero} é negativo.`);
}
/* FINALIZADO*/
/* EXERCICIO 04
"Par ou Ímpar"
*/
// Verifica se um número é par ou ímpar usando o operador de módulo.
let valor = 12;
if (valor % 2 === 0) {
    console.log(`${valor} é par.`);
}
else {
    console.log(`${valor} é ímpar.`);
}
/* FINALIZADO*/
/* EXERCICIO 05
"Maioridade"
*/
// Determina se a idade de uma pessoa indica maior ou menoridade.
let idadePessoa = 17;
if (idadePessoa >= 18) {
    console.log("Maior de idade.");
}
else {
    console.log("Menor de idade.");
}
/* FINALIZADO*/
/* EXERCICIO 06
"Nota de aprovação"
*/
// Avalia a aprovação de um aluno com base em sua nota.
let nota = 5;
if (nota >= 6) {
    console.log("Aluno aprovado.");
}
else {
    console.log("Aluno reprovado.");
}
/* FINALIZADO*/
/* EXERCICIO 07
"Classificação etária"
*/
// Classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso).
let idadePessoaClassificacao = 35;
if (idadePessoaClassificacao < 12) {
    console.log("Criança");
}
else if (idadePessoaClassificacao < 18) {
    console.log("Adolescente");
}
else if (idadePessoaClassificacao < 60) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
/* FINALIZADO*/
/* EXERCICIO 08
"Nota e faltas"
*/
// Verifica a aprovação de um aluno com base em nota e faltas.
let materia = "Matemática";
let notaFinal = 8;
let faltas = 12;
if (notaFinal >= 7 && faltas <= 10) {
    console.log(`Aprovado em ${materia}.`);
}
else {
    console.log(`Reprovado em ${materia}.`);
}
/* FINALIZADO*/
/* EXERCICIO 09
"Login simples"
*/
// Simula um login com validação de usuário e senha.
let usuario = "admin";
let senha = "1234";
if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado com sucesso!");
}
else {
    console.log("Usuário ou senha inválidos.");
}
/* FINALIZADO*/
/* EXERCICIO 10
"Desconto por idade"
*/
// Concede desconto a clientes idosos (60+).
let idadeCliente = 65;
if (idadeCliente >= 60) {
    console.log("Cliente tem direito a desconto.");
}
else {
    console.log("Cliente não tem desconto.");
}
/* FINALIZADO*/
/* EXERCICIO 11
"Senha forte"
*/
// Avalia a força de uma senha com base no seu comprimento.
let senhaNova = "abc12345";
if (senhaNova.length >= 8) {
    console.log("Senha forte.");
}
else {
    console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}
/* FINALIZADO*/
/* EXERCICIO 12
"Maior número"
*/
// Compara dois números para determinar qual é o maior.
let a = 25;
let b = 42;
if (a > b) {
    console.log(`${a} é maior que ${b}.`);
}
else if (b > a) {
    console.log(`${b} é maior que ${a}.`);
}
else {
    console.log("Os números são iguais.");
}
/* FINALIZADO*/
/* EXERCICIO 13
"Dia da semana"
*/
// Determina se um dia da semana é útil ou final de semana.
let dia = 6;
if (dia >= 1 && dia <= 5) {
    console.log("Dia útil.");
}
else if (dia === 6 || dia === 7) {
    console.log("Final de semana.");
}
else {
    console.log("Número inválido para dia.");
}
/* FINALIZADO*/
/* EXERCICIO 14
"Faixa de notas"
*/
// Atribui um conceito (A, B, C, D, F) a um aluno com base na nota.
let notaAluno = 82;
if (notaAluno >= 90) {
    console.log("Conceito A");
}
else if (notaAluno >= 80) {
    console.log("Conceito B");
}
else if (notaAluno >= 70) {
    console.log("Conceito C");
}
else if (notaAluno >= 60) {
    console.log("Conceito D");
}
else {
    console.log("Conceito F");
}
/* FINALIZADO*/
/* EXERCICIO 15
"Temperatura"
*/
// Classifica a temperatura em categorias (frio, agradável, quente).
let temperatura = 28;
if (temperatura < 15) {
    console.log("Está frio.");
}
else if (temperatura <= 25) {
    console.log("Clima agradável.");
}
else {
    console.log("Está quente.");
}
/* FINALIZADO*/
/* EXERCICIO 16
"Triângulo válido"
*/
// Verifica se três segmentos de reta podem formar um triângulo.
let lado1 = 5;
let lado2 = 7;
let lado3 = 10;
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    console.log("Forma um triângulo válido.");
}
else {
    console.log("Não forma um triângulo.");
}
/* FINALIZADO*/
/* EXERCICIO 17
"Tabuada"
*/
// Exibe a tabuada de um número de 1 a 10.
let base = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
}
/* FINALIZADO*/
/* EXERCICIO 18
"Contagem Regressiva"
*/
// Realiza uma contagem regressiva de 10 a 1 e exibe uma mensagem final.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lançar foguete!");
/* FINALIZADO*/
/* EXERCICIO 19
"Camiseta com Variáveis"
*/
// Declaração de variáveis e cálculo de desconto para uma camiseta.
let camiseta = 80;
let desconto = 0.15;
let valorDesconto = camiseta * desconto;
let precoFinal = camiseta - valorDesconto;
console.log("Preço original: R$", camiseta);
console.log("Desconto: R$", valorDesconto);
console.log("Preço final com desconto: R$", precoFinal);
/* FINALIZADO*/
/* EXERCICIO 20
"Camiseta com Constantes"
*/
// Declaração de constantes e cálculo de desconto para uma camiseta.
const camiseta1 = 80;
const desconto1 = 0.15;
const valorDesconto1 = camiseta1 * desconto1;
const precoFinal1 = camiseta1 - valorDesconto1;
console.log("Preço original: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);
/* FINALIZADO*/
/* EXERCICIO 21
"Operadores Matemáticos"
*/
// Exemplos de operadores matemáticos e de atribuição.
let a_op = 10;
let b_op = 5;
console.log("Soma:", a_op + b_op);
console.log("Subtração:", a_op - b_op);
console.log("Multiplicação:", a_op * b_op);
console.log("Divisão:", a_op / b_op);
console.log("Módulo:", a_op % b_op);
console.log("Exponenciação:", a_op ** b_op);
let contador = 0;
contador++;
console.log("Incremento:", contador);
contador--;
console.log("Decremento:", contador);
let x = 20;
x += 10;
console.log("Atribuição de Soma:", x);
x -= 5;
console.log("Atribuição de Subtração:", x);
x *= 2;
console.log("Atribuição de Multiplicação:", x);
x /= 4;
console.log("Atribuição de Divisão:", x);
x %= 3;
console.log("Atribuição de Módulo:", x);
let resultado = 10 + 5 * 2;
console.log("Precedência Padrão:", resultado);
resultado = (10 + 5) * 2;
console.log("Uso de Parênteses:", resultado);
/* FINALIZADO*/
/* EXERCICIO 22
"Notas e Faltas"
*/
// Verifica se um aluno foi aprovado ou reprovado em diferentes matérias, considerando notas e faltas.
const nomeAluno1 = "João";
const notaMatematica1 = 8;
const notaPortugues1 = 7;
const notaCiencias1 = 6;
const faltasMatematica1 = 3;
const faltasPortugues1 = 2;
const faltasCiencias1 = 6;
if (notaMatematica1 >= 7 && faltasMatematica1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Matemática!`);
}
else if (faltasMatematica1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido ao número de faltas.`);
}
else {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido à nota.`);
}
if (notaPortugues1 >= 7 && faltasPortugues1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Português!`);
}
else if (faltasPortugues1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Português devido ao número de faltas.`);
}
else {
    console.log(`${nomeAluno1} foi reprovado em Português devido à nota.`);
}
if (notaCiencias1 >= 7 && faltasCiencias1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Ciências!`);
}
else if (faltasCiencias1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido ao número de faltas.`);
}
else {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido à nota.`);
}
/* FINALIZADO*/
/* EXERCICIO 23
"Notas de Provas"
*/
// Verifica a aprovação de um aluno em diferentes matérias com base apenas na nota.
const nomeAluno = "João";
const notaMatematica = 8;
const notaPortugues = 7;
const notaCiencias = 6;
if (notaMatematica >= 7) {
    console.log(`${nomeAluno} foi aprovado em Matemática!`);
}
else {
    console.log(`${nomeAluno} foi reprovado em Matemática.`);
}
if (notaPortugues >= 7) {
    console.log(`${nomeAluno} foi aprovado em Português!`);
}
else {
    console.log(`${nomeAluno} foi reprovado em Português.`);
}
if (notaCiencias >= 7) {
    console.log(`${nomeAluno} foi aprovado em Ciências!`);
}
else {
    console.log(`${nomeAluno} foi reprovado em Ciências.`);
}
/* FINALIZADO*/
/* EXERCICIO 24
"Conversor de Dólar para Real"
*/
// Converte e exibe preços de produtos de dólares para reais, incluindo a taxa de IOF.
function converterPrecoParaReais(precoEmDolar, taxaDeCambio, iof = 6.38) {
    const precoEmReais = precoEmDolar * taxaDeCambio;
    const valorIOF = precoEmReais * (iof / 100);
    const precoComIOF = precoEmReais + valorIOF;
    return { precoEmReais, valorIOF, precoComIOF };
}
const produtos = [
    { nome: "Mouse", precoEmDolar: 25 },
    { nome: "Teclado", precoEmDolar: 40 },
    { nome: "Monitor", precoEmDolar: 200 },
    { nome: "HD Externo", precoEmDolar: 100 },
    { nome: "SSD", precoEmDolar: 120 },
    { nome: "Placa de Vídeo", precoEmDolar: 500 },
    { nome: "Processador", precoEmDolar: 300 },
    { nome: "Memória RAM", precoEmDolar: 80 },
    { nome: "Fonte", precoEmDolar: 150 },
    { nome: "Gabinete", precoEmDolar: 70 },
];
const taxaDeCambio = 5.10;
produtos.forEach(produto => {
    const { precoEmReais, valorIOF, precoComIOF } = converterPrecoParaReais(produto.precoEmDolar, taxaDeCambio);
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço em Dólares: $${produto.precoEmDolar.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF.toFixed(2)}\n`);
});
/* FINALIZADO*/
/* EXERCICIO 25
"Função de Saudação"
*/
// Cria e chama uma função que exibe "Olá, Mundo!".
function saudacao() {
    console.log("Olá, Mundo!");
}
saudacao();
/* FINALIZADO*/
/* EXERCICIO 26
"Função com Parâmetro"
*/
// Cria e chama uma função que recebe um nome e exibe uma saudação personalizada.
function dizerOla(nome) {
    console.log(`Olá, ${nome}!`);
}
dizerOla("Eduardo");
/* FINALIZADO*/
/* EXERCICIO 27
"Função com Retorno"
*/
// Cria uma função que soma dois números e retorna o resultado.
function somar(a, b) {
    return a + b;
}
console.log(`Resultado da soma: ${somar(10, 5)}`);
/* FINALIZADO*/
/* EXERCICIO 28
"Função de Subtração"
*/
// Cria uma função que subtrai dois números e retorna o resultado.
function subtrair(a, b) {
    return a - b;
}
console.log(`Resultado da subtração: ${subtrair(20, 8)}`);
/* FINALIZADO*/
/* EXERCICIO 29
"Função de Multiplicação"
*/
// Cria uma função que multiplica dois números e retorna o resultado.
function multiplicar(a, b) {
    return a * b;
}
console.log(`Resultado da multiplicação: ${multiplicar(6, 7)}`);
/* FINALIZADO*/
/* EXERCICIO 30
"Função de Divisão"
*/
// Cria uma função que divide dois números e retorna o resultado, com tratamento para divisão por zero.
function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: divisão por zero");
        return NaN;
    }
    return a / b;
}
console.log(`Resultado da divisão: ${dividir(20, 4)}`);
/* FINALIZADO*/
/* EXERCICIO 31
"Função Dobro"
*/
// Cria uma função que recebe um número e retorna o seu dobro.
function dobro(n) {
    return n * 2;
}
console.log(`Dobro de 12 = ${dobro(12)}`);
/* FINALIZADO*/
/* EXERCICIO 32
"Função Par ou Ímpar"
*/
// Cria uma função que verifica se um número é par ou ímpar.
function parOuImpar(n) {
    if (n % 2 === 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
}
console.log(`7 é ${parOuImpar(7)}`);
/* FINALIZADO*/
/* EXERCICIO 33
"Função Média de Notas"
*/
// Cria uma função que calcula a média de três notas.
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);
/* FINALIZADO*/
/* EXERCICIO 34
"Função Aprovação"
*/
// Cria uma função que verifica a aprovação de um aluno com base em nota e faltas.
function verificarAprovacao(nota, faltas) {
    if (nota >= 7 && faltas <= 10) {
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}
console.log(verificarAprovacao(8, 5));
/* FINALIZADO*/
/* EXERCICIO 35
"Função Fatorial"
*/
// Cria uma função que calcula o fatorial de um número.
function fatorial(n) {
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log(`Fatorial de 5 = ${fatorial(5)}`);
/* FINALIZADO*/
/* EXERCICIO 36
"Função Juros Simples"
*/
// Cria uma função para calcular o montante em juros simples.
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
console.log(`Juros simples -> VF: R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);
/* FINALIZADO*/
/* EXERCICIO 37
"Função Juros Compostos"
*/
// Cria uma função para calcular o montante em juros compostos.
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa, tempo);
}
let capitalC = 1000;
let taxaC = 0.05;
let tempoC = 12;
let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);
/* FINALIZADO*/
/* EXERCICIO 38
"Conversão Celsius para Fahrenheit"
*/
// Cria uma função que converte temperatura de Celsius para Fahrenheit.
function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}
console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);
/* FINALIZADO*/
/* EXERCICIO 39
"Função Calculadora"
*/
// Cria uma função que executa operações matemáticas básicas com base em um operador.
function calculadora(a, b, op) {
    if (op === "+")
        return a + b;
    if (op === "-")
        return a - b;
    if (op === "*")
        return a * b;
    if (op === "/") {
        if (b === 0) {
            console.log("Erro: divisão por zero.");
            return NaN;
        }
        return a / b;
    }
    console.log("Operador inválido!");
    return NaN;
}
console.log(calculadora(10, 5, "+"));
/* FINALIZADO*/
/* EXERCICIO 40
"Sistema de Notas"
*/
// Cria uma função que atribui um conceito (A-F) a uma nota.
function conceito(nota) {
    if (nota >= 90)
        return "A";
    else if (nota >= 80)
        return "B";
    else if (nota >= 70)
        return "C";
    else if (nota >= 60)
        return "D";
    else
        return "F";
}
console.log(`Nota 95 -> Conceito ${conceito(95)}`);
/* FINALIZADO*/
/* EXERCICIO 41
"Tabuada de For"
*/
// Exibe a tabuada de um número de 1 a 10 usando um loop `for`.
let baseFor = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${baseFor} x ${i} = ${baseFor * i}`);
}
/* FINALIZADO*/
/* EXERCICIO 42
"Contagem Regressiva de For"
*/
// Realiza uma contagem regressiva de 10 a 1 e exibe "Lançar foguete!" no final.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lançar foguete!");
/* FINALIZADO*/
/* EXERCICIO 43
"Soma de Array com For"
*/
// Soma todos os valores de um array usando um loop `for`.
let valoresFor = [10, 20, 30, 40, 50];
let totalFor = 0;
for (let i = 0; i < valoresFor.length; i++) {
    totalFor += valoresFor[i];
}
console.log(`Total = ${totalFor}`);
/* FINALIZADO*/
/* EXERCICIO 44
"Maior Valor do Array com For"
*/
// Encontra o maior valor em um array de números usando um loop `for`.
let numsFor = [5, 12, 3, 27, 9, 27, 1];
let maiorFor = numsFor[0];
for (let i = 1; i < numsFor.length; i++) {
    if (numsFor[i] > maiorFor) {
        maiorFor = numsFor[i];
    }
}
console.log(`Maior valor = ${maiorFor}`);
/* FINALIZADO*/
/* EXERCICIO 45
"Busca Linear com For"
*/
// Procura por um valor em um array e interrompe o loop assim que o encontra.
let listaFor = ["sql", "ts", "js", "python", "go"];
let alvoFor = "python";
let encontradoFor = false;
let posFor = -1;
for (let i = 0; i < listaFor.length; i++) {
    if (listaFor[i] === alvoFor) {
        encontradoFor = true;
        posFor = i;
        break;
    }
}
console.log(encontradoFor ? `Encontrado em lista[${posFor}]` : "Não encontrado");
/* FINALIZADO*/
/* EXERCICIO 46
"Inverter String com For"
*/
// Inverte a ordem dos caracteres de uma string.
let textoFor = "TypeScript";
let invertidoFor = "";
for (let i = textoFor.length - 1; i >= 0; i--) {
    invertidoFor += textoFor[i];
}
console.log(`Original: ${textoFor}`);
console.log(`Invertido: ${invertidoFor}`);
/* FINALIZADO*/ 
//# sourceMappingURL=TODOS.js.map
