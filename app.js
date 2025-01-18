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
    if(nombresAmigos.length == 0) {
        alert("Todavia no hay amigos para sortear. Escriba el nombre de alguno");
    } else {
        let indiceSecreto = Math.floor(Math.random() * nombresAmigos.length);
        console.log(indiceSecreto);
        amigoEncontrado = nombresAmigos[indiceSecreto];
        setItemText(listaAmigos, "");
        setItemText(listaResultado, `El amigo secreto es ${amigoEncontrado}`);
    }
}

function setItemText(lista, text) {
    lista.innerHTML = text;
}