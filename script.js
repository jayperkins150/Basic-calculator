function calculate(operation) {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers"
    } else {
        switch (operation) {
            case "add":
                result = `${number1} + ${number2} = ${number1 + number2}`;
                break;

            case "subtract":
                result = `${number1} - ${number2} = ${number1 - number2}`;
                break;

            case "multiply":
                result = `${number1} x ${number2} = ${number1 * number2}`;
                break;

            case "divide":
                if (number2 === 0) {
                    result = "Error: This calculation cannot be performed"; 
                } else {
                    result = `${number1} ÷ ${number2} = ${number1 / number2}`;
                }
                break;
            default:
                result = "Error: This calculation cannot be performed";
        }
    }
    
    // Print the result on the page
    document.getElementById("result").innerText = result;
}