var campoFiltro = document.querySelector("#filtra-tabela");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".cliente");


    //VERIFICA SE HÁ UM TERMO DE BUSCA
if(this.value.length > 0)
    for(var cli=0; cli < clientes.length; cli++){
        var nome = clientes[cli].querySelector(".nome-cliente").textContent;

        var expressao = new RegExp(this.value, "i");

        //VERIFICA OS CLIENTES PARA FILTRAR A TABELA
        /* if(nome != this.value) { */
        if(!expressao.test(nome)){
            clientes[cli].classList.add("invisivel");
        } else {
            clientes[cli].classList.remove("invisivel");
        }
   
    } else {
        for(var cli=0; cli < clientes.length; cli++){
            clientes[cli].classList.remove("invisivel");
        }
    }
})