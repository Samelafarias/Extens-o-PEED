let lista = [];

function atualizarLista() {
    const listaContainer = document.getElementById("lista");
    const mensagem = document.getElementById("mensagem");

    listaContainer.innerHTML = "";
    lista.forEach(no => {
        const div = document.createElement("div");
        div.classList.add("no");
        div.textContent = `Nó ${no.id}`;
        listaContainer.appendChild(div);
    });

    if (lista.length === 0) {
        mensagem.classList.add("show");
        mensagem.textContent = "A lista está vazia!";
    } else {
        mensagem.classList.remove("show");
        mensagem.textContent = "";
    }
}

function adicionar() {
    const numero = prompt("Digite um número para adicionar à lista:");
    if (numero !== null && numero.trim() !== "") {
        const no = { id: numero.trim() };
        lista.push(no);
        atualizarLista();
    }
}

function remover() {
    if (lista.length > 0) {
        lista.shift(); // Remove o primeiro elemento
        atualizarLista();
    } else {
        atualizarLista();
    }
}
