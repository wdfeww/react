import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card'; nepotrebujem import lebo ho budem pouzivat len v CardList.js
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import {robots} from './robots';  // davam do zatvoriek pretoze v robots.js exportujem objekt ktory sa vola robots
import App from './containers/App';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
