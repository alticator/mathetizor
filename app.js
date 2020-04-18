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
    else if (tab == "console") {
        executeConsole($("#console-1").val());
    }
}

// parse line and construct an equation
function executeConsole(line) {
    console.log("executeConsole: [", line, "]");
    var equation = new Array();

    // put tokens to equation
    // start with number/operand, then expect operation/operator

    var nextType = "operand";
    do {
        var ret = getToken(line, nextType);
        if (ret[0])  {
            equation.push(["operand", ret[1]]);
            nextType = "operator";
        }
        else
        {
            console.log("executeConsole: no more tokens");
            break;
        }
    } while (ret[0] == true)

    calculateEquation(equation);
}

// returns true/false, token
function getToken(text, type) {
    //console.log("getToken: ", text, type);
    var candidate = NaN;
    if (type == "operand") {
        // get the longest string that is a number
        for (var i=1; (i-1) < text.length; i++)
        {
            console.log("parse operand: ", text.substring(0, i));
            var parsedFloat = parseFloat(text.substring(0, i));
            console.log("candidate: ", parsedFloat);
            if (!isNaN(parsedFloat))
            {
                // so far the best
                candidate = parsedFloat;
                //console.log("getToken found number: ", candidate);
            }
            else
            {
                // not a number (anymore), stop
                // exception: don't stop on first round,
                // could be a sign mark (+/-) which can be followed by a number
                if (i != 1) {
                    break;
                }
            }
        }
    }

    console.log("getToken(", text, ") result: ", candidate);
    if (isNaN(candidate)) {
        console.log("getToken failed");
        return [false, ""];
    }
    else {
        console.log("getToken return ", candidate);
        return [true, candidate];
    }
}

// handle array of operands and operations
// make a linked list of singleOps
// complete "vajaa" operations
// try to process a operand + operator + operand triplet
// if a complete singleOp not found, fill with [0, plus]
function calculateEquation(equation) {
    console.log("calculateEquation: ", equation);
    
    // construct a list of calculus operations, that are then executed in priority order
    var operationList = []; // array of singleOps
    
    var singleOp =  new Array(); // [left operand, operation, right operand]
    
    console.log("begin singleOp: ", singleOp);
    
    // handle equation items [type, value]
    for (var i=0; i < equation.length; i++) {
        var itemType = equation[i][0];
        var itemValue = equation[i][1];
        var isLastItem = (i == (equation.length -1))
        
        console.log("eq item: ", itemType, itemValue);
        if (itemType == "operand") {
            console.log("calculateEquation operand");
            if (singleOp.length == 0) {
                //start new singleOp, add left operand
                console.log("add left operand: ", itemValue);
                singleOp.push(itemValue);
            }
            else if (singleOp.length == 2) {
                // add right operand
                console.log("add right operand: ", itemValue);
                singleOp.push(itemValue);
                operationList.push(singleOp);
            }
            else {
                console.log("singleOp error 1");
                break;
            }
        }
        else if (itemType == "operator") {
            console.log("calculateEquation operator");
            if (singleOp.length == 1) {
                //add operation to singleOp
                singleOp.push(equation[i][1]);
            }
            else {
                console.log("singleOp error 2");
                break;
            }
        }
        
        // if singleOp will not be complete, fill it
        if (singleOp.length < 3 && isLastItem) {
            singleOp = completeOperation(singleOp);
            operationList.push(singleOp);
        }
    }
    
    evaluateResult(operationList);
}

function completeOperation(singleOp) {
    console.log("completeOperation: ", singleOp);
    if (singleOp.length == 1) {
        singleOp.unshift(0, "plus");
    }
    else if (singleOp.length == 2) {
        if (isNan(singleOp[0])) {
            singleOp.unshift(0); //0 operand number
        }
        else {
            singleOp.append(0);  //number operand 0
        }
    }
    console.log("after completeOperation: ", singleOp);
    return singleOp;
}

function evaluateResult(operationList) {
    console.log("evaluateResult: ", operationList);
    // start with zero, that will default so somewhat reasonable result
    var result = 0;
    for (var n=0; n < operationList.length; n++) {
        op = operationList[n];
        result += evaluateOp(op);
    }       
 
    $("#result").html(result);
}

function evaluateOp(singleOp) {
    console.log("evaluateOp: ", singleOp);
    if (op[1] == "plus") {
        return op[0] + op[2];
    }
    else if (op[1] == "minus") {
        return op[0] - op[2];
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
    
    showTab("console");
});