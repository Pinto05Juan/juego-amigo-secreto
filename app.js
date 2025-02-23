let nombresAmigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let listaResultado = document.getElementById("resultado");


function agregarAmigo() {
    let amigo = document.querySelector("input").value
    if(amigo.trim() === "") {
        alert("Ingrese un nombre, por favor");
    } else {
        nombresAmigos.push(amigo);
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
        amigoEncontrado = nombresAmigos[indiceSecreto];
        setItemText(listaAmigos, "");
        setItemText(listaResultado, `El amigo secreto es ${amigoEncontrado}`);
        terminoJuego = true;
    }
    setTimeout(function() {
        if(terminoJuego) {
            const fondo = document.createElement("div");
            fondo.classList.add("modal-fondo");
                        
            const divGameEnd = document.createElement("div")
            divGameEnd.classList.add("modal-cuadro");
            divGameEnd.innerHTML = `
            <p>¿Desea seguir jugando?</p>
            <button id="btn-si">Sí</button>
            <button id="btn-no">No</button>
            `
            fondo.appendChild(divGameEnd)
            document.body.appendChild(fondo)

            function seguirJugando(opcion) {
                document.body.removeChild(fondo)

                if(opcion) {
                    reiniciarJuego()
                }
            }

            document.getElementById("btn-si").addEventListener("click", function() {
                seguirJugando(true);
            });
    
            document.getElementById("btn-no").addEventListener("click", function() {
                seguirJugando(false);
            });
        }
    }, 1000);
    
}

function reiniciarJuego() {
    nombresAmigos = [];
    setItemText(listaAmigos, "");
    setItemText(listaResultado, "");
}

function setItemText(item, text) {
    item.textContent = text;
}
