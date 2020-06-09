// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

//   Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
  
//   Carlos trabalha com HTML, CSS
//   Jarmine trabalha com JavaScript, CSS
//   Tuane trabalha com HTML, Node.js

for(let usuario = 0; usuario < usuarios.length; usuario++){
    console.log(`${usuarios[usuario].nome} trabalha com ${usuarios[usuario].tecnologias}`)
}

// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    for(let i = 0; i < usuarios.length; i++){
        
        for(let tec = 0; tec < usuarios[i].tecnologias.length; tec++){
            
            if(usuarios[i].tecnologias.includes("CSS")){
                console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
            } else {
                console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`)
            }
        }

    }
    // SE encontrar, retorne true da função, caso contrário retorne false
    
}
 
checaSeUsuarioUsaCSS()

// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de clientes e no fim retorna o saldo (receitas - despesas).
// Utilize o array de clientes abaixo:
const clientes = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

//   Percorra o array de clientes e para cada cliente chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do cliente:

function calculaSaldo(receitas, despesas) {

}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
//   // Soma todos números dentro do array "numeros"
}
// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// No fim exiba todos clientes em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3