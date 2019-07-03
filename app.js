//REQUIREDS
//const fs = require('fs');
//const Expres = require('express');
//const Propio = require('./lol.js');

const argv = require ('./config/yargs').argv;//el segmento de .argv al final hace que solo se obtenga el segmento argv para evitar haciendo argv.argv
const colors = require('colors');
const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');//permite la deconstruccion para generar el uso de las funciones sin usar multiplicar.crearArchivo

/*
argv:
    { _: [ 'listar' ], base: 3, b: 3, limite: 5, l: 5, '$0': 'app' }
    { _: [ 'crear' ], base: 3, b: 3, limite: 20, l: 20, '$0': 'app' }
*/ 
let comando = argv._[0];//Este indica el comando a utilizar de estas funciones
let limite = argv.limite;//Permite leer de la estructura.
let base = argv.base;//Permite leer de la estructura.
//console.log(argv);
console.log("=====================".green);
console.log("=====================".red);
console.log("=====================".blue);
switch( comando ){
    case 'listar':
        console.log(`El limite es: ${limite} con una base de ${base}`);
        listarTabla(base,limite)
        .then( archivo => console.log(`las tablas son: \n${ archivo.green }`.blue))
        .catch( e=>console.log(e));
    break;
    case 'crear':
        console.log(`El limite es: ${limite} con una base de ${base}`);
        crearArchivo(base,limite)
        .then( archivo => console.log(`Archivo creado: ${ archivo }`))
        .catch( e=>console.log(e));
    break;
    default:
            console.log('Comando no reconocido');
}


// console.log(argv.base);
// console.log(argv.limite);



// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(parametro); 
// console.log(base);
//console.log(argv);    
// crearArchivo(base)
//     .then( archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch( e=>console.log(e));