//Desafio complementario: Interactuar con HTML//

//Cambiando titulo//

let encabezado = document.getElementById("identificador")
console.log (encabezado.innerText)

encabezado.innerText = "Bienvenido a Newells Fan"
console.log (encabezado.innerText)


//Generando nuevos nodos//

let casacas = document.getElementById("casacas")
casacas.innerHTML = "<h3>Las Casacas Rojinegras</h3>"
casacas.className = "tiendaoficial"

//Creando elementos//

let contenido = document.createElement("div")

contenido.innerHTML = "<h4>© Todos los derechos reservados 2021-22</h4>"
contenido.className = "elpie"

document.body.append(contenido)




