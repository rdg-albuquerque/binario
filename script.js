function binario (n) {
    
    let decomposicao = ''
    for (let i = n ; i > 0 ; i = Math.floor(i / 2)) {
        if(i % 2 == 0){
            decomposicao += 0
        }
        else {
            decomposicao += 1
        }
    }
    let binario = ''
    for (let i = decomposicao.length - 1; i >= 0; i--) {
        binario += decomposicao[i]
    }
    console.log(binario)
}

binario(95) // n = Número inteiro qualquer à ser transformado em binário