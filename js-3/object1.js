
const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: [ "programar", "squash", "piano"]
} 
//console.log(pedro.edad)

//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8
//Elimina la propiedad con llave activo.
delete pedro.activo
//console.log(pedro)
//Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).

let llavesPedro = Object.keys(pedro);
let valoresPedro = Object.values(pedro);
for (let i = 0; i < llavesPedro.length; i++)
{
    console.log(llavesPedro[i] + " : " + valoresPedro[i]);
}
//Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
function saluda() {
   return "Hola, me llamo " + this.nombre; 
}

pedro.saluda = saluda
console.log(pedro)
console.log(pedro.saluda())



