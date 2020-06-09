//conteúdo da aula
// const name = "Yone Shinzato"
// console.log(name)
//desafio
// Criar um programa que calcula a média das notas entre os alunos e envia mensagem do cálculo da média
const aluno01 = {
  nome: "Yone",
  nota: 9.8
}

const aluno02 = {
  nome: "Suzanna",
  nota: 10
}

const aluno03 = {
  nome: "Billie Jean",
  nota: 2
}


const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

//se a média for maior que 5, parabenizar a turma
if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns`)
} else {
  console.log('A média é menor que 5')
}

console.log(media)