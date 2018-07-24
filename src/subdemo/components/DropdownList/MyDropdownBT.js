import {DropdownButton,MenuItem,ButtonToolbar} from 'react-bootstrap';
import React, { Component } from 'react';
import '../lib-css/dropdown-btn.css';
export default class MyDropdownList extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        var {listCate} = this.props; 
        return(
            <div>
                    <DropdownButton
                        bsStyle={this.props.title.toLowerCase()}
                        title={this.props.title}
                        key={this.props.id}
                        bsSize="small"
                        style={{ maxHeight: "58px" }}
                        id={`dropdown-basic-${this.props.id}`}
                        >
                        {
                            listCate.map(function(obj,index){
                                <MenuItem eventKey={index}>{obj.productCategoryCode}</MenuItem>
                            })
                        }
                        
                    </DropdownButton>
            </div>
        );
    }
    

}