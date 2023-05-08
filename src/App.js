import React, { Component } from 'react'
import Person from './compoments/Person'

export default class App extends Component {
  constructor(props) {
		console.log("component init");
		super(props);
		this.state = { show: false };
	}
  handleClick = ()=>{this.setState({show:!this.state.show})}
  render() {
    return (
      <div>
       <button onClick={this.handleClick}>click here</button>
        {this.state.show?<Person />:null}
      </div>
    )
  }
}
