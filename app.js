// Alticator 2020

document.onkeypress = keyPress;

function keyPress(event) {
	if (event.key == "Enter") {
		runCommand();
	}
}

var tab = "overview";
var line = " </br> ";

function convert(number) {
	var finalNumber;
	if (number == "pi()") {
		finalNumber = Math.PI;
	}
	else if (number == "exponentialGrowth()") {
		finalNumber = Math.E;
	}
	else {
		finalNumber = parseFloat(number);
	}
	return finalNumber;
}

var averageNumberAmount = 2;

function averageAddInput() {
	console.log("Running");
	averageNumberAmount++;
	$("#average-inputs").append('<input id="average-' + averageNumberAmount + '"><br>');
}

function runCommand() {
	if (tab == "overview") {
		var numberOne = $("#overview-1").val();
		var numberTwo = $("#overview-2").val();
		numberOne = convert(numberOne);
		numberTwo = convert(numberTwo);
		$("#result").html("Sum: " + (numberOne + numberTwo) + line + "Difference: " + (numberOne - numberTwo) + line + "Product: " + (numberOne * numberTwo) + line + "Quotient: " + (numberOne / numberTwo));
	}
	else if (tab == "average") {
		var numbers = [];
		for (var i = 0; i < averageNumberAmount; i++) {
			numbers.push($("#average-" + (i+1)).val());
		}
		for (var i = 0; i < averageNumberAmount; i++) {
			numbers[i] = convert(numbers[i]);
		}
		var resultNumber = 0;
		for (var i = 0; i < numbers.length; i++) {
			resultNumber += numbers[i];
		}
		resultNumber = resultNumber / numbers.length;
		$("#result").html("Average: " + resultNumber);
	}
}

function showTab(newTab) {
	$(".tab").hide();
	$("#tab-" + newTab).show();
	$(".tab-button").removeClass("tab-selected");
	$("#tab-button-" + newTab).addClass("tab-selected");
	tab = newTab;
}

$(document).ready(function() {
	showTab("overview");
});