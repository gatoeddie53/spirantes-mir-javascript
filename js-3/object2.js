//bonus
const persona = {
nombre : "Oscar",
edad : 30,
ciudad : "Bogota",
profesion : "developer"
}
function presentacion(objeto){
    return `Mi nombre es ${objeto.nombre} y tengo ${objeto.edad} años y estoy viviendo en ${objeto.ciudad}.`
}

let mensaje = presentacion(persona)
persona.hobbies = ["leer","escribir","correr","nadar"]

console.log(persona)
for(let hobbies in persona){
    console.log(persona[hobbies]);
}