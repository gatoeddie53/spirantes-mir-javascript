// ejercicio 1
function sum(array){  
let suma = 0;
for (let i = 0; i < array.length; i++) {
  suma = suma + array[i];
}
console.log(suma)
}
    
    /*console.log(sum([1, 2, 3])) // 6
    console.log(sum([10, 8, 12, 5])) // 35
    console.log(sum([])) // 0*/

    //ejercicio 2
function max(arr) {
      if (arr.length === 0) {
        return;
      }
      let maxNum = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
          maxNum = arr[i];
        }
      }
      return maxNum;
    }
    
    console.log(max([1, 3, 2])) // 3
    console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
    console.log(max([])) // undefined 

// ejercicio 3
/*  Crea una función maxIndex que reciba una 
arreglo de números y retorne el índice donde se 
encuentra el mayor. Si el arreglo está vacío debe retornar -1. */
    
function maxIndex(arr){
  
  
      let maxI = 0
       for (let i=0; i < arr.length; i++){
         if (arr[i] > maxI){
           maxI = arr[i]
         }
         return MaxIndex
      }
      
      console.log(maxIndex([1, 3, 2])) // 1
      console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
      console.log(maxIndex([])) // -1 

//ejercicio 4
/*Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos. */


function Join(arr){
  for (i=0; i<arr.lenght; i++){
    
  }
  
    return join
  }