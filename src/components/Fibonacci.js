import React from 'react'
import FibonacciOpt1 from './FibonacciOpt1'
import FibonacciOpt2 from './FibonacciOpt2'
import FibonacciOpt3 from './FibonacciOpt3'

const Fibonacci = () => {
  return (
    <div>
        <h3 className='text-center font-weight-bold text-secondary mb-4 mt-5'>Fibonacci Functions</h3>
        <div className="container d-flex justify-content-center h-100 align-items-center">
            {/* Fibonacci Components */}
            <div className="row">
                <div className="col-md-4"> 
                    <FibonacciOpt1 />
                </div>
                <div className="col-md-4"> 
                    <FibonacciOpt2 />   
                </div>
                <div className="col-md-4">
                    <FibonacciOpt3 />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fibonacci