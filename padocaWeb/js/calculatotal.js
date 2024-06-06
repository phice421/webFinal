//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for(var count=0; count < clientes.length; count++){
    

    //Captura a quantidade encomendada
    var qtde = parseFloat(clientes[count].querySelector(".quantidade").textContent);
    var uni = parseFloat(clientes[count].querySelector(".valor-unitario").textContent);

    
    

    if (uni < 1 || isNaN(uni)) {
    clientes[count].style.backgroundColor = "red";
    clientes[count].querySelector(".total").textContent = "--";
            

    } else if (qtde < 1 || isNaN(qtde)) {

    
    clientes[count].querySelector(".total").textContent = "--";
    clientes[count].querySelector(".quantidade").textContent = "QTDE INVÁLIDA!";
     clientes[count].querySelector(".quantidade").style.color = "red";
        
    } else {
    
    clientes[count].querySelector(".total").textContent = formataValor(calculaTotal(qtde, uni));
    clientes[count].querySelector(".valor-unitario").textContent = formataValor(uni);
    
    }
    

} 



//função para calcular o valor total da encomenda
function calculaTotal(qtde, uni){
    var total = 0;
    total=qtde*uni;
    return total;
}

function formataValor(x){
    var ftotal = x;
    x = ftotal.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
    parseFloat(x);
    return x;
}



