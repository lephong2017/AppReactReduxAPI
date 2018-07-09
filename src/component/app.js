import React, { Component } from 'react';
import {connect} from 'react-redux';
let actions = require('../action/index')
var abc=[];
export  class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:abc
    }
    this.check =this.check.bind(this);
  }

  componentWillMount(){
    this.props.fetchDev();
  }

  check(){
    if(abc.length >1){
      this.setState({data:abc});
      console.log("start");
      console.log(this.state.data);
      console.log("end");
    }
  }
  

  renderDev(dev){
    return (
      <div className="dev-card">
        <h4 className="dev-title" key={dev.customerId}>  <p >{dev.customerName}</p></h4>
	    </div> 
    )

  }

  render() {
    let {devs} = this.props
    if(devs.isFetching === true){
      return <p>Loading</p>
    }
    else if(devs.isFetching === false && devs.devsArray.length >= 1){
        abc=devs.devsArray;
        console.log(abc);
      return(
        <div>
			<div className="dev-list">
        { devs.devsArray.map(this.renderDev)}
			</div>
		</div>
    )
    }
    else{
      return(
      <p>I dont know oooo</p>
      )
    }
  }
  
}



  export default connect(
    (state)=>{
        return state;
    },actions)(App)
