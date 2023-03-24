/*Functions are first class 
Define a function that given an array “arr”, loop and deletes each element starting from index 0 until 
the function passed as the second parameters returns true when we passed element to it. 
Then returns the array with the remaining elements once the condition has been met otherwise returns an empty array []  */

function prob3(arr,condition){
    //[...arr] made a exact copy you give 
 let arr2=[...arr];

 //It loops through the array, 
 //checking each element against the condition returns true for an element. 
 for (let i = 0; i < arr2.length; i++) {
    if (condition(arr2[i])) {
        //.slice  method to return a new array with the remaining 
        //elements starting from the index where the condition was met
      return arr2.slice(i);
    }
  }
  return [];
}

const arr=[1,2,3,4] ;
const condition1 = (n) =>n>=3;
const prueba=prob3(arr,condition1);
console.log(prueba);

const arr2=[1,2,3,7,4] ;
const condition2 = n => n > 3;
const prueba1=prob3(arr,condition2);
console.log(prueba1);

const arr3=[0,1,0,1] ;
const condition3 = n => n === 1;
const prueba2=prob3(arr3,condition3);
console.log(prueba2);