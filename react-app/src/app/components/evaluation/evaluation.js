import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, Typography } from 'material-ui';
import { connect } from 'react-redux';
import { Star, ThumbDown, ThumbUp, } from 'material-ui-icons';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import { setPostEvaluation } from '../../actions';

class Evaluation extends PureComponent {
  state = {
    open: false
  }

  static propTypes = {
    setPostEvaluation: PropTypes.func
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false, evaluation: '' });
  }

  handleDown = () => {
    this.props.setPostEvaluation({ postId: this.props.postId, evaluation: 'downVote' });
    this.setState({ open: false });
  }

  handleUp = () => {
    this.props.setPostEvaluation({ postId: this.props.postId, evaluation: 'upVote' });
    this.setState({ open: false });
  }

  render() {
    const { voteScore } = this.props;

    return (
      <Fragment>
        <IconButton aria-label="Star" onClick={this.handleOpen}>
          <Typography component="p" noWrap>
            {voteScore}
          </Typography>
          <Star />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Evaluation
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Set an evaluation about this post.
            </DialogContentText>
            <IconButton aria-label="thumb_down" onClick={this.handleDown}>
              <ThumbDown />
            </IconButton>
            <IconButton aria-label="Star" onClick={this.handleUp}>
              <ThumbUp />
            </IconButton>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  setPostEvaluation
};

export default connect('', mapDispatchToProps)(Evaluation); 