//função
function tabuada(){
    //variaveis
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    //condições
    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        //transformando n em numeral
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =''
        //condição
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
        
}