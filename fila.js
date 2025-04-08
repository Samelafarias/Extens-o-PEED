let fila = [];
let contador = 1;

function atualizarFila() {
    const filaContainer = document.getElementById("fila");
    const mensagem = document.getElementById("mensagem");

    filaContainer.innerHTML = "";
    fila.forEach(pessoa => {
        const img = document.createElement("img");
        img.src = pessoa.imagem;
        img.classList.add("pessoa-fila");
        filaContainer.appendChild(img);
    });

    if (fila.length === 0) {
        mensagem.classList.add("show");
        mensagem.textContent = "A fila está vazia!";
    } else {
        mensagem.classList.remove("show");
    }
}

function adicionar() {
    // escolhe um número aleatório de 1 a 8
    const numImagem = Math.floor(Math.random() * 8) + 1;
    const pessoa = {
        id: contador,
        imagem: `imagens/walk${numImagem}.png`
    };

    fila.push(pessoa);
    contador++;
    atualizarFila();
}

function remover() {
    if (fila.length > 0) {
        fila.shift(); // remove o primeiro elemento da fila
        atualizarFila();

        // se a fila estiver vazia, reinicia o contador
        if (fila.length === 0) {
            contador = 1;
        }
    } else {
        atualizarFila(); 
    }
}
