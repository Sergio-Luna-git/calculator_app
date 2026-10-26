import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    substract = '-',
    multiply = '*',
    divide = '/',
}


export const useCalculator = () => {

    const [formula, setformula] = useState('0');
    const [number, setnumber] = useState('0');
    const [previousNumber, setpreviousNumber] = useState('0');

    const lastOperator = useRef<Operator>(undefined);

    useEffect(() => {
        setformula(number)
    }, [number])

    useEffect(() => {
        if (lastOperator.current) {
            const firstFormulaPart = formula.split(' ').at(0)
            setformula(`${firstFormulaPart} ${lastOperator.current} ${number}`)
        } else {
            setformula(number)
        }
    }, [number])

    useEffect(() => {
        const subResult = calculateSubResult();
        setpreviousNumber(`${subResult}`)
    }, [formula])

    const buildNumber = (numberString: string) => {

        if (numberString.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setnumber(number + numberString);
            }

            if (numberString === '0' && number.includes('.')) {
                return setnumber(number + numberString);
            }

            if (numberString != '0' && !number.includes('.')) {
                return setnumber(numberString);
            }
            if (numberString === '0' && !number.includes('.')) return;

        }
        setnumber(number + numberString);
        console.log(numberString)

    }

    const clean = () => {
        setnumber('0');
        setformula('0');
        setpreviousNumber('0');
        lastOperator.current = undefined;
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setnumber(number.replace('-', ''));
        } else {
            return setnumber(number.replace('', '-'));
        }

    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = '';

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        } else {
            temporalNumber = number;
        }

        if (temporalNumber.length > 1) {
            return setnumber(currentSign + temporalNumber.slice(0, -1));
        }
    }

    const setLastNumber = () => {


        if (number.endsWith('.')) {
            setpreviousNumber(number.slice(0, -1));
        }
        setpreviousNumber(number);
        setnumber('0');
    }

    const divide = () => {
        setLastNumber();
        lastOperator.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.multiply;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.add;
    }

    const substractOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.substract;
    }

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return;

        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.substract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;
            default:
                return new Error('Operation ${operation} not implemented');

        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setformula(`${result}`);
    }


    return {
        //Prop
        formula,
        number,
        previousNumber,

        //Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divide,
        multiplyOperation,
        addOperation,
        substractOperation,
        calculateResult
    }
}
