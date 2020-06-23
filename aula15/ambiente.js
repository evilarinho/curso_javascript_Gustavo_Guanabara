let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`) 
num[10] = 10
console.log(num) 
let pos = num.indexOf(11)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
