import React, { useState } from 'react';

const Spores = () => {
    const [array, setArray] = useState([]);

    function SendArray(inputValue) {
        const newArray = inputValue.split(',').map(Number);
        setArray(newArray);
    }

    const pairSpores = (sporeIds) => {
        let numberOfPairs = 0;

        for (let i = 0; i < sporeIds.length; i++) {
            if (sporeIds[i] !== null) {
                for (let j = i + 1; j < sporeIds.length; j++) {
                    if (sporeIds[i] === sporeIds[j]) {
                        numberOfPairs++;
                        sporeIds[j] = null;
                        break;
                    }
                }
                sporeIds[i] = null;
            }
        }
        console.log(numberOfPairs);
        return numberOfPairs;
    }

    let result = pairSpores(array);
    console.log(result);

    return (
        <div>
            <h3 className='text-center font-weight-bold text-secondary mb-4 mt-5'> Pairing spores </h3>
            <div className="container d-flex justify-content-center h-100 align-items-center">
                <div className="form-row">
                    <div className="col-md-12">
                        <div 
                            className=' mb-2 text-badge text-bold text-center text-wrap'
                            >Insert a number of Spores separated by commas</div>
                        <input
                            type="text"
                            placeholder="Enter here..."
                            onChange={(e) => SendArray(e.target.value)}
                            className="col-md-8 font-italic  form-control rounded  "
                        ></input>
                    </div>
                    <div className='text-center'>
                        <p className='lead font-weight-bold'>
                        Number of pairs: {result}<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spores;