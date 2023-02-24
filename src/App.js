import React from 'react';
import Login from './Login';

const App = () => {
    const loginDataHandler = (loginData) => {
        const userData = {
            ...loginData,
            userid : Math.random().toString()
        }
        console.log(userData)
    }

    return (
        <div>
            <Login onLogin={loginDataHandler}/>
        </div>
    )
};


export default App;