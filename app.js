// Alticator 2020

function isBetween(variable, valueOne, valueTwo) {
	if (variable > valueOne - 1 && variable < valueTwo + 1) {
		return true;
	}
	else {
		return false;
	}
}

function getId(id) {
	return document.getElementById(id);
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
	else if (tab == "calculator" && isBetween(event.keyCode, 48, 57)) {
		calculatorCalculation += event.key;
		$("#calculator-1").text(calculatorCalculation);
	}
	else if (tab == "calculator") {
		if (event.key == "q") {
			calculatorCalculation += " + ";
		}
		else if (event.key == "w") {
			calculatorCalculation += " - ";
		}
		else if (event.key == "e") {
			calculatorCalculation += " * ";
		}
		else if (event.key == "r") {
			calculatorCalculation += " / ";
		}
		else if (event.key == "t") {
			calculatorCalculation += "(";
		}
		else if (event.key == "y") {
			calculatorCalculation += ")";
		}
		if (isBetween(event.keyCode, 48, 57) || event.key == "q" || event.key == "w" || event.key == "e" || event.key == "r" || event.key == "t" || event.key == "y") {
			$("#calculator-1").text(calculatorCalculation);
		}
		if (event.key == "Backspace") {
			calculatorButtonPress("backspace");
		}
		else if (event.key == "c") {
			calculatorCalculation = "";
			$("#calculator-1").text("0");
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
	else if (number == "e()") {
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
	else if (number == "base2Logarithm(e)") {
		finalNumber = Math.LOG2E
	}
	else if (number == "base10Logarithm(e)") {
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

var darkMode = false;

function darkModeToggle() {
	if (darkMode == false) {
		darkMode = true;
		$(document.body).css("background-color", "#404050");
		$(document.body).css("color", "white");
		$("#results-container").css("background-color", "#707080");
		$("#calculator-container").css("box-shadow", "none");
		$("#calculator-1").css("box-shadow", "none");
		$(".note").css("box-shadow", "none");
		$("#results-container").css("box-shadow", "0px 0px 30px darkslategray");
		$("#results-container").css("color", "white");
		$("#paint-toolbar").css("background-color", "#707080");
		$("nav").css("border-bottom", "2px solid white");
		$("#tab-bar").css("border-right", "2px solid white");
		$(".modal").css("background-color", "#404050");
	}
	else if (darkMode == true) {
		darkMode = false;
		$(document.body).css("background-color", "white");
		$(document.body).css("color", "rgb(0, 165, 210)");
		$("#results-container").css("background-color", "white");
		$("#results-container").css("box-shadow", "0px 0px 30px gray");
		$("#results-container").css("color", "rgb(0, 165, 210)");
		$("#paint-toolbar").css("background-color", "#404050");
		$("nav").css("border-bottom", "none");
		$("#tab-bar").css("border-right", "none");
		$(".modal").css("background-color", "white");
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

var decimalOctal = 1;

function decimalOctalToggle() {
	if (decimalOctal == 1) {
		decimalOctal = 2;
		$("#octal-2").css("background-color", "rgb(0, 210, 0)");
		$("#octal-2").text("→");
	}
	else if (decimalOctal == 2) {
		decimalOctal = 1;
		$("#octal-2").css("background-color", "rgb(0, 165, 210)");
		$("#octal-2").text("←");
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

function switchModal(tab, content) {
	$(".modal-content").hide();
	$("#content-" + tab + "-" + content).show();
}

function openModalFor(tab, content) {
	$(".modal-container").show();
	$("#content-" + tab + "-" + content).show();
}

function closeModal() {
	$(".modal-container").hide();
	$(".modal-content").hide();
}

var objectCount = 0;

function paintCreateRectangle() {
	objectCount++;
	var prefix = "#paint-modal-rectangle-";
	var id = objectCount;
	var x = $(prefix + "1").val();
	var y = $(prefix + "2").val();
	var width = $(prefix + "3").val();
	var height = $(prefix + "4").val();
	var color = $(prefix + "5").val();
	closeModal();
	$("#drawing").append('<div id="drawing-' + id + '" style="position: absolute; width: ' + width + '%; height: ' + height + '%; left: ' + x + '%; top: ' + y + '%; background-color: ' + color + ';"></div>');
	$("#drawing-" + id).dblclick(function() {
		openModalFor("paint", "edit");
		$("#paint-modal-edit-1").html(id);
		var prefix = "#paint-modal-edit-";
		var obj = "drawing-" + id;
		var currentX = getId(obj).style.left;
		currentX = currentX.substring(0, currentX.length - 1);
		var currentY = getId(obj).style.top;
		currentY = currentX.substring(0, currentY.length - 1);
		var currentWidth = getId(obj).style.width;
		currentWidth = currentWidth.substring(0, currentWidth.length - 1);
		var currentHeight = getId(obj).style.height;
		currentHeight = currentHeight.substring(0, currentHeight.length - 1);
		var currentColor = getId(obj).style.backgroundColor;
		$(prefix + "2").val(currentX);
		$(prefix + "3").val(currentY);
		$(prefix + "4").val(currentWidth);
		$(prefix + "5").val(currentHeight);
		$(prefix + "6").val(currentColor);
	});
}

function paintCreateEllipse() {
	objectCount++;
	var prefix = "#paint-modal-ellipse-";
	var id = objectCount;
	var x = $(prefix + "1").val();
	var y = $(prefix + "2").val();
	var width = $(prefix + "3").val();
	var height = $(prefix + "4").val();
	var color = $(prefix + "5").val();
	closeModal();
	$("#drawing").append('<div id="drawing-' + id + '" style="position: absolute; width: ' + width + '%; height: ' + height + '%; left: ' + x + '%; top: ' + y + '%; background-color: ' + color + '; border-radius: 50%;"></div>');
	$("#drawing-" + id).dblclick(function() {
		openModalFor("paint", "edit");
		$("#paint-modal-edit-1").html(id);
		var prefix = "#paint-modal-edit-";
		var obj = "drawing-" + id;
		var currentX = getId(obj).style.left;
		currentX = currentX.substring(0, currentX.length - 1);
		var currentY = getId(obj).style.top;
		currentY = currentX.substring(0, currentY.length - 1);
		var currentWidth = getId(obj).style.width;
		currentWidth = currentWidth.substring(0, currentWidth.length - 1);
		var currentHeight = getId(obj).style.height;
		currentHeight = currentHeight.substring(0, currentHeight.length - 1);
		var currentColor = getId(obj).style.backgroundColor;
		$(prefix + "2").val(currentX);
		$(prefix + "3").val(currentY);
		$(prefix + "4").val(currentWidth);
		$(prefix + "5").val(currentHeight);
		$(prefix + "6").val(currentColor);
	});
}

function paintEditShape() {
	objectCount++;
	var prefix = "#paint-modal-edit-";
	var id = $(prefix + "1").html();
	var x = $(prefix + "2").val();
	var y = $(prefix + "3").val();
	var width = $(prefix + "4").val();
	var height = $(prefix + "5").val();
	var color = $(prefix + "6").val();
	closeModal();
	$("#drawing-" + id).css("left", x + "%");
	$("#drawing-" + id).css("top", y + "%");
	$("#drawing-" + id).css("width", width + "%");
	$("#drawing-" + id).css("height", height + "%");
	$("#drawing-" + id).css("background-color", color);
}

function switchToBorder() {
	var id = $("#paint-modal-edit-1").html();
	switchModal("paint", "border");
	$("#paint-modal-border-1").html(id);
	var prefix = "#paint-modal-border-";
	var obj = "drawing-" + id;
	var currentThickness = getId(obj).style.borderWidth;
	currentThickness = currentThickness.substring(0, currentThickness.length - 2);
	var currentColor = getId(obj).style.borderColor;
	var currentType = getId(obj).style.borderStyle;
	$(prefix + "2").val(currentThickness);
	$(prefix + "3").val(currentColor);
	$(prefix + "4").val(currentType);
}

function switchToPerspective() {
	var id = $("#paint-modal-edit-1").html();
	switchModal("paint", "perspective");
	$("#paint-modal-perspective-1").html(id);
	var prefix = "#paint-modal-perspective-";
	var obj = "drawing-" + id;
	$(prefix + "2").val("");
	$(prefix + "3").val("");
	$(prefix + "4").val("");
}

function switchToShadow() {
	var id = $("#paint-modal-edit-1").html();
	switchModal("paint", "shadow");
	$("#paint-modal-shadow-1").html(id);
	var prefix = "#paint-modal-shadow-";
	var obj = "drawing-" + id;
	$(prefix + "2").val("");
	$(prefix + "3").val("");
	$(prefix + "4").val("");
	$(prefix + "5").val("");
}

function paintPerspective() {
	var prefix = "#paint-modal-perspective-";
	var id = $(prefix + "1").html();
	var rotationX = $(prefix + "2").val();
	var rotationY = $(prefix + "3").val();
	var rotation = $(prefix + "4").val();
	closeModal();
	$("#drawing-" + id).css("transform", "rotateX(" + rotationX + "deg) rotateY(" + rotationY + "deg) rotate(" + rotation + "deg)");
}

function paintShadow() {
	var prefix = "#paint-modal-shadow-";
	var id = $(prefix + "1").html();
	var offsetX = $(prefix + "2").val();
	var offsetY = $(prefix + "3").val();
	var blur = $(prefix + "4").val();
	var color = $(prefix + "5").val();
	closeModal();
	$("#drawing-" + id).css("box-shadow", offsetX + "px " + offsetY + "px " + blur + "px " + color);
}

function paintEditBorder() {
	var prefix = "#paint-modal-border-";
	var id = $(prefix + "1").html();
	var thickness = $(prefix + "2").val();
	var color = $(prefix + "3").val();
	var type = $(prefix + "4").val();
	closeModal();
	$("#drawing-" + id).css("border-style", type);
	$("#drawing-" + id).css("border-width", thickness + "px");
	$("#drawing-" + id).css("border-color", color);
}

function paintClearCanvas() {
	$("#drawing").html("");
	closeModal();
}

var paintCanvasBorder = true;

function paintToggleBorder() {
	if (paintCanvasBorder == false) {
		paintCanvasBorder = true;
		$("#drawing").css("border", "2px solid gray");
		$("#paint-modal-canvas-3").css("background-color", "rgb(0, 210, 0)");
		$("#paint-modal-canvas-3").text("ON");
	}
	else if (paintCanvasBorder) {
		paintCanvasBorder = false;
		$("#drawing").css("border", "none");
		$("#paint-modal-canvas-3").css("background-color", "lightgray");
		$("#paint-modal-canvas-3").text("OFF");
	}
}

function paintResizeCanvas() {
	var width = $("#paint-modal-canvas-1").val();
	var height = $("#paint-modal-canvas-2").val();
	$("#drawing").css("width", width + "px");
	$("#drawing").css("height", height + "px");
}

var fontSpecialEdition = false;

function fontToggle() {
	if (fontSpecialEdition == false) {
		fontSpecialEdition = true;
		$("*").css("font-family", "monospace");
	}
	else if (fontSpecialEdition == true) {
		fontSpecialEdition = false;
		$("*").css("font-family", "sans-serif");
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
	else if (tab == "octal") {
		var number = convert($("#octal-1").val());
		var result;
		if (decimalOctal == 1) {
			result = number.toString(8);
		}
		else if (decimalOctal == 2) {
			result = parseInt(number, 8);
		}
		$("#result").html(result);
	}
	else if (tab == "random") {
		var minimum = convert($("#random-1").val());
		var maximum = convert($("#random-2").val());
		var result = Math.round(Math.random() * maximum) + minimum;
		$("#result").html(result);
	}
	else if (tab == "percentage") {
		var percentage = convert($("#percentage-1").val()) * 1000000;
		var number = convert($("#percentage-2").val()) * 1000000;
		var result = number * (percentage / 100) / 1000000000000;
		$("#result").html(result);
	}
	else if (tab == "logarithm") {
		var base = convert($("#logarithm-1").val());
		var number = convert($("#logarithm-2").val());
		var result = Math.log(number) / Math.log(base);
		$("#result").html(result.toString() + '<div class="note">Some results may not be accurate</div>');
	}
}

function showTab(newTab) {
	$(".tab").hide();
	$("#tab-" + newTab).show();
	$(".tab-button").removeClass("tab-selected");
	$("#tab-button-" + newTab).addClass("tab-selected");
	$("#result").html("Press \"Calculate / Run Command\" or Enter to View");
	var tabButton = eval("document.getElementById('tab-button-" + newTab + "')");
	var positions = tabButton.getBoundingClientRect();
	$("#indicator").css("top", positions.y - 60);
	tab = newTab;
	if (newTab == "paint") {
		$("#calculate-button").hide();
		$("#results-container").hide();
	}
	else {
		$("#calculate-button").show();
		$("#results-container").show();
	}
}

$(document).ready(function() {
	showTab("calculator");
	$(document).keypress(keyPress);
});