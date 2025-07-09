import { useReducer } from 'react';
import { twMerge } from 'tailwind-merge';
import { Card } from './Card';
import { Button } from './Button';

interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
  overwrite: boolean;
}

type CalculatorAction =
  | { type: 'ADD_DIGIT'; payload: { digit: string } }
  | { type: 'CHOOSE_OPERATION'; payload: { operation: string } }
  | { type: 'CLEAR' }
  | { type: 'DELETE_DIGIT' }
  | { type: 'EVALUATE' };

const initialState: CalculatorState = {
  currentOperand: '0',
  previousOperand: '',
  operation: null,
  overwrite: false,
};

function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload.digit,
          overwrite: false,
        };
      }
      if (action.payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (action.payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${action.payload.digit}`,
      };

    case 'CHOOSE_OPERATION':
      if (state.currentOperand === '' && state.previousOperand === '') {
        return state;
      }
      if (state.previousOperand === '') {
        return {
          ...state,
          operation: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: '',
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload.operation,
        currentOperand: '',
      };

    case 'CLEAR':
      return initialState;

    case 'DELETE_DIGIT':
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: '0',
          overwrite: false,
        };
      }
      if (state.currentOperand === '') return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: '0' };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case 'EVALUATE':
      if (
        state.operation == null ||
        state.currentOperand === '' ||
        state.previousOperand === ''
      ) {
        return state;
      }
      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: '',
        operation: null,
        overwrite: true,
      };

    default:
      return state;
  }
}

function evaluate({ currentOperand, previousOperand, operation }: CalculatorState) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  let result = '';
  switch (operation) {
    case '+':
      result = (prev + current).toString();
      break;
    case '-':
      result = (prev - current).toString();
      break;
    case '*':
      result = (prev * current).toString();
      break;
    case '/':
      result = (prev / current).toString();
      break;
  }
  return result;
}

function formatOperand(operand: string) {
  if (!operand) return '';
  const [integer, decimal] = operand.split('.');
  const formattedInteger = parseInt(integer).toLocaleString('en-US');
  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
}

export function Calculator({ className }: { className?: string }) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <Card className={twMerge("w-full max-w-md mx-auto sm:p-6", className)}>
      <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 text-right text-2xl">
        {formatOperand(state.previousOperand)} {state.operation}{' '}
        {formatOperand(state.currentOperand) || '0'}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Button
          variant="special"
          className="col-span-2"
          onClick={() => dispatch({ type: 'CLEAR' })}
          aria-label="Clear calculator"
        >
          AC
        </Button>
        <Button
          variant="operator"
          onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: { operation: '/' } })}
          aria-label="Divide"
        >
          /
        </Button>
        <Button
          variant="operator"
          onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: { operation: '*' } })}
          aria-label="Multiply"
        >
          *
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '7' } })} aria-label="Number 7">
          7
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '8' } })} aria-label="Number 8">
          8
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '9' } })} aria-label="Number 9">
          9
        </Button>
        <Button
          variant="operator"
          onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: { operation: '-' } })}
          aria-label="Subtract"
        >
          -
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '4' } })} aria-label="Number 4">
          4
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '5' } })} aria-label="Number 5">
          5
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '6' } })} aria-label="Number 6">
          6
        </Button>
        <Button
          variant="operator"
          onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: { operation: '+' } })}
          aria-label="Add"
        >
          +
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '1' } })} aria-label="Number 1">
          1
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '2' } })} aria-label="Number 2">
          2
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '3' } })} aria-label="Number 3">
          3
        </Button>
        <Button variant="special" onClick={() => dispatch({ type: 'EVALUATE' })} aria-label="Equals">
          =
        </Button>
        <Button
          className="col-span-2"
          onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '0' } })}
          aria-label="Number 0"
        >
          0
        </Button>
        <Button onClick={() => dispatch({ type: 'ADD_DIGIT', payload: { digit: '.' } })} aria-label="Decimal point">
          .
        </Button>
        <Button variant="special" onClick={() => dispatch({ type: 'DELETE_DIGIT' })} aria-label="Delete digit">
          DEL
        </Button>
      </div>
    </Card>
  );
}