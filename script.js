let basicButton = document.querySelector(".basic");
let basicDropdown = document.querySelector(".basic-dropdown");
let basicDropdownHide = true;
let threeLinesButton = document.querySelector(".three-lines");
let threeLinesDropdown = document.querySelector(".three-lines-dropdown");
let threeLinesDropdownHide = true;
let actionButton = document.querySelector(".action-button");
let outputFieldInput = document.querySelector(".output-field-input");

basicButton.addEventListener("click", () => {
    if (basicDropdownHide) {
        basicDropdown.style.display = "block";
        basicButton.style.backgroundColor = "rgb(200, 200, 200)";
        threeLinesDropdown.style.display = "none";
        threeLinesButton.style.backgroundColor = "transparent";
        basicDropdownHide = false;
        threeLinesDropdownHide = true;
    } else {
        basicDropdown.style.display = "none";
        basicButton.style.backgroundColor = "transparent";
        basicDropdownHide = true;
    }
});

threeLinesButton.addEventListener("click", () => {
    if (threeLinesDropdownHide) {
        threeLinesDropdown.style.display = "block";
        threeLinesButton.style.backgroundColor = "rgb(200, 200, 200)";
        basicDropdown.style.display = "none";
        basicButton.style.backgroundColor = "transparent";
        basicDropdownHide = true;
        threeLinesDropdownHide = false;
    } else {
        threeLinesDropdown.style.display = "none";
        threeLinesButton.style.backgroundColor = "transparent";
        threeLinesDropdownHide = true;
    }
});

actionButton.addEventListener("click", () => {
    outputFieldInput.value = eval(outputFieldInput.value);
});

function delBtn() {
    outputFieldInput.value = "";
}

function valueInInputField(value) {
    outputFieldInput.value += value;
}

document.addEventListener("keypress", function(event) {
    if (event.keyCode === "Enter") {
        event.preventDefault();
        outputFieldInput.value = eval(outputFieldInput.value);
    }
});

document.addEventListener("click", () => {
    outputFieldInput.focus();
});

