let btnEnviar = document.querySelector("button");
let input = document.querySelector("input");

btnEnviar.addEventListener("click", function(){
    if(isNaN(input.value)){
        alert("Ingresá un valor válido")
        input.value = ""
    }else{
        let resultado = (input.value * 9/5) + 32;
        input.value = `Su conversion es ${resultado}°F`;
    }
});