import React from 'react';
import ClickCounter from './ClickCounter';

const App = () => {
    const printCounter = (currentValue) => {
        console.log(currentValue);
    }


    return (
        <div>
            <ClickCounter onCounterChange={printCounter}/>
        </div>
    )
};


export default App;