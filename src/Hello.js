import React, { Component } from 'react';  //React.Component je nahradene za Component
import './Hello.css';
import 'tachyons';

class Hello extends Component{
  render() {
    //ak chcem returnut viac riadkov tak musim vlozit content do zatvoriek ()
    return (
      //f1 means font1 a tc textCenter
      <div className="f1 tc">
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default Hello;  //ked pouzijem default tak exportnem len jednu vec teraz hello