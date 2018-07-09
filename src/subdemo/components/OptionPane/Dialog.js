import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import MyButton from '../Button/btn.js';
import MyInput from '../Form/DemoInput';
export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddProduct=()=>{
    var msp = this.refs.rmsp.value;
    var tsp = this.refs.rtsp.value;
    var gsp = this.refs.rgsp.value;
    var nsx = this.refs.rnsx.value;
    alert(msp+"-"+tsp+"-"+gsp+"-"+nsx);
  };

  render() {
    return (
      <div>
        <Button aria_label='ADD' onClick={this.handleClickOpen.bind(this)}> Add</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
            <MyInput nameLabelInput="Mã Sản Phẩm"  ref="rmsp"/>
            <MyInput nameLabelInput="Tên Sản Phẩm" ref="rtsp"/>
            <MyInput nameLabelInput="Giá Sản Phẩm" ref="rgsp"/>
            <MyInput nameLabelInput="Ngày Sản Xuất" ref="rnsx"/>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAddProduct} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}