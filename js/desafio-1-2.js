// Construção e impressão de objetos
// 1-Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// Endereço:
// Rua: Rua Guilherme Gembala
// Número: 260

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
}

// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// 2-Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.



const programadores = [{
    nome: "João",
    idade: 37,
    tecnologias: ["Python, Ruby, JavaScript"]
  },
  {
    nome: "Rebecca",
    idade: 28,
    tecnologias: ["Java, Lua, Cobol"]
  },
  {
    nome: "Aretusa",
    idade: 32,
    tecnologias: ["Go, C++, Delphi"]
  }
]

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`A usuária ${programadores[1].nome} tem ${programadores[1].idade} e é especialista nas tecnologias ${programadores[1].tecnologias}`)