function reward (){

var pay = .01;

for(var i = 1; i < 31; i++){
  pay = pay + pay; 
  console.log("Day" + i + "-" + pay);
}
}
reward ();