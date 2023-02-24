import React from 'react';
import Sum from './Sum';

const numbersArray = [5,10,6,9,3,1,4,7,6,9,36];

const App = () => {
    return (
        <div>
            <Sum numbers={numbersArray}/>
        </div>
    )
};


export default App;