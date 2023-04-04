let Calcular = document.getElementById("btnCalcular");


function CalcIMC(){

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;
    let resultado = document.getElementById("resultado");

    //condição

    if(altura != "" && peso !="")
    {
        let imc =(peso / (altura*2)).toFixed(2);
        let mensagem="";

        if(imc  < 18.5){
            mensagem="Você está magro";
        }
        else if(imc < 25){
            mensagem="Você está com o peso ideal";
        }
        else if(imc >35){
            mensagem="Cuidado, você está igual a Thais Carla";
        }
        else{
            mensagem ="Vá para academia"
        }
        resultado.textContent = `Caro Amigo(a) seu IMC é ${imc}! ${mensagem}`;    
    }      
    else
    {
        resultado.textContent ="Preencha todos os campos"
    }   
}
Calcular.addEventListener(`click`,CalcIMC);