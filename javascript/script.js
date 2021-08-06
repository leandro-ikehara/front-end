// 1 - Use o método getElementById para encontrar o elemento <p> e altere o texto para "Olá".

// let p = document.getElementById("demo")
// p.textContent = 'Olá'
// console.log(p)

// 2 - Use o método getElementsByTagName para encontrar o primeiro elemento <p> e altere o texto para "Olá".

// let demo = document.getElementsByTagName("p")
// demo[0].textContent = "Olá"
// demo.item.name = "Olá"
// console.log(demo)

// 3 - Altere o texto do primeiro elemento que possui o nome da classe "test".

// let test = document.querySelector(".test")
// test.textContent = "Quero Ser Dev"

//4 - Use HTML DOM para alterar o valor do atributo src da imagem.
// let imagem = src.getAttribute("src")
// console.log(imagem)

// 5 - Use HTML DOM para alterar o valor do campo de entrada(value).

let value = document.getElementById('myText')
value.setAttribute("value", "Quer Ser Dev")

// 6 - Mude a cor do texto do elemento <p> para "vermelho".

let vermelho = document.querySelector('p')
vermelho.style.color = 'red'
console.log(vermelho)

// 7 - Altere o tamanho da fonte do elemento para 40 pixels.

let alturaFonte = document.querySelector('.alteraFonte')
alturaFonte.style.size = '40px'
console.log(alturaFonte)
