class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.head = null;
    }

    adicionar(valor) {
        const novoNo = new Node(valor);
        if (!this.head) {
            this.head = novoNo;
        } else {
            let atual = this.head;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        this.atualizarLista();
    }

    remover() {
        if (!this.head) {
            this.mostrarMensagem("A lista está vazia!");
            return;
        }
        this.head = this.head.proximo;
        this.atualizarLista();
    }

    atualizarLista() {
        const listaContainer = document.getElementById("lista");
        const mensagem = document.getElementById("mensagem");
        listaContainer.innerHTML = "";

        let atual = this.head;
        while (atual) {
            const div = document.createElement("div");
            div.classList.add("lista-item");
            div.textContent = atual.valor;
            listaContainer.appendChild(div);
            atual = atual.proximo;
        }

        if (!this.head) {
            mensagem.classList.add("show");
            mensagem.textContent = "A lista está vazia!";
        } else {
            mensagem.classList.remove("show");
        }
    }

    mostrarMensagem(texto) {
        const mensagem = document.getElementById("mensagem");
        mensagem.classList.add("show");
        mensagem.textContent = texto;
    }
}

const lista = new ListaEncadeada();

function adicionar() {
    const valorInput = document.getElementById("valorInput").value;
    if (valorInput === "") {
        lista.mostrarMensagem("Digite um número!");
        return;
    }
    lista.adicionar(valorInput);
    document.getElementById("valorInput").value = "";
}

function remover() {
    lista.remover();
}
