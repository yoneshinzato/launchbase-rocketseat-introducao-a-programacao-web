//conteúdo da aula
// const name = "Yone Shinzato"
// console.log(name)
//desafio
// Criar um programa que calcula a média das notas entre os alunos e envia mensagem do cálculo da média

const alunos = [{
    nome: "Yone",
    nota: 9.8
  },

  {
    nome: "Suzanna",
    nota: 10
  },

  {
    nome: "Billie Jean",
    nota: 2
  }
]

const nomesDeAlunos = ["Yone", "Suzanna", "Billie Jean"]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

//se a média for maior que 5, parabenizar a turma
if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns`)
} else {
  console.log('A média é menor que 5')
}

console.log(alunos[0].nome)