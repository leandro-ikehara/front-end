let regexNome = /[A-Z][a-z]* [A-Z][a-z]*/
let inputNome = document.querySelector('#inputNome')
let msgNome = document.querySelector('.msg-nome')

inputNome.addEventListener('blur', function(){
    let validaNome = regexNome.test(inputNome.value)
    if(validaNome){
        msgNome.style.display = 'none'
    }else{
        msgNome.style.display = 'block'
    }
})

let regexCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/
let inputCpf = document.querySelector('#inputCpf')
let msgCpf = document.querySelector('.msg-cpf')

inputCpf.addEventListener('blur', function(){
    let validaCpf = regexjCpf.test(inputjCpf.value)
    if(validaCpf){
        msgCpf.style.display = 'none'
    }else{
        msgCpf.style.display = 'block'
    }
})