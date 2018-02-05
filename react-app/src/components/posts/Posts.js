import React, { Component, Fragment } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import StarIcon from 'material-ui-icons/Star';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CommentIcon from 'material-ui-icons/Comment';
import Moment from 'react-moment';
import './Posts.css';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

import { setEvaluation } from '../../actions';

import TextField from 'material-ui/TextField';

export default class Post extends Component {
    state = {
        open: false,
        evaluation: 0
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSave = () => {
        const evaluation = this.state.evaluation;
        setEvaluation(evaluation);
        this.setState({ open: false });
    }

    handleChange = () => event => {
        this.setState({ evaluation: event.target.value });
    }

    render() {
        const { post } = this.props;

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
                                    <StarIcon />
                                </IconButton>
                                <IconButton aria-label="Comments">
                                    <Typography component="p" noWrap>
                                        {post.commentCount}
                                    </Typography>
                                    <CommentIcon />
                                </IconButton>
                                <Typography className="register-date" component="p">
                                    <Moment format="YYYY/MM/DD" >
                                        {post.timestamp}
                                    </Moment>
                                </Typography>
                                <IconButton>
                                    <AddIcon />
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
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Evaluation"
                            type="number"
                            value={this.state.evaluation}
                            onChange={this.handleChange()}
                        />
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