import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest, searchProductRequest } from '../../actions/index';
// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit
//   }
// });

class MyButton extends Component{
  constructor(props){
    super(props)
    this.state={
      propsDemo:PropTypes.object.isRequired,
    }
  }
  onDelete = (id) => { 
    var {onDeleteProduct,productId} = this.props;
    console.log(productId);
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            onDeleteProduct(productId);
            
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            });
        } else {
            swal("Your imaginary file is safe!");
        }
    });
}
  render(){
    var { productId} = this.props;
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
      if(productId!==undefined){
        return (
          <div>
            <Link to={`/product/${productId}/edit`} >
              <Button size="small" variant="fab" color="primary" aria-label={this.props.aria_label} className={this.state.propsDemo.button}>
                <EditIcon>edit_icon</EditIcon>
              </Button>
            </Link> 
          </div>
        );
      }else return (
      <div>
        <Button size="small" variant="fab" color="primary" aria-label={this.props.aria_label} className={this.state.propsDemo.button}>
          <EditIcon>edit_icon</EditIcon>
        </Button>
      </div>);
    }
    if(this.props.aria_label==='DELETE'){
      return (
        <div>
          <Button  size="small" onClick={this.onDelete} variant="fab" color="primary" aria-label={this.props.aria_label} className={this.state.propsDemo.button}>
             <DeleteIcon/>
          </Button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
      products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
      fetchAllProducts: () => {
          dispatch(actFetchProductsRequest());
      },
      onDeleteProduct: (id) => {
          dispatch(actDeleteProductRequest(id));
      },
      searchProduct: (keywork) => {
          dispatch(searchProductRequest(keywork))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyButton);
// export default withStyles(styles)(MyButton);
