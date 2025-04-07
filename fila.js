let fila = [];
let contador = 1;

function atualizarFila() {
    const filaContainer = document.getElementById("fila");
    const mensagem = document.getElementById("mensagem");
    
    filaContainer.innerHTML = "";
    fila.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item-fila");

        // Adicionando imagem com ícone de pessoa
        const icon = document.createElement("img");
        icon.src = "imagens/walk.png";
        icon.style.width = "30px";
        icon.style.height = "30px";
        icon.style.marginRight = "5px";
        
        div.appendChild(icon);
        div.appendChild(document.createTextNode(`Pessoa ${item}`));
        filaContainer.appendChild(div);
    });

    // Exibir ou esconder a mensagem personalizada
    if (fila.length === 0) {
        mensagem.classList.add("show");
        mensagem.textContent = "A fila está vazia!";
    } else {
        mensagem.classList.remove("show");
    }
}

function adicionar() {
    fila.push(contador); // Adiciona no final da fila
    contador++;
    atualizarFila();
}

function remover() {
    if (fila.length > 0) {
        fila.shift(); // Remove o primeiro da fila
        atualizarFila();

        // Se a fila estiver vazia, reinicia o contador
        if (fila.length === 0) {
            contador = 1;
        }
    } else {
        atualizarFila();  // Apenas atualiza a fila sem alertar
    }
}
