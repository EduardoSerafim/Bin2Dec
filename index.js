function bin2dec(bin) {
    var decimal = 0;
    for (var i = bin.length - 1; i >= 0; i--) {
        decimal += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
    }
    return decimal;
}

binInput = document.querySelector('.binInput').value
conversao = document.querySelector('.conversao')
botao = document.querySelector('.botao')

botao.addEventListener('click', (event) => {
        event.preventDefault()
        binInput = document.querySelector('.binInput').value
        let validNum = true
        for (let index = 0; index < binInput.length; index++) {
            if (binInput.charAt(index) != '1' && binInput.charAt(index) != '0') {
                validNum = false
                break
            }
        }
        if (validNum == false) {    
            conversao.innerHTML = ''
            alert('apenas 0 ou 1 é válido')
        } else {
            base = '10'
            conversao.innerHTML = `(${binInput})${'2'.sub()} = (${bin2dec(binInput)})${'10'.sub()}` // output --- (bin)2 = (dec)10  --- 2 e 10 vão estar subscritos
        }

    }

)