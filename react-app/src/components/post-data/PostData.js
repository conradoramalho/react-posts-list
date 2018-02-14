import React, { Component, Fragment } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Grid, Button, IconButton, Typography } from 'material-ui';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
    Add,
    Star,
    ThumbDown,
    ThumbUp,
    Comment
} from 'material-ui-icons';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

import './PostData.css';
import { getPost, getComments } from '../../actions';

class PostData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            evaluation: 0
        };
    }

    handleDown = () => {
        this.setState({ evaluation: 'downVote' });
    }

    handleUp = () => {
        this.setState({ evaluation: 'upVote' });
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false, evaluation: '' });
    }

    handleSave = () => {
        const evaluation = this.state.evaluation;
        if (evaluation) {
            this.props.setEvaluation(this.props.post.id, evaluation);
            this.setState({ open: false });
        }
    }

    componentWillMount = () => {
        this.props.getPost(this.props.match.params.postId);
        this.props.getComments(this.props.match.params.postId);
    }

    render() {
        const { post, comments } = this.props;

        return (
            <Fragment>
                <div>
                    {
                        post &&
                        <Card key={post.id}>
                            <CardContent>
                                <div className="header-card">
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography className="category">{post.category}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className="author">{post.author}</Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Typography className="title" type="headline" component="h2">
                                    {post.title}
                                </Typography>
                                <Grid container wrap="nowrap">
                                    <Grid item xs zeroMinWidth>
                                        <Typography component="p" noWrap>
                                            Text: {post.body}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
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
                        </Card>
                    }
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Evaluation</DialogTitle>
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
                        <Button onClick={this.handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPost,
    getComments
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostData)