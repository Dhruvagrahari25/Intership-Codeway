let result = document.getElementById("result");

function Clear() {
    result.value = "";  
}

function display(val) {
    result.value += val;
}

function Del() {
    result.value = result.value.slice(0, result.value.length - 1);
}

function solve(params) {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Invalid Operation!";
    }
}