function saySomething(whatToSay) {
  alert(whatToSay);
};

function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2){
	return number1 - number2;
};

function multiply(number1, number2){
	return number1 * number2;
};

function threeTimes(number1, number2, number3){
	return number1 * number2 * number3;
};

function divide(number1, number2){
	return number1 / number2;
};

function remainder(number1, number2){
	return number1 % number2;
};

$(document).ready(function(){

	$("form#add").submit(function(event) {
		event.preventDefault();
  	const number1 = parseInt($("#add1").val());
  	const number2 = parseInt($("#add2").val());
  	const addResult = add(number1, number2);
		$("#addOutput").text(addResult);
	});

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#subtract1").val());
		const number2 = parseInt($("#subtract2").val());
		const subtractResult = subtract(number1, number2);
		$("#subtractResult").text(subtractResult);
	});

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#multiply1").val());
		const number2 = parseInt($("#multiply2").val());
		const multiplyResult = multiply(number1, number2);
		$("#multiplyResult").text(multiplyResult);
	});

	$("form#divide").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#divide1").val());
		const number2 = parseInt($("#divide2").val());
		const divideResult = divide(number1, number2);
		$("#divideResult").text(divideResult);
	});

	$("form#remainder").submit(function(event){
		event.preventDefault();
		const number1 = parseInt($("#remainder1").val());
		const number2 = parseInt($("#remainder2").val());
		const remainderResult = remainder(number1, number2);
		$("#remainderResult").text(remainderResult);
	});
});