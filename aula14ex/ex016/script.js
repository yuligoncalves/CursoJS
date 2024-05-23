function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pula')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pula.value.length == 0) {
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = `Contando:`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pula.value)
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{IF449}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{IF449}`
            }
        }
       
    }
}