import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});
class MyInput extends Component{
  constructor(props){
    super(props)
    this.state={
        classes:PropTypes.object.isRequired,
    }
  }
  render(){
    return (
      <div>
        <FormControl className={this.state.classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">{this.props.nameLabelInput}</InputLabel>
          <Input
            id="input-with-icon-adornment"
            // startAdornment={
            //   <InputAdornment position="start">
            //     <AccountCircle />
            //   </InputAdornment>
            // }
          />
        </FormControl>
      </div>
    );
  }
}


export default withStyles(styles)(MyInput);
