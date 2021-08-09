// Adicionar um botão ao html com a legenda “Cumprimentar” que, ao ser clicado (onclick) mostre um alerta que diga “olá”.

let cumprimentar = document.querySelector(".cumprimentar")
cumprimentar.onclick = function(){
    alert("Olá")
}

// Adicionar outro botão ao html com a legenda “Alterar Fundo” que, quando clicado (onclick) troque a cor do fundo do body para verde.
let alteraFundo = document.getElementById("body")
alteraFundo.onclick = function(){
    alteraFundo.style.backgroundColor = 'darkgreen'
}

// Adicionar à página uma imagem que, ao passar do mouse em cima dela, imprima na linha de comando (“estou vendo a imagem”)
let image = document.querySelector("#image")
image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/pt/a/ab/Metal_Gear_Solid_4_Guns_of_The_Patriot_-_North-american_cover.jpg')
image.addEventListener('mouseover', function(){
    console.log("Estou vendo a imagem")
})


let image2 = document.querySelector("#image2")
image2.setAttribute('src', 'https://www.pdvg.it/wp-content/uploads/2019/09/Only-On-PlayStation-PDV-1.jpg')
image2.addEventListener('click', function(){
    console.log("Estou clicando na imagem")
})

// Definir um addEventListener de forma que, quando o usuário clicar em qualquer parte do body da página, a cor de fundo do body todo mude para vermelho. Para isso, usar o this da função do evento.

let alteraBody = document.querySelector("body")
alteraBody.onclick = function(){
    this.style.backgroundColor = 'red'
}

let alteraBody = document.querySelector("body")
alteraBody.removeEventListener('click', function(){
    return this.alteraBody
})

setTimeout(function(){
    alert("Tempo esgotado"); 
}, 10000);


