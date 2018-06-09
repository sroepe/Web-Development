var HOUR = 12;
var MINUTE = 00;
var PERIOD = "PM";
{
var str= "It's ";

if(MINUTE < 30){
  str += "just after " + HOUR;
}else{
  str += "almost " + (HOUR + 1);
}

if(PERIOD == "AM"){
  str += " in the morning.";
}else if(HOUR >= 6 && HOUR <= 9 && PERIOD == "PM"){
  str += " in the evening.";
}else if(HOUR == 12 || HOUR >= 1 || HOUR <= 5 && PERIOD == "PM"){
  str += " in the afternoon";
}else if(HOUR >= 9 && HOUR <= 11 && PERIOD == "PM"){
  str += " at night";
}
console.log(str);
}
{
var str= "It's ";

if(MINUTE == 15){
  str += "quarter past " + HOUR;
}else if(MINUTE == 30){
  str += "half past " + HOUR;
}else if(MINUTE == 05){
  str += "5 after " + HOUR;
}else if(HOUR == 12 && MINUTE == 00 && PERIOD == "PM"){
  str += "noon";
}else if(HOUR == 12 && MINUTE == 00 && PERIOD == "AM"){
  str += "midnight";
}else{
  str += HOUR + ":" + MINUTE + " " + PERIOD;
}

console.log(str);
}
