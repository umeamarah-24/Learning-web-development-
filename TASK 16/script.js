let display = document.getElementById("display");
function addNumber(number) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (number === ".") {
        let parts = display.value.split(/[+\-*/]/);
        if (parts[parts.length - 1].includes(".")) {
            return;
        }
    }
    display.value += number;
}
function addOperator(operator) {
    let last = display.value.slice(-1);
    if (display.value === "" || "+-*/".includes(last)) {
        return;
    }
    display.value += operator;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        if (display.value === "" || /[+\-*/.]$/.test(display.value)) {
            return;
        }
        let result = Function("return " + display.value)();
        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = Number(result.toFixed(10)).toString();
        }
    } catch {
        display.value = "Error";
    }
}
