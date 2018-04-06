import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { Typography, Paper } from 'material-ui'
import { Send } from 'material-ui-icons'
import { getCommentsByPostId, sendNewComment, updateComment } from '../../actions/comment-actions'
import EditComment from '../comment/edit-comment'

class CommentList extends PureComponent {
  state = {
    open: false,
    editComment: {}
  }

  static propTypes = {
    getCommentsByPostId: PropTypes.func,
    postId: PropTypes.string,
    comments: PropTypes.array,
    sendNewComment: PropTypes.func,
    updateComment: PropTypes.func
  }

  componentDidMount() {
    this.props.getCommentsByPostId(this.props.postId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const timestamp = new Date().getTime();

    const params = {
      id: timestamp,
      timestamp,
      body: event.target.Comments.value,
      parentId: this.props.postId,
      author: 'anonymous'
    };

    this.props.sendNewComment(params);
    event.target.Comments.value = '';
  }

  setEditComment = (comment) => {
    this.setState({ open: true, editComment: comment });
  }

  onEditComment = (text) => {
    this.setState((state) => ({ ...state, editComment: { ...state.editComment, body: text } }));
  }

  onEditSave = () => {
    this.props.updateComment(this.state.editComment);
    this.setState({ open: false, editComment: {} });
  }

  handleClose = () => {
    this.setState({ open: false, editComment: {} });
  }

  render() {
    const { comments } = this.props;

    return (
      <Fragment>
        <Paper className="post-data comments" elevation={4}>
          {
            comments &&
            comments.map((comment, index) => (
              <div key={index} >
                <Typography component="p">
                  {comment.body}
                </Typography>
                <Typography component="p">
                  {comment.author}
                </Typography>
                <Typography component="p">
                  <Moment format="DD/MM/YYYY" >
                    {comment.timestamp}
                  </Moment>
                </Typography>
                <Button variant="raised" type="button" onClick={() => this.setEditComment(comment)}>
                  edit
                </Button>
              </div>
            ))
          }

          <form onSubmit={(event) => this.handleSubmit(event)}>
            <TextField
              id="Comments"
              label="Comments"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Write a comment!"
              fullWidth
              margin="normal"
            />
            <Button variant="raised" color="primary" type="submit">
              Send
            <Send color="primary" />
            </Button>
          </form>
        </Paper>
        <EditComment
          open={this.state.open}
          comment={this.state.editComment}
          onEdit={this.onEditComment}
          onEditSave={this.onEditSave}
          handleClose={this.handleClose}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ commentsReducer: { comments } }) => ({
  comments
});

const mapDispatchToProps = {
  getCommentsByPostId,
  sendNewComment,
  updateComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);