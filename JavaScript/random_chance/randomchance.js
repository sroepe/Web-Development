function quarterSlots(numQuarters){

  for(var bet = 0; bet <=1; bet--){

    bet++;

    while(numQuarters > 0){
    
      var win = Math.floor(Math.random()*100);

      if(win == 1){
        var winnings = Math.floor(Math.random()*50 + 50);
        numQuarters = numQuarters + winnings - bet;
      }
      console.log(winnings, numQuarters);
    }
  }
  return 0;
}

quarterSlots(1);