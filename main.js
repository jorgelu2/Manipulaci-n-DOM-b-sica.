const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const inputUno = document.querySelector('#calculoUno');
const inputDos = document.querySelector('#calculoDos');
const button = document.querySelector('#btnCalcular')
const p = document.querySelector('#resultado')

form.addEventListener('messageerror', botonOnClic);

function botonOnClic(event){
event.preventDefault();    
const sumaInputs = (Number(inputUno.value) + Number(inputDos.value));
p.innerText = 'El resultado es ' + sumaInputs;
}