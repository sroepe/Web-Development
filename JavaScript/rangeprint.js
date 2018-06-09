function rangeprint(start, end, skip){

for(var i = start; i < end; i += skip) {
    console.log(i);
    }
  }
rangeprint(-5, 20, 2);


function rangenoskipend(start, end, skip){
  
  if(!end){
    end = start;
    start = 0;
  }  
  if(!skip){
      skip = 1;
  }
  if(end < 1){
    console.log(start, end);
  }
  for(var i = start; i < end; i += skip){ 
    console.log(i);
  } 
}
rangenoskipend(-5, 20);
rangenoskipend(-5);

