value = "0"
temp = 0
operator = ""
answered = 0
document.getElementById("screenText").innerHTML = value;

function updateScreen() {
    document.getElementById("screenText").innerHTML = value;
}

updateScreen()

function clearScreen() {
    value = "0"
    temp = 0
    answered = 0
    updateScreen()
}

function addNumber(num) {
    if (value === "0" || answered === 1) {
        value = num
        answered = 0
    }
    else {
        value += num
    }
    updateScreen()
}

function point() {
    value+="."
    updateScreen()
}


function operatorChange(op) {
    if (temp === 0) {
        temp = Number(value)
        value = "0"
        operator = op
    }
    else {
        equal()
        operator = op
    }

}

function equal() {
    if (operator === "") {
        value = String(Number(value))
    }
    else if (operator === "+") {
        value = String(temp+Number(value))
        updateScreen()
    }
    else if (operator === "-") {
        value = String(temp-Number(value))
        updateScreen()
    }
    else if (operator === "*") {
        value = String(temp*Number(value))
        updateScreen()
    }
    else if (operator === "/") {
        value = String(temp/Number(value))
        updateScreen()
    }

    console.log("1.",temp,value)

    temp = Number(value)


    console.log("2.",temp,value)

    answered = 1
}