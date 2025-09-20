//let inputs = document.querySelectorAll("form div inputs") Selecciona todos los inputs del formlario
//let inputs = document.querySelectorAll(".formulario_entrada")
//inputs.map((input)=> {})  Sintaxis Arreglo.Metodo (inputs.map) la variable toma el nombre en singular del arreglo
 
import {expresiones} from './expresiones.js'

let inputs = document.getElementsByClassName("formulario__entrada")
    let arregloInputs = [...inputs]
   
arregloInputs.map((input) =>{
    input.addEventListener("keyup",(e) => { //KEYUP: Cuando se presionna una tecla y se suelta sucede el evento  KEYDOWN: Solo cuando se presiona la tecla se activa en evento
        switch (e.target.name) {           // e(Selecciona todos los inputs) target se puede usar despues del target Id o Name
            case ("nombre"):
                if(expresiones.texto.test(e.target.value)){     //test es un metodo (una función) que utilizo para comparar la expresión con lo que yo ingrese en el formulario
                    document.getElementById("nombre").style.borderColor ="Blue"   // a esta etiqueta nombre le vamosa mofificar el atributo style y cambiar el color del borde a azul si se cumplu   
                    e.target.style.color = "blue"
                    e.target.style.backgroundColor = "gray"

                }else{
                    document.getElementById("nombre").style.borderColor = "pink"  // en vez de utilizar getElements tambien se puede utilizar e.target.style.borderColor ="pink" (cuando trabajo)
                }
                break;
            case ("apellido"):
                if(expresiones.texto.test(e.target.value)){
                    e.target.classList.add("correcto")   //Para agergar una clase de una "lista de clases". Dentro del add va el nombre de la clase que se quiere agragrar
                    e.target.classList.remove("incorrecto") //Si quiero agregar una clase debo quiter la otra Si esta "correcto" quito lo "incorrecto"
                }else{
                    e.target.classList.add("incorrecto")
                    e.target.classList.remove("correcto")
                }
                break;
            case ("documento"):
                if(expresiones.numero.test(e.target.value)){
                    e.target.classList.add("correcto")   //Para agergar una clase de una "lista de clases". Dentro del add va el nombre de la clase que se quiere agragrar
                    e.target.classList.remove("incorrecto") //Si quiero agregar una clase debo quiter la otra Si esta "correcto" quito lo "incorrecto"
                }else{
                    e.target.classList.add("incorrecto")
                    e.target.classList.remove("correcto")
                }
                break;
        }  
            
    }) 
})

