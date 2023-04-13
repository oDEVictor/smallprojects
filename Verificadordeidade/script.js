function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') // [0] Masculino , [1] Feminino
        var idade = ano - Number(fano.value) // Number convertendo string do input em numero
                                            // res.innerHTML = `Idade calculada: ${idade}`   Teste
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','bebemasc.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovemmasc.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adultomasc.png')
            } else {
                //idoso
                img.setAttribute('src','idosomasc.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebefem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultafem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosafem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }    
}