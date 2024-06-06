import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-calculator-widget',
  templateUrl: './calculator-widget.component.html',
  styleUrls: ['./calculator-widget.component.css']
})
export class CalculatorComponent implements OnChanges {
  @Input() theme: 'light' | 'dark' = 'light';

  displayValue = '0';
  buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];
  private currentInput = '';
  private operator: string | null = null;
  private firstOperand: number | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['theme']) {
      this.updateTheme(changes['theme'].currentValue);
    }
  }

  onButtonClick(button: string) {
    if (button === 'C') {
      this.clear();
    } else if (button === '=') {
      this.calculate();
    } else if (['/', '*', '-', '+'].includes(button)) {
      this.setOperator(button);
    } else {
      this.appendNumber(button);
    }
  }

  clear() {
    this.displayValue = '0';
    this.currentInput = '';
    this.operator = null;
    this.firstOperand = null;
  }

  calculate() {
    if (this.operator && this.firstOperand !== null && this.currentInput) {
      const secondOperand = parseFloat(this.currentInput);
      let result: number | undefined;
      switch (this.operator) {
        case '/':
          result = this.firstOperand / secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '+':
          result = this.firstOperand + secondOperand;
          break;
      }
      this.displayValue = result !== undefined ? result.toString() : 'Error';
      this.currentInput = '';
      this.firstOperand = null;
      this.operator = null;
    }
  }

  setOperator(operator: string) {
    if (this.currentInput) {
      this.firstOperand = parseFloat(this.currentInput);
      this.currentInput = '';
    }
    this.operator = operator;
  }

  appendNumber(number: string) {
    if (this.currentInput === '0' && number !== '.') {
      this.currentInput = number;
    } else {
      this.currentInput += number;
    }
    this.displayValue = this.currentInput;
  }

  private updateTheme(theme: 'light' | 'dark') {
    this.theme = theme;
  }
}
