
// Criar um programa que calcula a média das turmas de students e envia mensagem do cálculo da média

const classA = [
  {
    name: "Yone",
    grade: 1.8
  },

  {
    name: "Suzanna",
    grade: 10
  },

  {
    name: "Billie Jean",
    grade: 2
  }
]

const classB = [
  {
    name: "Clayton",
    grade: 10
  },

  {
    name: "Roberta",
    grade: 10
  },

  {
    name: "Cibele",
    grade: 0
  },
  {
    name: "Novo",
    grade: 5
  },
  {
    name: "Novo1",
    grade: 10
  }
]

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }
  const average = sum / students.length
  return average
}


function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Contratulations`)
  } else {
    console.log(`${turma} average: ${average} is less than 5`)
  }
}


function markAsFlunked(student) {
  student.flunked = false
    if(student.grade < 5) {
      student.flunked = true
  }
}

function sendMessageFlunked(student) {
  if(student.flunked) {
    console.log(`O(A) student(a) ${student.name} is flunked`)
  } 
}

function studentsFlunkeds(students) {
  for(student of students) {
    markAsFlunked(student)
    sendMessageFlunked(student)
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, "Class A")
sendMessage(average2, "Class B")

studentsFlunkeds(classA)
studentsFlunkeds(classB)