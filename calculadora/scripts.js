const numberButtons= document.querySelectorAll('[data-number]')
const operationButtons= document.querySelectorAll('[data-operation]')
const equalsButtons= document.querySelector('[data-equals]')
const deleteButtons= document.querySelector('[data-delete]')
const allClearButtons= document.querySelector('[data-all-clear]')
const previousOperandTextElementButtons= document.querySelector('[data-previous-operand]')
const currentOperandTextElementButtons= document.querySelector('[data-current-operand]')

const Calculator= new Calculator(previousOperandTextElement, currentOperandTextElement)