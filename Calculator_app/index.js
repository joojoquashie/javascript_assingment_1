const display = document.getElementById("display");

// const button = document.getElementsByTagName("button");

function appendToDisplay(input) {
    // take display element, access it's value, append it with += our input
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}