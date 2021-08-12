let mostrarPremio = document.querySelector("premio")
function mostrarPremio(posicao){
    if mostrarPremio <= 0 && mostrarPremio > 3 {
        console.log("Sem prêmio")
    }
    else {
        console.log("Prêmio")
    }
}
mostrarPremio()