import {DropdownButton,MenuItem} from 'react-bootstrap';
import React, { Component } from 'react';
import '../lib-css/dropdown-btn.css';
import { connect } from 'react-redux';
import { actGetProductRequestByCateID } from '../../actions/index';

class MyDropdownList extends Component{
    constructor(props){
        super(props)
        this.handleSelectValueOption = this.handleSelectValueOption.bind(this);
    }

    handleSelectValueOption(cateId){
        console.log(cateId+" is category click");
        this.props.onGetProductByCateId(cateId);
    }

    render(){
        var {listCate} = this.props; 
        return(
            <div>
                    <DropdownButton
                        bsStyle={this.props.cateButton.toLowerCase()}
                        title={this.props.title}
                        key={this.props.id}
                        bsSize="small"
                        style={{ maxHeight: "158px" }}
                        id={`dropdown-basic-${this.props.id}`}
                        onSelect={this.handleSelectValueOption}

                        >
                        {
                            listCate.map(function(obj,index){
                               return( <MenuItem eventKey={obj.productCategoryCode} key={index} >
                                    {obj.productCategoryDescription}
                                </MenuItem>)
                            })
                        }
                        
                    </DropdownButton>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProductByCateId : (id) => {
            dispatch(actGetProductRequestByCateID(id));
        }
    }
} 

export default connect(null,mapDispatchToProps)(MyDropdownList);