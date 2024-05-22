function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'fotocriancahomem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovemhomem.jpg')
            } else if (idade < 59) {
                // Adulto
                img.setAttribute('src', 'fotohomemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'fotocriancamulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovemmulher.jpg')
            } else if (idade < 59) {
                // Adulto
                img.setAttribute('src', 'fotomulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}