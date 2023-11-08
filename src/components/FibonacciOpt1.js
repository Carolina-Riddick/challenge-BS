import React, { useState } from 'react'

const FibonacciOpt1 = () => {
    const [number, setNumber] = useState();

    const ChooseNumber = (number) => {
        setNumber(number);
    }

    // Fibonacci Function - First Option
    const FibonacciOption1 = (n) => {
        let fibonacciSecuence = [0, 1];
        let resultado;

        if(n <= 0) return fibonacciSecuence[0]
        if(n === 1) return fibonacciSecuence[1]

        for (let i = 2; i <= n; i++) {
            let nextNumber = fibonacciSecuence[i - 1] + fibonacciSecuence[i - 2];
            fibonacciSecuence.push(nextNumber);
            resultado = fibonacciSecuence[i];
        }
        return resultado;
    }

    return (
    <div className='container card text-center'>
            <div className='card-body'>
                <h5 className='card-title'> Option 1</h5>
                <div className='text-secondary'> Choose a number to test the Fibonacci Function </div>
                <input 
                    className='form-control-sm' 
                    type="number" 
                    onChange={e => ChooseNumber(e.target.value)} 
                    placeholder='Insert a number...'
                    ></input>
            <div className='card-text lead text-success font-weight-bold'> Number ➡️ {FibonacciOption1(number)}</div>
        </div>
    </div>
  )
}

export default FibonacciOpt1