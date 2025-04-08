let pilha = [];
        let contadorID = 1;

        function atualizarPilha() {
            const container = document.getElementById("pilhaContainer");
            container.innerHTML = "";

            if (pilha.length === 0) {
                const vazio = document.createElement("p");
                vazio.textContent = "A pilha está vazia!";
                vazio.classList.add("vazio");
                container.appendChild(vazio);
                return;
            }

            for (let i = pilha.length - 1; i >= 0; i--) {
                const img = document.createElement("img");
                img.src = "./imagens/e-book.png"; 
                img.alt = pilha[i].titulo;
                img.title = `Livro ${pilha[i].id}: ${pilha[i].titulo}`;
                img.classList.add("livro-img");
                container.appendChild(img);
            }
        }

        function adicionarLivro() {
            const tituloInput = document.getElementById("tituloLivro");
            const titulo = tituloInput.value.trim();

            if (titulo === "") {
                alert("Digite um título válido!");
                return;
            }

            const livro = {
                id: contadorID++,
                titulo: titulo
            };

            pilha.push(livro);
            tituloInput.value = "";
            atualizarPilha();
        }

        function removerLivro() {
            if (pilha.length === 0) {
                alert("A pilha já está vazia!");
                return;
            }

            const removido = pilha.pop();
            alert(`Livro removido: "${removido.titulo}"`);
            atualizarPilha();
        }

        atualizarPilha(); 