import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { bindActionCreators } from "redux";
import TextField from 'material-ui/TextField';
import Header from "../components/header/Header";
import { getPostById } from '../actions/post-actions';
import { Add, Star, Comment, Send } from 'material-ui-icons';
import { sendNewComment, getCommentsByPostId, updateComment } from '../actions/comment-actions';
import { CardActions, IconButton, Typography, Paper } from 'material-ui';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

import EditComment from '../components/comment/edit-comment';

import './post-data.css';

class PostData extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            editComment: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onEditComment = this.onEditComment.bind(this);
        this.setEditComment = this.setEditComment.bind(this);
        this.onEditSave = this.onEditSave.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillMount() {
        this.props.getPostById(this.props.match.params.postId);
        this.props.getCommentsByPostId(this.props.match.params.postId);
    }

    handleSubmit(event) {
        event.preventDefault();

        const params = {
            timestamp: new Date().getTime(),
            body: event.target.Comments.value,
            parentId: this.props.post.id,
            author: 'I'
        };

        this.props.sendNewComment(params);

        event.target.Comments.value = '';
    }

    setEditComment(comment) {
        this.setState({ open: true, editComment: comment });
    }

    onEditComment(text) {
        this.setState((state) => ({ ...state, editComment: { ...state.editComment, body: text } }));
    }

    onEditSave() {
        this.props.updateComment(this.state.editComment);
        this.setState({ open: false, editComment: {} });
    }

    handleClose() {
        this.setState({ open: false, editComment: {} });
    }

    render() {
        const { post, comments } = this.props;

        return (
            <Fragment>
                <section>
                    <Header title='List of posts' />
                    <Paper className="post-data" elevation={4}>
                        <Typography className="title" variant="headline" component="h1">
                            {post.title}
                        </Typography>
                        <Typography className="author" component="h4">
                            {post.author}
                        </Typography>
                        <Typography className="category" component="h4">
                            {post.category}
                        </Typography>
                        <Typography className="body" component="p">
                            {post.body}
                        </Typography>
                        <CardActions className="card-icons">
                            <IconButton aria-label="Star" onClick={this.handleOpen}>
                                <Typography component="p" noWrap>
                                    {post.voteScore}
                                </Typography>
                                <Star />
                            </IconButton>
                            <IconButton aria-label="Comments">
                                <Typography component="p" noWrap>
                                    {post.commentCount}
                                </Typography>
                                <Comment />
                            </IconButton>
                            <Typography className="register-date" component="p">
                                <Moment format="DD/MM/YYYY" >
                                    {post.timestamp}
                                </Moment>
                            </Typography>
                            <IconButton>
                                <Add />
                            </IconButton>
                        </CardActions>
                    </Paper>
                </section>
                <Paper className="post-data comments" elevation={4}>
                    {
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
                                <button onClick={() => this.setEditComment(comment)}>edit</button>
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
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.postsReducer.post,
        comments: state.commentsReducer.comments
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostById,
    getCommentsByPostId,
    sendNewComment,
    updateComment
}, dispatch);

PostData.propTypes = {
    getPostById: PropTypes.func,
    getCommentsByPostId: PropTypes.func,
    sendNewComment: PropTypes.func,
    match: PropTypes.object,
    comments: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostData)