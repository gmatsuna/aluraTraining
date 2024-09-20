/* Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores. */

let globalVar = "I'm a global variable";

if (1 > 0) {
    let padVar = "I'm a pad variable";

    console.log(globalVar); // I'm a global variable
    console.log(padVar); // I'm a pad variable
}

console.log(globalVar); // I'm a global variable
// console.log(padVar); - vai dar erro porque ele e uma variavel de bloco, so vai funcionar dentro do if
