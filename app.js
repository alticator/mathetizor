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
	else if (tab == "average" && event.key == ",") {
		event.preventDefault();
		if ($("#average-1").is(":focus")) {
			document.getElementById("average-2").focus();
		}
		else {	
			averageAddInput();
		}
	}
}

var tab = "overview";
var line = " </br> ";

function convert(number) {
	var finalNumber;
	if (number == "pi()") {
		finalNumber = Math.PI;
	}
	else if (number == "E()") {
		finalNumber = Math.E;
	}
	else if (number == "squareRoot(2)") {
		finalNumber = Math.SQRT2;
	}
	else if (number == "squareRoot(1/2)") {
		finalNumber = Math.SQRT1_2;
	}
	else if (number == "naturalLogarithm(2)") {
		finalNumber = Math.LN2
	}
	else if (number == "naturalLogarithm(10)") {
		finalNumber = Math.LN10;
	}
	else if (number == "base2Logarithm(E)") {
		finalNumber = Math.LOG2E
	}
	else if (number == "base10Logarithm(E)") {
		finalNumber = Math.LOG10E;
	}
	else {
		finalNumber = parseFloat(number);
	}
	return finalNumber;
}

var averageNumberAmount = 2;

function averageAddInput() {
	averageNumberAmount++;
	$("#average-inputs").append('<input id="average-' + averageNumberAmount + '" autofocus><br>');
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
		else if (button == "backspace") {
			if (calculatorCalculation.length > 1) {
				calculatorCalculation = calculatorCalculation.substring(0, calculatorCalculation.length - 1);
			}
			else {
				button = "clear";
			}
		}
		$("#calculator-1").text(calculatorCalculation);
		if (button == "clear") {
			calculatorCalculation = "";
			$("#calculator-1").text("0");
		}
	}
}

var inRadians = false;

function degreesRadiansToggle() {
	if (inRadians == false) {
		inRadians = true;
		$("#degreesRadiansToggle").css("background-color", "rgb(0, 210, 0)");
		$("#degreesRadiansToggle").text("ON");
	}
	else if (inRadians) {
		inRadians = false;
		$("#degreesRadiansToggle").css("background-color", "lightgray");
		$("#degreesRadiansToggle").text("OFF");
	}
	if ($("#trigonometric-functions-1").val() != "") {
		runCommand();
	}
}

var decimalBinary = 1;

function decimalBinaryToggle() {
	if (decimalBinary == 1) {
		decimalBinary = 2;
		$("#binary-2").css("background-color", "rgb(0, 210, 0)");
		$("#binary-2").text("→");
	}
	else if (decimalBinary == 2) {
		decimalBinary = 1;
		$("#binary-2").css("background-color", "rgb(0, 165, 210)");
		$("#binary-2").text("←");
	}
}

var overviewAlwaysPresent = false;

function overviewAlwaysPresentToggle() {
	if (overviewAlwaysPresent == false) {
		overviewAlwaysPresent = true;
		$("#overview-3").css("background-color", "rgb(0, 210, 0)");
		$("#overview-3").text("ON");
	}
	else if (overviewAlwaysPresent == true) {
		overviewAlwaysPresent = false;
		$("#overview-3").css("background-color", "lightgray");
		$("#overview-3").text("OFF");
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
		var percentage = numberOne * 100;
		if (isBetween(numberOne, 0, 1000) || (overviewAlwaysPresent && numberOne > 0)) {
			var visualDots = "";
			for (var i = 0; i < Math.round(numberOne); i++) {
				visualDots += ".";
			}
			var visual = "Number One Visual Presentation (rounded): " + line + '<div id="overview-graphic">' + visualDots + '</div>';
		}
		else {
			visual = "";
		}
		$("#result").html("Sum: " + sum + line + "Difference: " + difference + line + "Product: " + product + line + "Quotient: " + quotient + line + "Remainder: " + remainder + line + "Number One to the power of Number Two: " + exponentiation + line + "Number One in Percentage: " + percentage + "%" + line + visual + '<div class="note">Some calculations may not give entirely accurate results.</div>');
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
	else if (tab == "rounding") {
		var number = $("#rounding-1").val();
		var round = Math.round(number);
		var ceil = Math.ceil(number);
		var floor = Math.floor(number);
		$("#result").html("Rounded: " + round + line + "Ceiled: " + ceil + line + "Floored: " + floor);
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
		var inPercentage = inDecimals * 100;
		var visual;
		if (fractionOne.numerator <= fractionOne.denominator) {
			visual = "Fraction One Visual Presentation: " + line + '<div id="fractions-graphic"><div id="fractions-graphic-amount" style="width: ' + inPercentage + '%"></div></div>';
		}
		else {
			visual = "";
		}
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
		$("#result").html("Sum: " + sum + line + "Difference: " + difference + line + "Product: " + product + line + "Quotient: " + quotient + line + "Fraction One in Decimals: " + inDecimals + line + "Fraction One in Percentage: " + inPercentage + "%" + line + visual + line + '<div class="note">The fractions may not be in their simplest forms.</div>');
	}
	else if (tab == "root") {
		var numberOne = $("#root-1").val();
		var numberTwo = $("#root-2").val();
		var result = Math.pow(numberOne, 1 / numberTwo);
		$("#result").html(result);
	}
	else if (tab == "trigonometric-functions") {
		var angle = convert($("#trigonometric-functions-1").val());
		if (inRadians == false) {
			angle = angle * Math.PI / 180;
		}
		var sine = Math.sin(angle);
		var cosine = Math.cos(angle);
		if (angle == 90 * Math.PI / 180 && inRadians == false) {
			cosine = 0;
		}
		var tangent = Math.tan(angle);
		$("#result").html("Sine: " + sine + line + "Cosine: " + cosine + line + "Tangent: " + tangent + '<div class="note">The results may not be accurate.</div>');
	}
	else if (tab == "calculator") {
		var result = eval(calculatorCalculation);
		calculatorCalculation = result;
		$("#calculator-1").text(result);
		$("#result").html(result);
	}
	else if (tab == "binary") {
		var number = convert($("#binary-1").val());
		var result;
		if (decimalBinary == 1) {
			result = number.toString(2);
		}
		else if (decimalBinary == 2) {
			result = parseInt(number, 2);
		}
		$("#result").html(result);
	}
	else if (tab == "random") {
		var minimum = convert($("#random-1").val());
		var maximum = convert($("#random-2").val());
		var result = Math.round(Math.random() * maximum) + minimum;
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