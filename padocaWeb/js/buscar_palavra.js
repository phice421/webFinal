// Função para buscar e exibir uma palavra aleatória
function buscarPalavraAleatoria() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:4000/palavra-aleatoria");
    xhr.addEventListener("load", function(){
        if (xhr.status === 200){
            var resposta = xhr.responseText;

            //CONVERTE A STRING EM OBJETO JS
            var palavra = JSON.parse(resposta).palavra;

            //EXIBE A PALAVRA NA PÁGINA
            document.getElementById('caixa-palavra').innerText = palavra;
        } else {
            console.error("Erro ao buscar palavra, código de status: ", xhr.status);
        }
    });
    xhr.send();
}

// Buscar palavra aleatória inicialmente
buscarPalavraAleatoria();

// Atualiza automaticamente a palavra aleatória a cada 5 segundos
setInterval(buscarPalavraAleatoria, 5000);
