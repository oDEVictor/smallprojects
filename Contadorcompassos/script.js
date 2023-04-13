function contar() {
    let ini = document.querySelector('#txti') // recebe e armazena o valor do input
    let fim = document.querySelector('#txtf') // recebe e armazena o valor do input
    let passo = document.getElementById('txtp') // recebe e armazena o valor do input
    let res = document.getElementById('res') // recebe e armazena o valor do input

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Se faltar dados no input erro
        res.innerHTML = 'Impossível contar'
       // window.alert('[ERRO] Faltam dados')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //se passo = 0 da erro!
        if ( p <= 0){
            window.alert ('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if ( i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{27A1}`
            }
            
        } else {
            for (let c = i; c >= f ; c -= p) {
                //contagem regressiva
                res.innerHTML += `${c} \u{27A1}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}