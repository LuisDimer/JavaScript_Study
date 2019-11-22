var paciente = document.querySelectorAll(".paciente");

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

for(var i = 0; i <= paciente.length; i ++) {

var tdPeso = paciente[i].querySelector(".info-peso");

 var peso = tdPeso.textContent;

    var tdAltura = paciente[i].querySelector(".info-altura");

    var altura = tdAltura.textContent;

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