// Alticator 2020

function isBetween (variable, valueOne, valueTwo) {
	if (variable > valueOne - 1 && variable < valueTwo + 1) {
		return true;
	}
	else {
		return false;
	}
}

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

var calculatorCalculation = "";

function calculatorButtonPress(button) {
	if (button != undefined) {
		if (button == 1 || button == 2 || button == 3 || button == 4 || button == 5 || button == 6 || button == 7 || button == 8 || button == 9 || button == 0 || button == "(" || button == ")") {
			calculatorCalculation += button;
		}
		else if (button == "plus") {
			calculatorCalculation += " + ";
		}
		else if (button == "minus") {
			calculatorCalculation += " - ";
		}
		else if (button == "times") {
			calculatorCalculation += " * ";
		}
		else if (button == "divide") {
			calculatorCalculation += " / ";
		}
		else if (button == "pi") {
			calculatorCalculation += Math.PI;
		}
		$("#calculator-1").text(calculatorCalculation);
		if (button == "clear") {
			calculatorCalculation = "";
			$("#calculator-1").text("0");
		}
	}
}

function runCommand() {
	if (tab == "overview") {
		var numberOne = $("#overview-1").val();
		var numberTwo = $("#overview-2").val();
		numberOne = convert(numberOne);
		numberTwo = convert(numberTwo);
		var sum = (numberOne * 1000000 + numberTwo * 1000000) / 1000000;
		var difference = (numberOne * 1000000 - numberTwo * 1000000) / 1000000;
		var product = ((numberOne * 1000000) * (numberTwo * 1000000)) / 1000000000000;
		var quotient = ((numberOne * 1000000) / (numberTwo * 1000000));
		var remainder = numberOne % numberTwo;
		var exponentiation = Math.pow(numberOne, numberTwo);
		$("#result").html("Sum: " + sum + line + "Difference: " + difference + line + "Product: " + product + line + "Quotient: " + quotient + line + "Remainder: " + remainder + line + "Number One to the power of Number Two: " + exponentiation + line + '<div class="note">Some calculations may not give entirely accurate results.</div>');
	}
	else if (tab == "average") {
		var numbers = [];
		for (var i = 0; i < averageNumberAmount; i++) {
			numbers.push(convert($("#average-" + (i+1)).val()));
		}
		for (var i = 0; i < averageNumberAmount; i++) {
			numbers[i] = numbers[i] * 1000000;
		}
		var resultNumber = 0;
		for (var i = 0; i < numbers.length; i++) {
			resultNumber += numbers[i];
		}
		resultNumber = resultNumber / 1000000;
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
		var inDecimals = fractionOne.numerator / fractionOne.denominator;
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
		$("#result").html("Sum: " + sum + line + "Difference: " + difference + line + "Product: " + product + line + "Quotient: " + quotient + line + "Fraction One in Decimals: " + inDecimals + line + "Note: The fractions may not be in their simplest forms.");
	}
	else if (tab == "root") {
		var numberOne = $("#root-1").val();
		var numberTwo = $("#root-2").val();
		var result = Math.pow(numberOne, 1 / numberTwo);
		$("#result").html(result);
	}
	else if (tab == "trigonometric-functions") {
		var angle = convert($("#trigonometric-functions-1").val());
		var sine = Math.sin(angle);
		var cosine = Math.cos(angle);
		var tangent = Math.tan(angle);
		$("#result").html("Sine: " + sine + line + "Cosine: " + cosine + line + "Tangent: " + tangent + '<div class="note">Assuming the angle is given in radians.</div>');
	}
	else if (tab == "calculator") {
		var result = eval(calculatorCalculation);
		calculatorCalculation = result;
		$("#calculator-1").text(result);
		$("#result").html(result);
	}
}

function showTab(newTab) {
	$(".tab").hide();
	$("#tab-" + newTab).show();
	$(".tab-button").removeClass("tab-selected");
	$("#tab-button-" + newTab).addClass("tab-selected");
	$("#result").html("Press \"Calculate / Run Command\" or Enter to View");
	tab = newTab;
}

$(document).ready(function() {
	showTab("calculator");
	$(document).keypress(keyPress);
});