 var s = $("#result");
function insertnum(number){
  var existingNumber = s.val();
  $("#result").val(existingNumber + number)
}

function clearRes(){
  s.val('')
}

function calculate(){
   var result = eval(s.val())
   s.val(result)

}

 function deletNumber(){
   var presentNumber = s.val();
   if(presentNumber!=''){
     s.val(presentNumber.slice(0,-1));
   }
 }
