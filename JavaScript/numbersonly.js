function copyArray(arr=[]){

var newArr = [];

for(var i = 0; i < arr.length; i++){
  if(typeof arr[i] === "number"){
    newArr.push(arr[i]);
  }
}
console.log(newArr)
}
copyArray(arr=[0, "peach", 10, "banana", 5]);