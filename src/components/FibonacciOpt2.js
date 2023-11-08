import React, {useState} from 'react'

const FibonacciOpt2 = () => {
    const [number, setNumber] = useState();
    const ChooseNumber = (number) => {
        setNumber(number);
    }

    // Fibonacci Function - Second Option
    const FibonacciOption2 = (n) => {
        let fibonacci = [0,1];
        for (let i = 2; i <= n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2]
        }
        return fibonacci[n];
    }

return (
    <div className='container card text-center'>
            <div className='card-body'>
                <h5 className='card-title'> Option 2 </h5>
                <div className='text-secondary'> Choose a number to test the Fibonacci Function </div>
                <input 
                    className='form-control-sm' 
                    type="number" 
                    onChange={e => ChooseNumber(e.target.value)} 
                    placeholder='Insert a number...'
                    ></input>
            <div className='card-text lead text-success font-weight-bold'> Number ➡️ {FibonacciOption2(number)}</div>
        </div>
    </div>
)
}

export default FibonacciOpt2