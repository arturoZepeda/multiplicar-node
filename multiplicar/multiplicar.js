const fs = require('fs');

let listarTabla =async(base, limite)=>{
    let resultado = 0 ;
    let texto = ``;
    if (!Number(base)){
        throw new Error (`El valor de la base ${ base } no es un numero.`);
    }
    if (!Number(limite)){
        throw new Error (`El valor del limite ${ limite } no es un numero.`);
    }
    for (let index = 1; index <= limite; index++) {
        resultado=base*index;
        texto+=`${ index } * ${ base } = ${ resultado } \n`;
    }
    return texto;
}


let crearArchivo = async(base, limite)=>{
    let resultado=0;
    let texto=``;
    if (!Number(base)){
        throw new Error (`El valor de la base ${ base } no es un numero.`);
    }
    if (!Number(limite)){
        throw new Error (`El valor del limite ${ limite } no es un numero.`);
    }
    for (let index = 1; index <= limite; index++) {
        resultado=base*index;
        texto+=`${ index } * ${ base } = ${ resultado } \n`;
    }
    fs.writeFile(`tablas/tabla-${ base }.txt`, texto , function ( err ) {
        if ( err ) throw err;
        //console.log(`se ha guardado la tabla del ${ base }`);
      });
      return `tabla-${ base }.txt`;
}
module.exports={
    crearArchivo,
    listarTabla
}