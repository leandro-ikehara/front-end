let cumprimentar = document.querySelector(".cumprimentar")
cumprimentar.onclick = function(){
    alert("Olá")
}

let alteraFundo = document.getElementById("body")
alteraFundo.onclick = function(){
    alteraFundo.style.backgroundColor = 'darkgreen'
}

let image = document.querySelector("#image")
image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/pt/a/ab/Metal_Gear_Solid_4_Guns_of_The_Patriot_-_North-american_cover.jpg')

image.addEventListener('click', function(event){
    console.log("Estou vendo a imagem")
    alert("Exclusivo para Playstation")
})


