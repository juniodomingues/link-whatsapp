function criar_frase(){
            
    var telefone = document.getElementById("telefone").value;
    if(telefone ==""){
        alert ("O campo Telefone é obrigtório");
        
    }else{
        var mensagem = document.getElementById("mensagem").value;
        var link_whats = "https://api.whatsapp.com/send?phone=55" + telefone + "&text=" + mensagem;
        link_whats = link_whats.replace(/ /g, "%20")
        document.getElementById("link_whats").innerHTML = "<b>Link Gerado:</b><br> <input id='link_whats1' class='form-control' type'text' value='" + 
        link_whats +"''> <br> <input type='button' class='btn btn-secondary' onclick='copiar()' value='Copiar'>" ;

    }
}
function copiar(){
    
    textArea = document.getElementById("link_whats1").select;
    navigator.clipboard.writeText(textArea.value);
}
function mascaraFone(event) {
    var valor = document.getElementById("telefone").attributes[0].ownerElement['value'];
    var retorno = valor.replace(/\D/g, "");
    retorno = retorno.replace(/^0/, "");
    if (retorno.length > 10) {
    retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length > 5) {
    if (retorno.length == 6 && event.code == "Backspace") { 
        // necessário pois senão o "-" fica sempre voltando ao dar backspace
        return; 
    } 
    retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length > 2) {
    retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
    if (retorno.length != 0) {
        retorno = retorno.replace(/^(\d*)/, "($1");
    }
    }
    document.getElementById("telefone").attributes[0].ownerElement['value'] = retorno;
}

//Copiar e colar