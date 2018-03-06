import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { bindActionCreators } from "redux";
import TextField from 'material-ui/TextField';
import Header from "../components/header/Header";
import { getPostById } from '../actions/post-actions';
import { Add, Star, Comment, Send } from 'material-ui-icons';
import { sendNewComment, getCommentsByPostId } from '../actions/comment-actions';
import { CardActions, IconButton, Typography, Paper } from 'material-ui';
import './post-data.css';

class PostData extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
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
                <Paper className="post-data" elevation={4}>
                    {
                        comments.map((comment, index) => (
                            <Fragment key={index} >
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
                            </Fragment>
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
    sendNewComment
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostData)