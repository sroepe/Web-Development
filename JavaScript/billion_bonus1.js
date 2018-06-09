function reward (){

var pay = .01;

for(var i = 1; i < 31; i++){
  pay = pay + pay;
  if (pay > 10000.00){
    console.log(i);
    break;
  }
}
}
reward ();