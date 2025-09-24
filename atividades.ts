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
let nome: string = "Eduardo";
let idade: number = 38;
let cidade: string = "São Paulo";
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
/* FINALIZADO*/


/* EXERCICIO 03
"Positivo ou Negativo"
*/
// Verifica se um número é positivo ou negativo.
let numero: number = -5;
if (numero >= 0) {
  console.log(`${numero} é positivo.`);
} else {
  console.log(`${numero} é negativo.`);
}
/* FINALIZADO*/


/* EXERCICIO 04
"Par ou Ímpar"
*/
// Verifica se um número é par ou ímpar usando o operador de módulo.
let valor: number = 12;
if (valor % 2 === 0) {
  console.log(`${valor} é par.`);
} else {
  console.log(`${valor} é ímpar.`);
}
/* FINALIZADO*/


/* EXERCICIO 05
"Maioridade"
*/
// Determina se a idade de uma pessoa indica maior ou menoridade.
let idadePessoa: number = 17;
if (idadePessoa >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}
/* FINALIZADO*/


/* EXERCICIO 06
"Nota de aprovação"
*/
// Avalia a aprovação de um aluno com base em sua nota.
let nota: number = 5;
if (nota >= 6) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno reprovado.");
}
/* FINALIZADO*/


/* EXERCICIO 07
"Classificação etária"
*/
// Classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso).
let idadePessoaClassificacao: number = 35;
if (idadePessoaClassificacao < 12) {
  console.log("Criança");
} else if (idadePessoaClassificacao < 18) {
  console.log("Adolescente");
} else if (idadePessoaClassificacao < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
/* FINALIZADO*/


/* EXERCICIO 08
"Nota e faltas"
*/
// Verifica a aprovação de um aluno com base em nota e faltas.
let materia: string = "Matemática";
let notaFinal: number = 8;
let faltas: number = 12;
if (notaFinal >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia}.`);
} else {
  console.log(`Reprovado em ${materia}.`);
}
/* FINALIZADO*/


/* EXERCICIO 09
"Login simples"
*/
// Simula um login com validação de usuário e senha.
let usuario: string = "admin";
let senha: string = "1234";
if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}
/* FINALIZADO*/


/* EXERCICIO 10
"Desconto por idade"
*/
// Concede desconto a clientes idosos (60+).
let idadeCliente: number = 65;
if (idadeCliente >= 60) {
  console.log("Cliente tem direito a desconto.");
} else {
  console.log("Cliente não tem desconto.");
}
/* FINALIZADO*/


/* EXERCICIO 11
"Senha forte"
*/
// Avalia a força de uma senha com base no seu comprimento.
let senhaNova: string = "abc12345";
if (senhaNova.length >= 8) {
  console.log("Senha forte.");
} else {
  console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}
/* FINALIZADO*/


/* EXERCICIO 12
"Maior número"
*/
// Compara dois números para determinar qual é o maior.
let a: number = 25;
let b: number = 42;
if (a > b) {
  console.log(`${a} é maior que ${b}.`);
} else if (b > a) {
  console.log(`${b} é maior que ${a}.`);
} else {
  console.log("Os números são iguais.");
}
/* FINALIZADO*/


/* EXERCICIO 13
"Dia da semana"
*/
// Determina se um dia da semana é útil ou final de semana.
let dia: number = 6;
if (dia >= 1 && dia <= 5) {
  console.log("Dia útil.");
} else if (dia === 6 || dia === 7) {
  console.log("Final de semana.");
} else {
  console.log("Número inválido para dia.");
}
/* FINALIZADO*/


/* EXERCICIO 14
"Faixa de notas"
*/
// Atribui um conceito (A, B, C, D, F) a um aluno com base na nota.
let notaAluno: number = 82;
if (notaAluno >= 90) {
  console.log("Conceito A");
} else if (notaAluno >= 80) {
  console.log("Conceito B");
} else if (notaAluno >= 70) {
  console.log("Conceito C");
} else if (notaAluno >= 60) {
  console.log("Conceito D");
} else {
  console.log("Conceito F");
}
/* FINALIZADO*/


/* EXERCICIO 15
"Temperatura"
*/
// Classifica a temperatura em categorias (frio, agradável, quente).
let temperatura: number = 28;
if (temperatura < 15) {
  console.log("Está frio.");
} else if (temperatura <= 25) {
  console.log("Clima agradável.");
} else {
  console.log("Está quente.");
}
/* FINALIZADO*/


/* EXERCICIO 16
"Triângulo válido"
*/
// Verifica se três segmentos de reta podem formar um triângulo.
let lado1: number = 5;
let lado2: number = 7;
let lado3: number = 10;
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  console.log("Forma um triângulo válido.");
} else {
  console.log("Não forma um triângulo.");
}
/* FINALIZADO*/


/* EXERCICIO 17
"Tabuada"
*/
// Exibe a tabuada de um número de 1 a 10.
let base: number = 7;
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
let camiseta: number = 80;
let desconto: number = 0.15;
let valorDesconto: number = camiseta * desconto;
let precoFinal: number = camiseta - valorDesconto;
console.log("Preço original: R$", camiseta);
console.log("Desconto: R$", valorDesconto);
console.log("Preço final com desconto: R$", precoFinal);
/* FINALIZADO*/


/* EXERCICIO 20
"Camiseta com Constantes"
*/
// Declaração de constantes e cálculo de desconto para uma camiseta.
const camiseta1: number = 80;
const desconto1: number = 0.15;
const valorDesconto1: number = camiseta1 * desconto1;
const precoFinal1: number = camiseta1 - valorDesconto1;
console.log("Preço original: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);
/* FINALIZADO*/


/* EXERCICIO 21
"Operadores Matemáticos"
*/
// Exemplos de operadores matemáticos e de atribuição.
let a_op: number = 10;
let b_op: number = 5;
console.log("Soma:", a_op + b_op);
console.log("Subtração:", a_op - b_op);
console.log("Multiplicação:", a_op * b_op);
console.log("Divisão:", a_op / b_op);
console.log("Módulo:", a_op % b_op);
console.log("Exponenciação:", a_op ** b_op);
let contador: number = 0;
contador++;
console.log("Incremento:", contador);
contador--;
console.log("Decremento:", contador);
let x: number = 20;
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
let resultado: number = 10 + 5 * 2;
console.log("Precedência Padrão:", resultado);
resultado = (10 + 5) * 2;
console.log("Uso de Parênteses:", resultado);
/* FINALIZADO*/


/* EXERCICIO 22
"Notas e Faltas"
*/
// Verifica se um aluno foi aprovado ou reprovado em diferentes matérias, considerando notas e faltas.
const nomeAluno1: string = "João";
const notaMatematica1: number = 8;
const notaPortugues1: number = 7;
const notaCiencias1: number = 6;
const faltasMatematica1: number = 3;
const faltasPortugues1: number = 2;
const faltasCiencias1: number = 6;
if (notaMatematica1 >= 7 && faltasMatematica1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Matemática!`);
} else if (faltasMatematica1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido ao número de faltas.`);
} else {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido à nota.`);
}
if (notaPortugues1 >= 7 && faltasPortugues1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Português!`);
} else if (faltasPortugues1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Português devido ao número de faltas.`);
} else {
    console.log(`${nomeAluno1} foi reprovado em Português devido à nota.`);
}
if (notaCiencias1 >= 7 && faltasCiencias1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Ciências!`);
} else if (faltasCiencias1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido ao número de faltas.`);
} else {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido à nota.`);
}
/* FINALIZADO*/


/* EXERCICIO 23
"Notas de Provas"
*/
// Verifica a aprovação de um aluno em diferentes matérias com base apenas na nota.
const NomeAluno: string = "João";
const notaMatematica: number = 8;
const notaPortugues: number = 7;
const notaCiencias: number = 6;
if (notaMatematica >= 7) {
    console.log(`${NomeAluno} foi aprovado em Matemática!`);
} else {
    console.log(`${NomeAluno} foi reprovado em Matemática.`);
}
if (notaPortugues >= 7) {
    console.log(`${NomeAluno} foi aprovado em Português!`);
} else {
    console.log(`${NomeAluno} foi reprovado em Português.`);
}
if (notaCiencias >= 7) {
    console.log(`${NomeAluno} foi aprovado em Ciências!`);
} else {
    console.log(`${NomeAluno} foi reprovado em Ciências.`);
}
/* FINALIZADO*/


/* EXERCICIO 24
"Conversor de Dólar para Real"
*/
// Converte e exibe preços de produtos de dólares para reais, incluindo a taxa de IOF.
function converterPrecoParaReais(precoEmDolar: number, taxaDeCambio: number, iof: number = 6.38): { precoEmReais: number, valorIOF: number, precoComIOF: number } {
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
function saudacao(): void {
  console.log("Olá, Mundo!");
}
saudacao();
/* FINALIZADO*/


/* EXERCICIO 26
"Função com Parâmetro"
*/
// Cria e chama uma função que recebe um nome e exibe uma saudação personalizada.
function dizerOla(nome: string): void {
  console.log(`Olá, ${nome}!`);
}
dizerOla("Eduardo");
/* FINALIZADO*/


/* EXERCICIO 27
"Função com Retorno"
*/
// Cria uma função que soma dois números e retorna o resultado.
function somar(a: number, b: number): number {
  return a + b;
}
console.log(`Resultado da soma: ${somar(10, 5)}`);
/* FINALIZADO*/


/* EXERCICIO 28
"Função de Subtração"
*/
// Cria uma função que subtrai dois números e retorna o resultado.
function subtrair(a: number, b: number): number {
  return a - b;
}
console.log(`Resultado da subtração: ${subtrair(20, 8)}`);
/* FINALIZADO*/


/* EXERCICIO 29
"Função de Multiplicação"
*/
// Cria uma função que multiplica dois números e retorna o resultado.
function multiplicar(a: number, b: number): number {
  return a * b;
}
console.log(`Resultado da multiplicação: ${multiplicar(6, 7)}`);
/* FINALIZADO*/


/* EXERCICIO 30
"Função de Divisão"
*/
// Cria uma função que divide dois números e retorna o resultado, com tratamento para divisão por zero.
function dividir(a: number, b: number): number {
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
function dobro(n: number): number {
  return n * 2;
}
console.log(`Dobro de 12 = ${dobro(12)}`);
/* FINALIZADO*/


/* EXERCICIO 32
"Função Par ou Ímpar"
*/
// Cria uma função que verifica se um número é par ou ímpar.
function parOuImpar(n: number): string {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
console.log(`7 é ${parOuImpar(7)}`);
/* FINALIZADO*/


/* EXERCICIO 33
"Função Média de Notas"
*/
// Cria uma função que calcula a média de três notas.
function media(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}
console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);
/* FINALIZADO*/


/* EXERCICIO 34
"Função Aprovação"
*/
// Cria uma função que verifica a aprovação de um aluno com base em nota e faltas.
function verificarAprovacao(nota: number, faltas: number): string {
  if (nota >= 7 && faltas <= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log(verificarAprovacao(8, 5));
/* FINALIZADO*/


/* EXERCICIO 35
"Função Fatorial"
*/
// Cria uma função que calcula o fatorial de um número.
function fatorial(n: number): number {
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
function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}
console.log(`Juros simples -> VF: R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);
/* FINALIZADO*/


/* EXERCICIO 37
"Função Juros Compostos"
*/
// Cria uma função para calcular o montante em juros compostos.
function jurosCompostos(capital: number, taxa: number, tempo: number): number {
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
function celsiusParaFahrenheit(c: number): number {
  return c * 1.8 + 32;
}
console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);
/* FINALIZADO*/


/* EXERCICIO 39
"Função Calculadora"
*/
// Cria uma função que executa operações matemáticas básicas com base em um operador.
function calculadora(a: number, b: number, op: string): number {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
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
function conceito(nota: number): string {
  if (nota >= 90) return "A";
  else if (nota >= 80) return "B";
  else if (nota >= 70) return "C";
  else if (nota >= 60) return "D";
  else return "F";
}
console.log(`Nota 95 -> Conceito ${conceito(95)}`);
/* FINALIZADO*/

/* EXERCICIO 41
"Tabuada de For"
*/
// Exibe a tabuada de um número de 1 a 10 usando um loop `for`.
let baseFor: number = 7;
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
let valoresFor: number[] = [10, 20, 30, 40, 50];
let totalFor: number = 0;
for (let i = 0; i < valoresFor.length; i++) {
  totalFor += valoresFor[i];
}
console.log(`Total = ${totalFor}`);
/* FINALIZADO*/


/* EXERCICIO 44
"Maior Valor do Array com For"
*/
// Encontra o maior valor em um array de números usando um loop `for`.
let numsFor: number[] = [5, 12, 3, 27, 9, 27, 1];
let maiorFor: number = numsFor[0];
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
let listaFor: string[] = ["sql", "ts", "js", "python", "go"];
let alvoFor: string = "python";
let encontradoFor: boolean = false;
let posFor: number = -1;
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
let textoFor: string = "TypeScript";
let invertidoFor: string = "";
for (let i = textoFor.length - 1; i >= 0; i--) {
  invertidoFor += textoFor[i];
}
console.log(`Original: ${textoFor}`);
console.log(`Invertido: ${invertidoFor}`);
/* FINALIZADO*/

/* LAB 1
"Conceitos de variáveis, tipos, arrays, tuplas, objetos e funções"
*/
// 1) Variáveis simples + inferência
// Demonstração de inferência de tipos em variáveis simples.
const nomeAluno = 'Ana';
let nota1 = 8.5;
let nota2 = 7;
let aprovado = true;
console.log('1) Variáveis:', { nomeAluno, nota1, nota2, aprovado });

// 2) Tipos explícitos + função tipada (média)
// Cria uma função com tipos explícitos para calcular a média.
function Media(a: number, b: number): number {
  return Number(((a + b) / 2).toFixed(2));
}
const mediaAna = Media(nota1, nota2);
console.log('2) Média de Ana:', mediaAna);

// 3) Array tipado + map/filter
// Filtra notas acima de 8 e ajusta notas adicionando 0.5 usando `map`.
const notas: number[] = [6, 7.5, 8, 9.2, 10];
const acimaDe8 = notas.filter(n => n >= 8);
const mediasAjustadas = notas.map(n => Math.min(n + 0.5, 10));
console.log('3) Arrays:', { acimaDe8, mediasAjustadas });

// 4) Tupla (nome, média) + ordenação
// Define e exibe uma tupla para registrar o nome e a média de um aluno.
const registro: [string, number] = ['Edu', Media(9, 8.5)];
console.log('4) Tupla (nome, média):', registro);

// 5) Type/Interface + lista de alunos
// Define uma interface para Aluno e calcula a média de uma lista de alunos.
type Aluno = { id: string; nome: string; notas: number[] };
const alunos: Aluno[] = [
  { id: 'a1', nome: 'Ana',  notas: [8, 7.5, 9] },
  { id: 'a2', nome: 'Bia',  notas: [6, 6.5, 7] },
  { id: 'a3', nome: 'Cris', notas: [9.5, 8.5, 10] },
];
function mediaAluno(a: Aluno): number {
  const soma = a.notas.reduce((acc, n) => acc + n, 0);
  return Number((soma / a.notas.length).toFixed(2));
}
console.log('5) Médias:', alunos.map(a => ({ nome: a.nome, media: mediaAluno(a) })));

// 6) União de tipos + narrowing
// Demonstra o uso de união de tipos (`number` | `string`) e `narrowing` para formatar um ID.
type Id = number | string;
function formatarId(id: Id): string {
  return typeof id === 'number' ? id.toString().padStart(3, '0') : id.toUpperCase();
}
console.log('6) União:', formatarId(7), formatarId('a3'));

// 7) Enum de status + classificação por média
// Usa um `enum` para classificar o status de aprovação de alunos com base na média.
enum StatusAluno { Aprovado = 'APROVADO', Recuperacao = 'RECUPERAÇÃO', Reprovado = 'REPROVADO' }
function statusPorMedia(m: number): StatusAluno {
  if (m >= 7) return StatusAluno.Aprovado;
  if (m >= 5) return StatusAluno.Recuperacao;
  return StatusAluno.Reprovado;
}
console.log('7) Status:', alunos.map(a => ({ nome: a.nome, status: statusPorMedia(mediaAluno(a)) })));

// 8) Map (nome → média)
// Cria e exibe um `Map` para associar nomes de alunos às suas respectivas médias.
const mediasPorNome = new Map<string, number>();
for (const a of alunos) mediasPorNome.set(a.nome, mediaAluno(a));
console.log('8) Map (nome→média):', Array.from(mediasPorNome.entries()));
/* FINALIZADO*/


/* LAB 2
"Conceitos de literais, união, enum, objetos, arrays, Map e funções"
*/
// 1) Literais + união
// Define tipos literais e de união para criar um objeto `Veiculo`.
type Tipo = 'carro' | 'moto' | 'caminhao';
type Placa = string;
interface Veiculo {
  placa: Placa;
  tipo: Tipo;
  ano: number;
  fabricante: string;
  cor: string;
}
const v1: Veiculo = { placa: 'ABC1D23', tipo: 'carro', ano: 2020, fabricante: 'Chevrolet', cor: 'preto' };
console.log('1) Veículo:', v1);

// 2) Lista + filtros + mapeamentos
// Demonstra `filter` e `map` para manipular uma lista de veículos.
const frota: Veiculo[] = [
  v1,
  { placa: 'XYZ9K88', tipo: 'moto', ano: 2018, fabricante: 'Honda', cor: 'vermelho' },
  { placa: 'JKL2M34', tipo: 'caminhao', ano: 2022, fabricante: 'Volvo', cor: 'branco' },
];
const soCarros = frota.filter(v => v.tipo === 'carro');
const anos = frota.map(v => v.ano);
console.log('2) Filtros/Map:', { soCarros, anos });

// 3) Enum + helpers
// Usa um `enum` para padronizar cores e uma função auxiliar para "pintar" veículos.
enum CorPadrao { Preto = 'preto', Branco = 'branco', Vermelho = 'vermelho' }
function pintar(v: Veiculo, cor: CorPadrao): Veiculo {
  return { ...v, cor };
}
console.log('3) Pintando veículo:', pintar(v1, CorPadrao.Branco));

// 4) Função utilitária: normalizar placa
// Cria uma função que normaliza uma placa de veículo, removendo caracteres especiais.
function normalizarPlaca(p: string): Placa {
  return p.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}
console.log('4) Placa normalizada:', normalizarPlaca('abc-1d23'));

// 5) Map por tipo (agrupamento)
// Agrupa veículos por tipo usando um `Map`.
const porTipo = new Map<Tipo, Veiculo[]>();
for (const v of frota) {
  const arr = porTipo.get(v.tipo) ?? [];
  arr.push(v);
  porTipo.set(v.tipo, arr);
}
console.log('5) Agrupados por tipo:', Array.from(porTipo.entries()));
/* FINALIZADO*/


/* LAB 3
"Conceitos de arrays numéricos, objetos, funções, enum, narrowing e média móvel"
*/
// 1) Leituras simples + média
// Calcula a média de um array de leituras de temperatura.
const leiturasC: number[] = [22.5, 23.1, 24.0, 25.2, 26.5];
const mediaTemp = Number((leiturasC.reduce((a, b) => a + b, 0) / leiturasC.length).toFixed(2));
console.log('1) Média (°C):', mediaTemp);

// 2) Objeto de leitura + conversão C↔F
// Define um objeto para uma leitura de temperatura e uma função para converter Celsius para Fahrenheit.
type Leitura = { timestamp: string; tempC: number };
function cToF(c: number): number { return Number((c * 9/5 + 32).toFixed(2)); }
const l1: Leitura = { timestamp: new Date().toISOString(), tempC: 25.3 };
console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC));

// 3) Enum de alerta + função de status
// Usa um `enum` para classificar leituras de temperatura em status (Ok, Atenção, Crítico).
enum Alerta { Ok = 'OK', Atenção = 'ATENCAO', Crítico = 'CRITICO' }
function classificar(tC: number): Alerta {
  if (tC >= 28) return Alerta.Crítico;
  if (tC >= 25) return Alerta.Atenção;
  return Alerta.Ok;
}
console.log('3) Status:', leiturasC.map(t => ({ t, status: classificar(t) })));

// 4) Moving Average (média móvel simples) com janela N
// Calcula a média móvel de um conjunto de valores com uma janela definida.
function mediaMovel(valores: number[], janela: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < valores.length; i++) {
    const ini = Math.max(0, i - janela + 1);
    const slice = valores.slice(ini, i + 1);
    out.push(Number((slice.reduce((a, b) => a + b, 0) / slice.length).toFixed(2)));
  }
  return out;
}
console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3));

// 5) União de unidade + narrowing
// Demonstra a união de tipos para unidades de temperatura e usa `narrowing` para formatar o resultado.
type Unidade = 'C' | 'F';
function formatTemp(valor: number, unidade: Unidade): string {
  if (unidade === 'C') return `${valor.toFixed(1)} °C`;
  return `${valor.toFixed(1)} °F`;
}
console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F'));
/* FINALIZADO*/
