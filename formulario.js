var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener('click', 
    function(event){
        event.preventDefault();

        var formulario = document.querySelector('#form-adiciona');

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
        imcTd.textContent = calculeIMC(peso,altura);

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);

    
    }

);
function dadosPacientesFormulario(){
 
    //objeto paciente
     var paciente = {
     nome: formulario.nome.value,
     peso: formulario.peso.value,
     altura: formulario.altura.value,
     gordura: formulario.gordura.value,
     IMC: calculeIMC (formulario.peso.value,  formulario.altura.value,)

     }

     return paciente;
}
