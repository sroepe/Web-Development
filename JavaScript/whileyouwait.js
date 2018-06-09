var msg1 = " days until my birthday. It's too far away.:(";
var msg2 = " days until my birthday. I'm sooooo excited!!";
var msg3 = " DAYS UNTIL MY BIRTHDAY. CAN'T WAIT TO PARTY!!!!!";
var msg4 = " DAY UNTIL MY BIRTHDAY. CAN'T WAIT TO PARTY!!!!!";
var msg5 = "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*";
var msg6 = "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪";
var msg7 = "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«";

for(var x = 60; x >= 0; x--){
  if(x > 30){
    console.log(x + msg1);
  }
  if(x <= 30 && x > 5){
    console.log(x + msg2);
  }
  if(x > 1 && x < 5){
    console.log(x + msg3);
  }
  if(x === 1){
    console.log(x + msg4);
  }
  if(x === 0){
    console.log(msg5);
    console.log(msg6);
    console.log(msg7);
  }
}
