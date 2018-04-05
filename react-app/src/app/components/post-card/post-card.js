import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Grid, IconButton, Typography } from 'material-ui';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Delete, Star, Comment } from 'material-ui-icons';

import './post-card.css';
import { setPostEvaluation, deletePost } from '../../actions';

class PostCard extends PureComponent {
  state = {
    open: false,
    evaluation: 0
  };

  handleDown = () => {
    this.setState({ evaluation: 'downVote' });
    this.props.setPostEvaluation({ postId: this.props.post.id, evaluation: 'downVote' });
    this.setState({ open: false });
  }

  handleUp = () => {
    this.setState({ evaluation: 'upVote' });
    this.props.setPostEvaluation({ postId: this.props.post.id, evaluation: 'upVote' });
    this.setState({ open: false });
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false, evaluation: '' });
  }

  deletePost = () => {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    const { post } = this.props;

    return (
      <section className="post-card">
        {
          post &&
          <Card key={post.id}>
            <CardContent>
              <Link to={`/${post.category}/${post.id}`}>
                <div className="header-card">
                  <Typography className="title" type="headline" component="h2">
                    {post.title}
                  </Typography>
                </div>
                <Grid container >
                  <Grid item xs={6}>
                    <Typography className="category">{post.category}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className="author">{post.author}</Typography>
                  </Grid>
                </Grid>
                <Grid container wrap="nowrap">
                  <Grid item xs zeroMinWidth>
                    <Typography component="p" noWrap>
                      Text: {post.body}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
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
              <IconButton onClick={this.deletePost}>
                <Delete />
              </IconButton>
            </CardActions>
          </Card>
        }
      </section >
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setPostEvaluation,
  deletePost
}, dispatch);

PostCard.propTypes = {
  setEvaluation: PropTypes.func,
  post: PropTypes.shape({
    id: PropTypes.string
  }),
  setPostEvaluation: PropTypes.func,
  deletePost: PropTypes.func,
}

export default connect('', mapDispatchToProps)(PostCard)