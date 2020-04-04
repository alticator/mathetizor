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
	else if (tab == "fractions") {
		var fractionOne = {
			numerator: convert($("#fractions-1").val()),
			denominator: convert($("#fractions-2").val())
		};
		var fractionTwo = {
			numerator: convert($("#fractions-3").val()),
			denominator: convert($("#fractions-4").val())
		};
		var product = '<sup>' + (fractionOne.numerator * fractionTwo.numerator) + '</sup>&frasl;<sub>' + (fractionOne.denominator * fractionTwo.denominator) + '</sub>';
		var reciprocal = {
			numerator: fractionTwo.denominator,
			denominator: fractionTwo.numerator
		};
		var quotient = '<sup>' + (fractionOne.numerator * reciprocal.numerator) + '</sup>&frasl;<sub>' + (fractionOne.denominator * reciprocal.denominator) + '</sub>';
		if (fractionOne.denominator != fractionTwo.denominator) {
			fractionOne.numerator = fractionOne.numerator * fractionTwo.denominator;
			fractionTwo.numerator = fractionTwo.numerator * fractionOne.denominator;
			
			var newDenominator = fractionOne.denominator * fractionTwo.denominator;
			fractionOne.denominator = newDenominator;
			fractionTwo.denominator = newDenominator;
		}
		var sum = fractionOne.numerator + fractionTwo.numerator;
		sum = '<sup>' + sum + '</sup>&frasl;<sub>' + fractionOne.denominator + '</sub>';
		var difference = fractionOne.numerator - fractionTwo.numerator;
		difference = '<sup>' + difference + '</sup>&frasl;<sub>' + fractionOne.denominator + '</sub>';
		$("#result").html("Sum: " + sum + line + "Difference: " + difference + line + "Product: " + product + line + "Quotient: " + quotient + line + "Note: The fractions may not be in their simplest forms.");
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