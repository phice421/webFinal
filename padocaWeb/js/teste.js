var titulo = document.querySelector(".titulo-ganja");
titulo.textContent = "Lista de Encomendas";
/*
document.querySelector(".total1").textContent =
    document.querySelector(".valor-unitario1").textContent *
    document.querySelector(".quantidade1").textContent;

document.querySelector(".total2").textContent =
    document.querySelector(".valor-unitario2").textContent *
    document.querySelector(".quantidade2").textContent;

document.querySelector(".total3").textContent =
    document.querySelector(".valor-unitario3").textContent *
    document.querySelector(".quantidade3").textContent;

document.querySelector(".total4").textContent =
    document.querySelector(".valor-unitario4").textContent *
    document.querySelector(".quantidade4").textContent;

document.querySelector(".total5").textContent =
    document.querySelector(".valor-unitario5").textContent *
    document.querySelector(".quantidade5").textContent;

    */
    // Função para formatar um número como R$
function formatarParaReal(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

/**********************************************************************************************************/
/*                                 OUTRO MODO DE MULTIPLICAR OS VALORES                                   */
/**********************************************************************************************************/

//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for (var count=0; count < clientes.lenght; count++){

    //captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".quantidade").textContent;

    //captura o valor unitário do produto
    var unitario = clientes[count].querySelector(".valor-unitario").textContent;

    //Calcula o valor total da encomenda
    clientes[count].querySelector(".total").textContent = qtde * unitario;
}