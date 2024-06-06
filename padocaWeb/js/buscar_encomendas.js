var botaoBuscar = document.querySelector("#buscar-encomendas");
botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/encomendas_web");
    xhr.addEventListener("load", function(){
        if (xhr.status === 200){
            var resposta = xhr.responseText;

            //CONVERTE A STRING EM OBJETO JS
            var encomendas = JSON.parse(resposta);

            //INSERE AS ENCOMENDAS NA TABELA
            encomendas.forEach(function(encomenda){
                adicionarEncomenda(encomenda);
            });
        } else {
            console.error("Erro ao buscar encomendas, código de status: ", xhr.status);
        }
    });
    xhr.send();
});
