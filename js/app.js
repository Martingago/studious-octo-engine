"use strict";

let numeros = [];
let interruptor = true;

const init = ()=> {
    let form = document.querySelector(".form-floating");
    let input = document.querySelector("#floatingInputInvalid");
    let output = document.querySelector(".salida");
    let ul = null;
    let succes = document.querySelector(".alert-warning");
    let btnBorrar = document.querySelector(".btn-secondary")
    succes.innerHTML = `array[${numeros}]`
    
const crearUl = ()=> {
    ul = document.createElement("ul");
    ul.className = "lista";
    output.appendChild(ul);
}
const crearLi = () =>{
    const li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
}

const deleteLi = () =>{
    numeros = [];
    succes.innerHTML = `array[${numeros}]`;
    if(ul !=null){
        ul.innerHTML = "";
    }
}

    form.addEventListener(
        "submit",
        (ev) =>{
            ev.preventDefault();
            const number = Number(input.value)
            numeros.push(number);
            if(interruptor===true){
                interruptor=false;
                crearUl();
                
            }
            crearLi(input.value);
            console.log(numeros)
            succes.innerHTML = `array[${numeros}]`
        }
    );

    btnBorrar.addEventListener(
        "click",
       deleteLi
    );
}

window.addEventListener(
    "load",
    init
)