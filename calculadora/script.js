class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat (this.previousOperand)
        const current = parseFloat (this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand =''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('pt-br', {maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    } 
}

const numberButtons1 = document.getElementById('data-number1')
const numberButtons2 = document.getElementById('data-number2')
const numberButtons3 = document.getElementById('data-number3')
const numberButtons4 = document.getElementById('data-number4')
const numberButtons5 = document.getElementById('data-number5')
const numberButtons6 = document.getElementById('data-number6')
const numberButtons7 = document.getElementById('data-number7')
const numberButtons8 = document.getElementById('data-number8')
const numberButtons9 = document.getElementById('data-number9')
const numberButtons = document.getElementById('data-number')
const numberButtons0 = document.getElementById('data-number0')

const operationButtons1 = document.getElementById('data-operation1')
const operationButtons2 = document.getElementById('data-operation2')
const operationButtons3 = document.getElementById('data-operation3')
const operationButtons4 = document.getElementById('data-operation4')

const equalsButton = document.getElementById('data-equals')
const deleteButton = document.getElementById('data-delete')
const allClearButton = document.getElementById('data-all-clear')

console.log('numberButtons1', numberButtons1)
console.log('numberButtons2', numberButtons2)
console.log('numberButtons3', numberButtons3)
console.log('numberButtons4', numberButtons4)
console.log('numberButtons5', numberButtons5)
console.log('numberButtons6', numberButtons6)
console.log('numberButtons7', numberButtons7)
console.log('numberButtons8', numberButtons8)
console.log('numberButtons9', numberButtons9)
console.log('numberButtons', numberButtons)
console.log('numberButtons0', numberButtons0)

console.log('operationButtons1', operationButtons1)
console.log('operationButtons2', operationButtons2)
console.log('operationButtons3', operationButtons3)
console.log('operationButtons4', operationButtons4)

console.log('equalsButton', equalsButton)
console.log('deleteButton', deleteButton)
console.log('allClearButton', allClearButton)
console.log('previousOperandTextElementButtons', previousOperandTextElementButtons)
console.log('currentOperandTextElementButtons', currentOperandTextElementButtons)

const previousOperandTextElementButtons = document.getElementById('data-previous-operand')
const currentOperandTextElementButtons = document.getElementById('data-current-operand')

const calculator = new Calculator(previousOperandTextElementButtons, currentOperandTextElementButtons)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})