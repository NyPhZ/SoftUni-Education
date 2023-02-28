let whiteMode = document.getElementById("white-mode");
let output = document.getElementsByClassName("output")[0];
let calculator = document.getElementsByClassName("calculator-grid")[0];
let divider = document.getElementById("divide");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let operands = document.getElementsByClassName("previous-operand")[0];
let clearBtn = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let result = document.getElementsByClassName("current-operand")[0];
let equal = document.getElementById("equal");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let operandText = operands.firstChild;
let spanSymbol = document.createElement("span");


let resultTC = result.textContent;
let operandTC = operandText.textContent;

whiteMode.style.color = "#424242";

one.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 1;
})

two.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 2;
})

three.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 3;
})

four.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 4;
})

five.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 5;
})

six.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 6;
})

seven.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 7;
})

eight.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 8;
})

nine.addEventListener("click", () => {
    if (result.textContent == "0") {
        result.textContent = ""
    }
    result.textContent += 9;
})

zero.addEventListener("click", () => {
    if (result.textContent == 0) {
        return;
    }
    result.textContent += 0;
})

dot.addEventListener("click", () => {
    result.textContent += ".";
})

clearBtn.addEventListener("click", () => {
    result.textContent = "0";
    operandText.textContent = "";
    divider.disabled = false;
    plus.disabled = false;
    spanSymbol.remove();
})

backspace.addEventListener("click", () => {
    let resultTC = result.textContent;
    result.textContent = resultTC.slice(0, -1);
    if (result.textContent == "") {
        result.textContent = 0;
    }
})





divider.addEventListener("click", () => {
    spanSymbol.id = "dividerSymbol";
    spanSymbol.textContent = divider.textContent;
    operandTC = Number(result.textContent);
    operandText.textContent = result.textContent;
    result.textContent = "0";

    spanSymbol.style.color = "#1991FF";
    operandText.appendChild(spanSymbol)
    divider.disabled = true;
    equal.disabled = false;

})

plus.addEventListener("click", () => {
    spanSymbol.id = "plusSymbol"
    spanSymbol.textContent = plus.textContent;

    operandTC = Number(result.textContent);

    operandText.textContent = operandTC;
    result.textContent = "0";

    spanSymbol.style.color = "#1991FF";
    operandText.appendChild(spanSymbol)
    plus.disabled = true;
    equal.disabled = false;

})

minus.addEventListener("click", () => {
    spanSymbol.id = "minusSymbol"
    spanSymbol.textContent = minus.textContent;

    operandTC = Number(result.textContent);

    operandText.textContent = operandTC;
    result.textContent = "0";

    spanSymbol.style.color = "#1991FF";
    operandText.appendChild(spanSymbol)
    minus.disabled = true;
    equal.disabled = false;

})

multiply.addEventListener("click", () => {
    spanSymbol.id = "multiplySymbol"
    spanSymbol.textContent = multiply.textContent;

    operandTC = Number(result.textContent);

    operandText.textContent = operandTC;
    result.textContent = "0";

    spanSymbol.style.color = "#1991FF";
    operandText.appendChild(spanSymbol)
    multiply.disabled = true;
    equal.disabled = false;

})

equal.addEventListener("click", () => {
    equal.disabled = true;
    if (operandText.textContent === "" || spanSymbol.textContent === "") {
        return;
    }
    operandText.textContent += result.textContent;
    switch (spanSymbol.id) {
        
        case "plusSymbol":
            result.textContent = Number(operandTC) + Number(result.textContent);
            multiply.disabled = false;
            minus.disabled = false;
            divider.disabled = false;
            plus.disabled = false;
            break;

        case "dividerSymbol":
            if (result.textContent === "0") {
                alert("Error: Division by zero");
                result.textContent = "0";
                operandText.textContent = "";
                multiply.disabled = false;
                minus.disabled = false;
                divider.disabled = false;
                plus.disabled = false;
                spanSymbol.remove();
                return;
            }
            result.textContent = Number(operandTC) / Number(result.textContent);
            multiply.disabled = false;
            minus.disabled = false;
            divider.disabled = false;
            plus.disabled = false;
            break;

        case "minusSymbol":
            result.textContent = Number(operandTC) - Number(result.textContent);
            multiply.disabled = false;
            minus.disabled = false;
            divider.disabled = false;
            plus.disabled = false;
            break;

        case "multiplySymbol":
            result.textContent = Number(operandTC) * Number(result.textContent);
            multiply.disabled = false;
            minus.disabled = false;
            divider.disabled = false;
            plus.disabled = false;
            break;
            
    }
});
whiteMode.addEventListener("mouseover", () => {
    whiteMode.style.color ="#1991FF";

})
whiteMode.addEventListener("mouseout", () => {
    whiteMode.style.color = "#2D3138";

})

whiteMode.addEventListener("click", () => {
    if (whiteMode.innerHTML === "◑") {
        whiteMode.innerHTML = "◐";
        whiteMode.style.color = "#F7F8FB";
        calculator.style.backgroundColor = "#F7F8FB"; //*white
        operands.style.color = "#424242" //*black
        output.style.backgroundColor = "#F7F8FB";
        result.style.color = "#424242";
        one.style.backgroundColor = "#F7F8FB";
        one.style.color = "#19ACFF";
        clearBtn.style.backgroundColor = "#F7F8FB";
        clearBtn.style.color = "#19ACFF";
        two.style.backgroundColor = "#F7F8FB";
        two.style.color = "#19ACFF";
        three.style.backgroundColor = "#F7F8FB";
        three.style.color = "#19ACFF";
        four.style.backgroundColor = "#F7F8FB";
        four.style.color = "#19ACFF";
        five.style.backgroundColor = "#F7F8FB";
        five.style.color = "#19ACFF";
        six.style.backgroundColor = "#F7F8FB";
        six.style.color = "#19ACFF";
        seven.style.backgroundColor = "#F7F8FB";
        seven.style.color = "#19ACFF";
        eight.style.backgroundColor = "#F7F8FB";
        eight.style.color = "#19ACFF";
        nine.style.backgroundColor = "#F7F8FB";
        nine.style.color = "#19ACFF";
        zero.style.backgroundColor = "#F7F8FB";
        zero.style.color = "#19ACFF";
        dot.style.backgroundColor = "#F7F8FB";
        dot.style.color = "#19ACFF";
        plus.style.backgroundColor = "#F7F8FB";
        plus.style.color = "#19ACFF";
        minus.style.backgroundColor = "#F7F8FB";
        minus.style.color = "#19ACFF";
        equal.style.backgroundColor = "#F7F8FB";
        equal.style.color = "#19ACFF";
        multiply.style.backgroundColor = "#F7F8FB";
        multiply.style.color = "#19ACFF";
        divider.style.backgroundColor = "#F7F8FB";
        divider.style.color = "#19ACFF";
        backspace.style.backgroundColor = "#F7F8FB";
        backspace.style.color = "#19ACFF";
    
        clearBtn.addEventListener("mouseover", () => {
            clearBtn.style.backgroundColor = "#19ACFF"; //*blue
            clearBtn.style.color = "#F7F8FB";
        })
        clearBtn.addEventListener("mouseout", () => {
            clearBtn.style.backgroundColor = "#F7F8FB";
            clearBtn.style.color = "#19ACFF";
        })
    
        one.addEventListener("mouseover", () => {
            one.style.color = "#F7F8FB";
            one.style.backgroundColor = "#19ACFF"; //*blue
        })
        one.addEventListener("mouseout", () => {
            one.style.color = "#19ACFF";
            one.style.backgroundColor = "#F7F8FB";
        })
    
        two.addEventListener("mouseover", () => {
            two.style.color = "#F7F8FB";
            two.style.backgroundColor = "#19ACFF"; //*blue
        })
        two.addEventListener("mouseout", () => {
            two.style.color = "#19ACFF";
            two.style.backgroundColor = "#F7F8FB";

        })
        three.addEventListener("mouseover", () => {
            three.style.color = "#F7F8FB";
            three.style.backgroundColor = "#19ACFF"; //*blue
        })
        three.addEventListener("mouseout", () => {
            three.style.color = "#19ACFF";
            three.style.backgroundColor = "#F7F8FB";

        })
        four.addEventListener("mouseover", () => {
            four.style.color = "#F7F8FB";
            four.style.backgroundColor = "#19ACFF"; //*blue
        })
        four.addEventListener("mouseout", () => {
            four.style.color = "#19ACFF";
            four.style.backgroundColor = "#F7F8FB";

        })
        five.addEventListener("mouseover", () => {
            five.style.color = "#F7F8FB";
            five.style.backgroundColor = "#19ACFF"; //*blue
        })
        five.addEventListener("mouseout", () => {
            five.style.color = "#19ACFF";
            five.style.backgroundColor = "#F7F8FB";

        })
        six.addEventListener("mouseover", () => {
            six.style.color = "#F7F8FB";
            six.style.backgroundColor = "#19ACFF"; //*blue
        })
        six.addEventListener("mouseout", () => {
            six.style.color = "#19ACFF";
            six.style.backgroundColor = "#F7F8FB";

        })
        seven.addEventListener("mouseover", () => {
            seven.style.color = "#F7F8FB";
            seven.style.backgroundColor = "#19ACFF"; //*blue
        })
        seven.addEventListener("mouseout", () => {
            seven.style.color = "#19ACFF";
            seven.style.backgroundColor = "#F7F8FB";

        })
        eight.addEventListener("mouseover", () => {
            eight.style.color = "#F7F8FB";
            eight.style.backgroundColor = "#19ACFF"; //*blue
        })
        eight.addEventListener("mouseout", () => {
            eight.style.color = "#19ACFF";
            eight.style.backgroundColor = "#F7F8FB";

        })
        nine.addEventListener("mouseover", () => {
            nine.style.color = "#F7F8FB";
            nine.style.backgroundColor = "#19ACFF"; //*blue
        })
        nine.addEventListener("mouseout", () => {
            nine.style.color = "#19ACFF";
            nine.style.backgroundColor = "#F7F8FB";

        })
        zero.addEventListener("mouseover", () => {
            zero.style.color = "#F7F8FB";
            zero.style.backgroundColor = "#19ACFF"; //*blue
        })
        zero.addEventListener("mouseout", () => {
            zero.style.color = "#19ACFF";
            zero.style.backgroundColor = "#F7F8FB";

        })
        dot.addEventListener("mouseover", () => {
            dot.style.color = "#F7F8FB";
            dot.style.backgroundColor = "#19ACFF"; //*blue
        })
        dot.addEventListener("mouseout", () => {
            dot.style.color = "#19ACFF";
            dot.style.backgroundColor = "#F7F8FB";

        })
        backspace.addEventListener("mouseover", () => {
            backspace.style.color = "#F7F8FB";
            backspace.style.backgroundColor = "#19ACFF"; //*blue
        })
        backspace.addEventListener("mouseout", () => {
            backspace.style.color = "#19ACFF";
            backspace.style.backgroundColor = "#F7F8FB";

        })
        multiply.addEventListener("mouseover", () => {
            multiply.style.color = "#F7F8FB";
            multiply.style.backgroundColor = "#19ACFF"; //*blue
        })
        multiply.addEventListener("mouseout", () => {
            multiply.style.color = "#19ACFF";
            multiply.style.backgroundColor = "#F7F8FB";

        })
        divider.addEventListener("mouseover", () => {
            divider.style.color = "#F7F8FB";
            divider.style.backgroundColor = "#19ACFF"; //*blue
        })
        divider.addEventListener("mouseout", () => {
            divider.style.color = "#19ACFF";
            divider.style.backgroundColor = "#F7F8FB";

        })
        plus.addEventListener("mouseover", () => {
            plus.style.color = "#F7F8FB";
            plus.style.backgroundColor = "#19ACFF"; //*blue
        })
        plus.addEventListener("mouseout", () => {
            plus.style.color = "#19ACFF";
            plus.style.backgroundColor = "#F7F8FB";

        })
        minus.addEventListener("mouseover", () => {
            minus.style.color = "#F7F8FB";
            minus.style.backgroundColor = "#19ACFF"; //*blue
        })
        minus.addEventListener("mouseout", () => {
            minus.style.color = "#19ACFF";
            minus.style.backgroundColor = "#F7F8FB";

        })
        equal.addEventListener("mouseover", () => {
            equal.style.color = "#F7F8FB";
            equal.style.backgroundColor = "#19ACFF"; //*blue
        })
        equal.addEventListener("mouseout", () => {
            equal.style.color = "#19ACFF";
            equal.style.backgroundColor = "#F7F8FB";

        })

    } else {
        whiteMode.innerHTML = "◑";
        location.reload()
    }



})