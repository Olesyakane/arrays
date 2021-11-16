"use strict"

let msg = document.querySelector(".msg");

let numbers = [234,45,71,121,73,8,92];
let minimo; 
let maximo = minimo = numbers[0]; // guardo el valor 1


for(let i=0; i<numbers.length; i++){
    if(maximo < numbers [i]){
        maximo = numbers [i]; 
    }
    if(minimo>numbers[i]){
        minimo = numbers[i];
    } 
}

document.write(`El número mayor es `+ maximo + " y el mínimo es "+minimo);


 

const precios = [42,64,81,14,75];
msg.innerHTML =  `<br>El incremento de 25% en ${precios}`;

for(var i=0; i<precios.length; i++){
    precios[i] = precios[i]*0.25+precios[i];
    //console.log(`25% de ${precios[i]}:${precios[i]*0.25+precios[i]}`)
}
msg.innerHTML +=   `<h2>es ${precios}</h2>`;



let frase = prompt("Dame una frase");


//método map()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//El método map crea un nuevo array a partir de un array

/**
 * let precios25 = precios.map(
    (precio) => {
        return precio*1.25
    }
);

pDespues.innerHTML =`Array[${precios25}]`

 */


/**
 * const mayorMenor = ()=> {
 * const numbers = [234,45,71,121,73,8,92];
 * for(let i=0;i<numbers.length;i++){
 * }
 * }
 * 
 * const mayorMenor = ()=> {
 * const numbers = [234,45,71,121,73,8,92];
 * let min, max;
 * min = max = numbers[0];
 * for(let numero of numbers){
 *  if(min>numero){
 *    min=numero:
 *   }
 *  if(max<numero){
 *   max=numero;   
 *   }
 *  console.log(`[${numbers}]: Mayor(${max}) -Menor(${min})`)
 * }
 * document.querySelector(".resultado")
 *  .innerHTML
 * }
 * 
 * 
 * 
 * LET TEXTO = "FDJGH OGER nhdoifuh jf";
 * let arraytexto = texto.split(" ");
 * 
 * let numero = "655-745-456";
 * //Split convierte un string en un array
 * let numeros = numero.split("-");
 * 
 */