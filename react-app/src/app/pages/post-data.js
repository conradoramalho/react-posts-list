import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Header from "../components/header/Header";
import { getPostById } from '../actions/post-actions';
import { getCommentsByPostId } from '../actions/comment-actions';
import { CardActions, IconButton, Typography, Paper } from 'material-ui';
import Moment from 'react-moment';
import { Add, Star, Comment } from 'material-ui-icons';
import './post-data.css';

class PostData extends Component {
    componentWillMount() {
        this.props.getPostById(this.props.match.params.postId);
        this.props.getCommentsByPostId(this.props.match.params.postId);
    }

    render() {
        const { post, comments } = this.props;

        return (
            <div>
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
                            <Moment format="YYYY/MM/DD" >
                                {post.timestamp}
                            </Moment>
                        </Typography>
                        <IconButton>
                            <Add />
                        </IconButton>
                    </CardActions>
                </Paper>
                <Paper className="post-data" elevation={3}>
                    {
                        comments.map(comment => (
                            <Typography key={comment.id} className="body" component="p">
                                {comment}
                            </Typography>
                        ))
                    }
                </Paper>
            </div>
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
    getCommentsByPostId
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostData)