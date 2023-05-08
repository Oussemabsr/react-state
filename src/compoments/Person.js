import React, { Component } from 'react'

export default class Person extends Component {
  constructor(props) {
		console.log("component init");
		super(props);
		this.person = { fullName:"Oussema" ,
     bio:"Developper" ,
      profession:"Javascript" ,
       imgSrc:"https://img.freepik.com/premium-vector/avatar-profile-colorful-illustration-2_549209-82.jpg"

     }
     this.state={count :0}
	}
  componentDidMount(){
    setInterval(() => {
      this.setState(prevState=>({
        count:prevState.count+1
      }))
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.state)
  }
  render() {
    return (
      <div>
        <h2>{this.person.fullName}</h2>
        <h2>{this.person.bio}</h2>
        <h2>{this.person.profession}</h2>
        <img src={this.person.imgSrc} alt="my-pic" />
        <div>
          counter:{this.state.count}
        </div>
      </div>
    )
  }
}
