function reward (){

var pay = .01;

for(var i = 1; i <= Infinity; i++){
  pay = pay + pay;
  if (pay == Infinity){
    console.log(i);
    break;
  }
}
}
reward ();