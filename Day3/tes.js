function confirmEnding(str, target) {
  var s1 = str.substr((str.length-target.length),target.length);
  if(s1==target){
    str = true;
  } else {
    str = false;
  }
  return str;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Bastian is your name","name"));