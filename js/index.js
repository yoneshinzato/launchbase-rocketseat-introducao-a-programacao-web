//conteúdo da aula
// const name = "Yone Shinzato"
// console.log(name)
//desafio
// Criar um programa que calcula a média das turmas de alunos e envia mensagem do cálculo da média

const alunosDaTurmaA = [{
    nome: "Yone",
    nota: 1.8
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

const alunosDaTurmaB = [{
    nome: "Clayton",
    nota: 10
  },

  {
    nome: "Roberta",
    nota: 10
  },

  {
    nome: "Cibele",
    nota: 0
  },
  {
    nome: "Novo",
    nota: 5
  },
  {
    nome: "Novo1",
    nota: 10
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length
  return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

//se a média for maior que 5, parabenizar a turma
function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A média da ${turma} é de ${media}. Parabéns`)
  } else {
    console.log(`A média da ${turma} é menor que 5`)
  }
}

// console.log(alunos[0].nome)
enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "turmaB")