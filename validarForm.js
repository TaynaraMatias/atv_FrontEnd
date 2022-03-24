/*function mascaraCPF(){
    var cpf = document.getElementById('cpf');
    if(cpf.value.length == 3||cpf.value.length == 7){
        cpf.value += "."
    }else if(cpf.value.length==11){
        cpf.value += "-"
    }
}*/

function mascaraCEP(){
    var cep = document.getElementById('cep');
    if(cep.value.length == 5){
      cep.value += "-"
    }
}

var cpf = document.getElementById('cpf');


function mascaraCPF(mascara, input){
    const vetMask = mascara.split("")

    const numCpf = input.value.replace(/\D/g, "")
    const cursor = input.selectionStart
    const tecla = (window.event) ? event.keyCode: event.which
    
    for(let i=0; i<numCpf.length; i++){
        vetMask.splice(vetMask.indexOf("#"), 1, numCpf[i])
    }

    input.value=vetMask.join("")


    if(tecla!=37 && (cursor==3||cursor==7||cursor==11)){
        input.setSelectionRange(cursor+1, cursor+1)

    }else{
        input.setSelectionRange(cursor, cursor)
    }
}


function limparForm() {
    document.getElementsByClassName('form').reset();
}

function enviarForm(){
    var validaCpf=document.getElementById('cpf').value;
    var inputCpf=document.getElementById('cpf');
    if(validarCPF(validaCpf)){
        alert("cpf válido!");

        inputCpf.classList.remove("invalido");
    }else{
        alert("cpf inválido!");
        inputCpf.classList.add("invalido");
    }
}
function validarCPF(cpf) {  
    cpf = cpf.replace(/[^\d]+/g,'');    
    if(cpf == '') return false; 
    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
            return false;       
    // Valida 1o digito 
    add = 0;    
    for (i=0; i < 9; i ++)      
        add += parseInt(cpf.charAt(i)) * (10 - i);  
        rev = 11 - (add % 11);  
        if (rev == 10 || rev == 11)     
            rev = 0;    
        if (rev != parseInt(cpf.charAt(9)))     
            return false;       
    // Valida 2o digito 
    add = 0;    
    for (i = 0; i < 10; i ++)       
        add += parseInt(cpf.charAt(i)) * (11 - i);  
    rev = 11 - (add % 11);  
    if (rev == 10 || rev == 11) 
        rev = 0;    
    if (rev != parseInt(cpf.charAt(10)))
        return false;       
    return true;   
}
