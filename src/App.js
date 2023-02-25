import React,{useState} from 'react';
import ClickCounter from './ClickCounter';

const App = () => {
    const[showCounter,setShowCounter] = useState(true);

    const toggleCounterHandler = () =>{
        setShowCounter((s)=>!s)
    }
    return (
        <div>
            <button type='button' onClick={toggleCounterHandler}>Toggle Counter Component</button>
            {showCounter && <ClickCounter/>}
        </div>
    )
};


export default App;