let peso = parseFloat(prompt("Informe o Seu Peso: "));
let altura = parseFloat(prompt("Informe o Sua Altura: "));

if(isNaN(peso)||isNAN(altura)||peso <= 0||altura <= 0){
    document.write("Por Favor, Informe Valores Váidos");
}

else{
    let imc = (peso/(altura*altura));
    document.write("O Seu IMC é:");

    if(imc >= 18 && imc <= 24,9){
        document.write("PESO IDEAL");
    }
    else if(imc > 24,9 && imc <= 28){
        document.write("PESO NÃO IDEAL");
    }
}