function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pula')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pula.value.length == 0) {
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pula.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }  
        if (i < f) {
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for(let c = i; c>= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`

    }
}