// cria referencia aos elementos da pagina que serao manipulados 
//pelo programa .js

const preco = document.querySelector("#preco")
const frm = document.querySelector("form")
const foto = document.querySelector("#foto")

let valor = 65900

//adiciona um "ouvinte" de evento para o clique no inputradio do KA
frm.ka.addEventListener("click", () => {
    // altera o conteúdo desse elemento
    valor = 70000
    formataValor()
    foto.src = "ka.png"
    //desmarca os opcionais
    frm.alarme.checked = false
    frm.vidros.checked = false
})

//adiciona um "ouvinte" de evento para o clique no inputradio do KA
frm.fiesta.addEventListener("click", () => {
    // altera o conteúdo desse elemento
    valor = 65900
    formataValor()
    foto.src = "fiesta.png"
    //desmarca os opcionais
    frm.alarme.checked = false
    frm.vidros.checked = false
})

//adiciona um "ouvinte" de evento para o clique no inputradio do KA
frm.eco.addEventListener("click", () => {
    // altera o conteúdo desse elemento
    valor = 80000
    formataValor()
    foto.src = "eco.png"
    //desmarca os opcionais
    frm.alarme.checked = false
    frm.vidros.checked = false
})

frm.alarme.addEventListener("click", () => {
    if (frm.alarme.checked) {
        valor = valor + 1200
    } else {
        valor = valor - 1200
    }
    formataValor()
})

frm.vidros.addEventListener("click", () => {
    if (frm.vidros.checked) {
        valor = valor + 2000
    } else {
        valor = valor - 2000
    }
    formataValor()
})

function formataValor() {
    preco.innerText = valor.toLocaleString("pt-br", { minimumFractionDigits: 2 })
}

