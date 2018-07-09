import React, { Component } from 'react';
import MyInput from './DemoInput.js';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
// const styles = theme => ({
//   margin: {
//     margin: theme.spacing.unit,
//   },
// });
class MyForm extends Component{
  constructor(props){
    super(props)
    this.state={
        classes:PropTypes.object.isRequired,
        idInput:[
          {title: "Họ và tên", contents:"Hôm nay tôi rất vui"},
          {title: "Ngày sinh", contents:"Hôm nay tôi rất vui"},
          {title: "Sở thích", contents:"Hôm nay tôi rất vui"},
        ]
    }
  }
  render(){
    return (
      <div>
        <FormControl className={this.state.classes.margin}>
          {
            this.state.idInput.map(function(e,index){
              return <MyInput nameLabelInput={e.title} key={index}/>
            })
          }
        </FormControl>
      </div>
    );
  }
}
export default MyForm;
