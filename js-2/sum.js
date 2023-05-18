// ejercicio 1
function sum(array){  
let suma = 0;
for (let i = 0; i < array.length; i++) {
  suma = suma + array[i];
}
console.log(suma)
}
    
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0


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

function maxIndex(arr){
  if (arr.length === 0) {
      return -1;
      }
      let maxNum = arr[0];
      let index = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
          maxNum = arr[i];
          index = i;
          }
          }
          return index;
          }
      console.log(maxIndex([1, 3, 2])) // 1
      console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
      console.log(maxIndex([])) // -1 
//ejercicio 4


function Join(arr){
  let result = "";

for (i=0; i<arr.length; i++){
  result = result + arr[i] + " ";
  }
  return result;
  }
  console.log(Join(["Mi", "nombre", "es", "Andres"])) 
  