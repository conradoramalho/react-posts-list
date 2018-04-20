import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

class EditPost extends PureComponent {
  state = {
    title: '',
    body: ''
  }

  static getDerivedStateFromProps(nextProps, { title, body }) {
    const newTitle = nextProps.post.title;
    const newBody = nextProps.post.body;

    if (newTitle !== title && newBody !== body) {
      return {
        title: newTitle,
        body: newBody
      }
    }

    return null;
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log('event: ', event.target.body.value);

  }

  handleChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  };



  render() {
    const { post, open } = this.props;

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Edit comment
      </DialogTitle>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <DialogContent>
            <TextField
              id="Title"
              label="Title"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Edit Title"
              fullWidth
              margin="normal"
              value={this.state.title}
              onChange={this.handleChange('title')}
            />
            <TextField
              id="body"
              label="body"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Edit body"
              fullWidth
              margin="normal"
              value={this.state.body}
              onChange={this.handleChange('body')}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="raised" color="primary" type="submit">
              Save
            </Button>
            <Button color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}

EditPost.propTypes = {
  post: PropTypes.object,
  open: PropTypes.bool
};

export default EditPost; 