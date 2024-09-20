/* Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console. */

const nome = "Gilberto";
const sobrenome = "Matsunaga"

const nomeCompleto1 = nome + " " + sobrenome + ".";
const nomeCompleto2 = `${nome} ${sobrenome}.`

console.log(nomeCompleto1);
console.log(nomeCompleto2);