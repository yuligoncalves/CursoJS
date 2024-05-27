let num = document.getElementById('txtnum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function inumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function ilista(n, 1) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (inumero(num.value) && !ilista(num.value, valores)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}