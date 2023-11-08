import React, { useState } from 'react'

const FibonacciOpt3 = () => {
    const [number, setNumber] = useState();
    const ChooseNumber = (number) => {
        setNumber(number);
    }

    // Fibonacci Recursive Function (not good with big numbers) - Third Option
    const FibonacciOption3 = (n = 0) => {  // Default parameter set it in 0 to avoid maximun call stack size exceeded 
        if (n <= 0) return 0; // Neccesary to break the loop
        if (n === 1) return 1;
        return FibonacciOption3(n - 1) + FibonacciOption3(n - 2);
    }

    return (
        <div className='container card text-center'>
                <div className='card-body'>
                    <h5 className='card-title'> Recursive Option</h5>
                    <div className='text-secondary'> Choose a number to test the Fibonacci Function </div>
                    <input 
                        className='form-control-sm' 
                        type="number" 
                        onChange={e => ChooseNumber(e.target.value)} 
                        placeholder='Insert a number...'></input>
                <div className='card-text lead text-success font-weight-bold'> Number ➡️ {FibonacciOption3(number)}</div>
            </div>
        </div>
    )
}

export default FibonacciOpt3