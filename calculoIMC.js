function calculadoraIMC(){
    var altura = (document.getElementById("altura").value)/100;
    var peso = document.getElementById("peso").value;
    
    var imc = peso/(altura*altura);
    var mostrarIMC = "Seu IMC é: " + imc.toFixed(1);

    if(imc<18.5){
        var classificacao = " - Classificação: Magreza";
    } else if(imc>=18.5 && imc<=24.9){
        var classificacao = " - Classificação: Peso Normal";
    }else if(imc>=25.0 && imc<=29.9){
        var classificacao = " - Classificação: Sobrepeso";
    }else if(imc>=30.0 && imc<=39.9){
        var classificacao = " - Classificação: Obesidade";
    }else{
        var classificacao = " - Classificação: Obesidade Grave";
    }
    
    document.getElementById("resultado").innerHTML= mostrarIMC + classificacao;
};

