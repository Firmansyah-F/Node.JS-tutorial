
  var rl = require('readline-sync')
  var numb = 100;
  var inp = rl.questionInt('Input : ')
  var i = 1;
  var check = 0;
  var num = 0;
  while(i<=inp){

      check = numb.toString()
      while(check.length!=1 && num!=1000){
          check = count_loop(check)
      }

      if(check=='1'){
          i++
          console.log(numb+' is the One Number')
      }
      
      numb++    
  }

function count_loop(numb){
  var count=0;
  // var output = '';
  numb = numb.split('')
  // console.log(numb)

  for(let l = 0; l<numb.length;l++){
      count += parseInt(numb[l])*parseInt(numb[l])
      // output += numb[l]+'^2  ';
  }
  // output+=' = '+count;
  // console.log(output)
  count = count.toString()
  return count 
}