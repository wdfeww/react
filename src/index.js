import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greeting={'Hello this is p tag :)'} />, document.getElementById('root'));
registerServiceWorker();
