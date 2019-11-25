//var paciente = document.querySelectorAll(".paciente");

//debugger;

// paciente.forEach(item => {
    
//     var tdPeso = item.querySelector(".info-peso");

//     var peso = tdPeso.textContent;

//     var tdAltura = item.querySelector(".info-altura");

//     var altura = tdAltura.textContent;

//     var imc = peso / (altura * altura);

//     var tdIMC = item.querySelector(".info-imc");

//     var pesoEhValido = true;

//     var alturaEhvalida = true;

//     if(peso <= 0 || peso >= 500){
//         pesoEhValido = false;
//         tdIMC.textContent = "Peso Inválido";
//         item.classList.add("paciente-invalido");
//     }

//     if(altura <= 0 || altura >= 3){
//         alturaEhvalida = false;
//         tdIMC.textContent = "Altura Inválida";
//         item.classList.add("paciente-invalido");
//     }

//     if(pesoEhValido && alturaEhvalida){
//         tdIMC.textContent = imc.toFixed(2);   
//     }
// }

var paciente = document.querySelectorAll(".paciente");
// criando variavel = seleciona o documento no caso o html.função seleciona tudo que tem a classe("classe")
// RESULTADO: variável paciente = todo o conteudo que tem a classe ".paciente".

for(var i = 0; i <= paciente.length; i ++) {
//função de loop (criando variavel "i" = igual a zero; "i" menor ou igual ao tamanho da array paciente; variavel acrescenta um)
//RESULTADO: o que estiver dentro desse loop vai repetir até a variável "i" ser maior do que a quantidade de array que tem a variavel paciente.

    var tdPeso = paciente[i].querySelector(".info-peso");
    //Criação variavel "tdPeso" = classe html "paciente" numero que esta nessa condição [i] que no caso é o numero que esta o indice do loop.querySelector seleciona o conteudo de paciente[i] ".info-peso"  
    //RESULTADO: variavel tdPeso recebe o conteúdo da classe html ".info-peso" que está dentro da classe paciente da array do indice [i]

    var peso = tdPeso.textContent;
    //Criação variável "Peso" = variável "tdPeso"."textContent" 
    //RESULTADO: variavel "peso" recebe conteudo de "tdPeso" que possui o conteúdo de ".info-peso"

    var tdAltura = paciente[i].querySelector(".info-altura");
    //Criação variavel "tdAltura" = classe html "paciente" numero que esta nessa condição [i] que no caso é o numero que esta o indice do loop.querySelector seleciona o conteudo de paciente[i] ".info-peso"  
    //RESULTADO: variavel tdAltura recebe o conteúdo da classe html ".info-altura" que está dentro da classe paciente da array do indice [i]

    var altura = tdAltura.textContent;
    //Criação variável "altura" = variável "tdAltura"."textContent" 
    //RESULTADO: variavel "peso" recebe conteudo de "tdPeso" que possui o conteúdo de ".info-peso"

    var imc = peso / (altura * altura);

    var tdIMC = paciente[i].querySelector(".info-imc");

    var pesoEhValido = true;

    var alturaEhvalida = true;

    if(peso <= 0 || peso >= 500) {
        pesoEhValido = false;
        tdIMC.textContent = "Peso Inválido";
        paciente[i].classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3) {
        alturaEhvalida = false;
        tdIMC.textContent = "Altura Inválida";
        paciente[i].classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhvalida) {
        tdIMC.textContent = imc.toFixed(2);   
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("Click", function(event){
    console.log("Botão foi clicado");
});