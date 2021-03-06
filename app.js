function insertnum(number){
  var existingNumber = $("#result").val();
  $("#result").val(existingNumber + number)
}

function clearRes(){
  $("#result").val('')
}
