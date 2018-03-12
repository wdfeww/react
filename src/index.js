import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card'; nepotrebujem import lebo ho budem pouzivat len v CardList.js
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';  // davam do zatvoriek pretoze v robots.js exportujem objekt ktory sa vola robots


ReactDOM.render( <CardList robots={robots}/>, document.getElementById('root'));
registerServiceWorker();
