// 1 - Use o método getElementById para encontrar o elemento <p> e altere o texto para "Olá".

let p = document.getElementById("demo")
p.textContent = 'Olá'
console.log(p)

// 2 - Use o método getElementsByTagName para encontrar o primeiro elemento <p> e altere o texto para "Olá".

let demo = document.getElementByTagName("p")
demo[0].textContent = "Olá"
console.log(demo)

// 3 - Altere o texto do primeiro elemento que possui o nome da classe "test".

let test = document.querySelectorAll(".test")
test[0].textContent = "Quero Ser Dev"
console.log(test)

//4 - Use HTML DOM para alterar o valor do atributo src da imagem.

let imagem = document.querySelector('#image')
imagem.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png')
console.log(imagem)

// 5 - Use HTML DOM para alterar o valor do campo de entrada(value).

let value = document.querySelector('#myText')
value.setAttribute("value", "Quer Ser Dev")

// 6 - Mude a cor do texto do elemento <p> para "vermelho".

let vermelho = document.querySelector('p')
vermelho.style.color = 'red'
console.log(vermelho)

// 7 - Altere o tamanho da fonte do elemento para 40 pixels.

let alturaFonte = document.querySelector('.alteraFonte')
alturaFonte.style.fontSize = '40px'
console.log(alturaFonte)

// 8 - Use a propriedade CSS display para ocultar o elemento.
let p = document.getElementById("demo")
p.style.display = 'none'
console.log(p)