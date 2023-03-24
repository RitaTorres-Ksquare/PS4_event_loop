/*Define a function called destroyer that will receive as its first parameter an array with numbers, 
then it can receive 1 or more parameters that you need to search in the array and then delete it after you finish processing
 return the resulting array. */


 
//...arr1 do the same copy of numbers you want to destroy.
function destroyed(arr,...arr1){
    //filter. do a copy of the array and only the elements that we want to pass can return
    //only the elements of arr that are not include in args 
    let destroy=arr.filter(element=>!arr1.includes(element));
    console.log(destroy);
    return destroy;
    
  }
  
  let numbers=[1,2,3,1,2,3];
  let numbers1=[1,2,3,5,1,2,3];
  let numbers2=[2,3,4,5,6,7,8,9,4,3,2,1];
  
  destroyed(numbers,2,3);
  destroyed(numbers1,2,3);
  