$(document).ready(function() {
  var number = parseInt(prompt("Enter a number to play Ping Pong"));

  for (var index = 1; index <= number; index += 1) {
  	if (index % 3 === 0) {
  		$('#list').append('<li>' + index)
  	}
  }




});