import React, {Component} from 'react';
import CardList from "./CardList";
import {robots} from './robots';
import SearchBox from './SearchBox';

//STATE >> props

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange(event){

  }

  render () {
    return(
      <div className='tc'>
        <h1>H1</h1>
        <SearchBox searchChange={this.onSearchChange()}/>
        <CardList robots={this.state.robots}/>
      </div>
    )
  }
}

export default App;