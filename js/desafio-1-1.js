//Cálculo de IMC
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
const nome = "Carlos"
const peso = 84
const altura = 1.88
const imc = peso / (altura * altura)

if (imc >= 30) {
  console.log(`${nome}, você está acima do peso`)
} else {
  console.log(`${nome}, você não está acima do peso!`)
}

//Cálculo de aposentadoria
//Crie um programa para calcular a aposentadoria de uma pessoa.
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
const name = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23
let soma = idade + contribuicao
if (sexo === "F") {
  if (contribuicao >= 30 && soma >= 85) {
    console.log(`${name}, você pode se aposentar!`)
  } else {
    console.log(`${name} você ainda não pode se aposentar!`)
  }
}