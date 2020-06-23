let valores = [8,1,7,4,2,9]
console.log(valores)
valores.sort()
console.log(valores)
/*
for (let c = 0; c < valores.length; c++) {
    //console.log(valores[c])
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
*/
for (let c in valores) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
console.log(`O valor 7 encontra-se na posição ${valores.indexOf(7)}`)
