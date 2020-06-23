function fatorial(n) {
    let fat = 1
    for (var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

for (i = 2; i <= 171; i++) {
    console.log(`O fatorial de ${i} é ${fatorial(i)}`)
}


