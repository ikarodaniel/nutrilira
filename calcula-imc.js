//esse bloco vai alterar o nome do titulo e subtitulo
var pacientes = document.querySelector(".titulo_secundario");
pacientes.textContent = "Meus Pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "silva Nutrição";

//Esse vai criar variavel buscar id do primeiro paciente e acessa o peso do primeiro paciente

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //busca o elemento da altura e altera seu conteúdo
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o IMC e altera no elemento
    var IMC = calculeIMC(peso, altura);


    //valores booleanos
    var pesoValido = true;
    var alturaValida = true;

    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = IMC;
    }


    //alerta caso peso e altura sejam inválidos
    if(peso <= 0 || peso >= 1000){
        console.log("Peso Inválido");
        var pesoValido = false;
        tdIMC.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    
    }   

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura Inválida!");
        var AlturaValida = false;
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
        
    }
    
}


function calculeIMC(){
   var imc = peso / (altura * altura);

   return imc.toFixed(2);

}
