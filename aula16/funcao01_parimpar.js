function parimpar(n) {
    if (n%2 == 0) {
        return 'Par !'     
    } else {
        return 'Impar !'
    }       
}

x=20
console.log(`O ${x} é ${parimpar(x)}`)