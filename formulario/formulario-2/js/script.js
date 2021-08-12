/* // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }  
          form.classList.add('was-validated')
        }, false)
      })
  })() */


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

let regexCnpjCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/
let inputCnpjCpf = document.querySelector('#inputCpf')
let msgCnpjCpf = document.querySelector('.msg-cpf')

inputCpf.addEventListener('blur', function(){
    let resultadoValidacao = regexCnpjCpf.test(inputCnpjCpf.value)
    if(resultadoValidacao){
        msgCnpjCpf.style.display = 'none'
    }else{
        msgCnpjCpf.style.display = 'block'
    }
})