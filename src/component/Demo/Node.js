
import React, { Component } from 'react';

class Node extends Component{
  
    render(){
        return(
            <div>
              {this.props.children}
            </div>
        )
    }
}
export default Node;