
let receta = {
}
receta.nombre = "Sandwich"
receta.ingredientes = []
receta.ingredientes = [ 
   {nombre: "Pan",
   cantidad: 2} ,
   {nombre: "Queso", 
   cantidad: 1}
]
console.log(receta.ingredientes[0].nombre)

function sumarCantidades(receta) {
    let total = 0;
    for (let i = 0; i < receta.ingredientes.length; i++) {
        total += receta.ingredientes[i].cantidad;
        }
        return total;
        }
        console.log(sumarCantidades(receta));