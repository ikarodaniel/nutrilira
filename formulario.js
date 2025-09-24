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
