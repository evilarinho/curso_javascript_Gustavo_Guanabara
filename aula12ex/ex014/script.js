function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia 
        img.src = 'amanhecer.jpg'
        document.body.style.background = '#2ecd9f'
    } else if (hora >=12 && hora <= 18) {
        //Boa tarde
        img.src = 'entardecer.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
