function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
//       takes the math symbol used and makes everything work together
function operate(operator, firstArg, secondArg){
    switch (operator){
        case '+':
            return add(firstArg,secondArg);
            break;
        case '-':
            return subtract(firstArg,secondArg);
            break;
        case 'x':
            return multiply(firstArg,secondArg);
            break;
        case '*':   
            return multiply(firstArg,secondArg);
            break;
        case '/':
            return divide(firstArg,secondArg);
            break;
        }
    }

    document.querySelectorAll('.operatorBtn').forEach(item => {
        item.addEventListener('click', (event) => {
                updateOperator(item.textContent);
            })
    }),
// Call a function and save the return value in x:
var x = myFunction(4, 3);

function myFunction(a, b) {
  // Return the product of a and b
  return a * b;
}