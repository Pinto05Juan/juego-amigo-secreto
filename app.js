let nombresAmigos = [];




function agregarAmigo() {
    let amigo = document.querySelector("input").value
    if(amigo == "") {
        alert("Ingrese un nombre, por favor");
    } else {
        nombresAmigos.push(amigo);
        //console.log(nombresAmigos);
        actualizarLista();
        document.querySelector("input").value = "";
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < nombresAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = nombresAmigos[i];
        document.body.appendChild(itemLista);
    }
}