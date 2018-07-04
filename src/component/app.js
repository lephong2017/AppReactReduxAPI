import React, { Component } from 'react';
import {connect} from 'react-redux';
import Node from '../component/Demo/Node.js';
import axios from 'axios';
let actions = require('../action/index')
var abc=[];
export  class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      datas: []
    };
    // this.saveObject = this.saveObject.bind(this);
    this.changeState= this.changeState.bind(this);
  }

  
  componentWillMount(){
    this.props.fetchDev();
  } 
  componentDidMount(){
    const self = this;
    axios.get(response);
    self.setState({ datas: response.data });
    
  }

  saveObject(e){
    abc.push(e);
  }
  changeState(){
    this.setState({datas:abc.customerId});
    console.log(this.state.datas);
  }

  render() {
    {console.log(this.state.datas)}
    return(
      <div>
        {/* {
          this.state.datas.map((e,i)=>{
            <p key={i}>e.customerId</p>
          })
        } */}
        abcd
      </div>
    )
  }


}



  export default connect(
    (state)=>{
        return state
    },actions)(App)
