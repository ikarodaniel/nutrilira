//esse bloco vai alterar o nome do titulo e subtitulo
var pacientes = document.querySelector(".titulo_secundario");
pacientes.textContent = "Meus Pacientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lima Nutrição";

//Esse vai criar variavel buscar id do primeiro paciente e acessa o peso do primeiro paciente

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //busca o elemento da altura e altera seu conteúdo
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //cria variavel imc para fazer o cálculo e achar o imc do paciente
    var IMC = peso / (altura * altura);


    //valores booleanos
    var pesoValido = true;
    var alturaValida = true;

    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = IMC.toFixed(2);
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

titulo.addEventListener('click',function(){
    alert("Clicou nessa bomba");
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener('click', 
    function(event){
        event.preventDefault();

        var formulario = document.querySelector('#form-adiciona');

        var nome = formulario.nome.value;
        var peso = formulario.peso.value;
        var altura = formulario.altura.value;
        var gordura = formulario.gordura.value;

        console.log(formulario.altura.value);
        console.log(nome);
        console.log(peso);
        console.log(altura);
        console.log(gordura);
    
        //Cria o elemento <tr>
        var pacienteTr = document.createElement("tr");

        //Cria as tags (td)
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");


        //Adiciona os valores digitados a <td> criada 
        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);

    
    }

);
