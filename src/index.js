import React from 'react';
import reactDom from 'react-dom/client';
import Rooter from './Rooter';

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<Rooter/>);