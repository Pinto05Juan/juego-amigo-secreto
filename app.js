let nombresAmigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let listaResultado = document.getElementById("resultado");


function agregarAmigo() {
    let amigo = document.querySelector("input").value
    if(amigo == "") {
        alert("Ingrese un nombre, por favor");
    } else {
        nombresAmigos.push(amigo);
        console.log(nombresAmigos);
        actualizarLista();
        document.querySelector("input").value = "";
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = "";
    for(let i = 0; i < nombresAmigos.length; i++) {
        let itemLista = document.createElement("li");
        setItemText(itemLista, nombresAmigos[i]);
        listaAmigos.appendChild(itemLista);
    }             
}

function sortearAmigo() {
    let amigoEncontrado = "";
    let terminoJuego = false;
    if(nombresAmigos.length == 0) {
        alert("Todavia no hay amigos para sortear. Escriba el nombre de alguno");
    } else {
        let indiceSecreto = Math.floor(Math.random() * nombresAmigos.length);
        console.log(indiceSecreto);
        amigoEncontrado = nombresAmigos[indiceSecreto];
        setItemText(listaAmigos, "");
        setItemText(listaResultado, `El amigo secreto es ${amigoEncontrado}`);
        terminoJuego = true;
    }
    setTimeout(function() {
        if(terminoJuego) {
            let opcion = prompt("Desea Seguir Jugando?");
            opcion = opcion.toLowerCase();
            if(opcion === "si") {
                reiniciarJuego();
            }
        }
    }, 1000);
    
}

function reiniciarJuego() {
    nombresAmigos = [];
    setItemText(listaAmigos, "");
    setItemText(listaResultado, "");
}

function setItemText(lista, text) {
    lista.textContent = text;
}
