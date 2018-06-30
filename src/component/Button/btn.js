import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '../table/Table.js';
const API = 'http://demowebaspnetcore.azurewebsites.net';
const DEFAULT_QUERY = '/api/Customer/getAllCustomer';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class MyButton extends Component{
  constructor(props){
    super(props)
    this.state={
      propsDemo:PropTypes.object.isRequired,
    }
  }
  deleteObject(){
    fetch(API + DEFAULT_QUERY+ this.props.idBtn, {
         method: 'DELETE',
       }).then(response => {
           console.log(response);
       }).then(data=>{console.log(data)})
       .catch(error => console.log(error));
    new Table().componentWillUpdate();
  }
  render(){
    if(this.props.aria_label==='ADD') {
      return (
        <div>
          <Button size="small" variant="fab" color="primary" aria-label={this.props.aria_label} className={this.state.propsDemo.button}>
              <AddIcon />
          </Button>
        </div>
      );
    }
    if(this.props.aria_label==='EDIT'){
      return (
        <div>
          <Button size="small" variant="fab" color="primary" aria-label={this.props.aria_label} className={this.state.propsDemo.button}>
             <Icon>edit_icon</Icon>
          </Button>
        </div>
      );
    }
    if(this.props.aria_label==='DELETE'){
      return (
        <div>
          <Button onClick={this.deleteObject.bind(this)} size="small" variant="fab" color="primary" aria-label={this.props.aria_label} className={this.state.propsDemo.button}>
             <DeleteIcon/>
          </Button>
        </div>
      );
    }
  }
}


export default withStyles(styles)(MyButton);
