import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Grid, IconButton, Typography } from 'material-ui';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Delete, Comment } from 'material-ui-icons';
import Evaluation from '../evaluation/evaluation';
import EditPost from '../edit-post/edit-post'

import './post-card.css';
import { deletePost } from '../../actions';

class PostCard extends PureComponent {
  state = {
    openModal: false
  };

  static propTypes = {
    setEvaluation: PropTypes.func,
    post: PropTypes.shape({
      id: PropTypes.string
    }),
    deletePost: PropTypes.func,
  };

  deletePost = () => {
    this.props.deletePost(this.props.post.id);
  }

  closeModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    const { post } = this.props;
    const { openModal } = this.state;

    return (
      <section className="post-card">
        {
          post &&
          <Card key={post.id}>
            <CardContent>
              <EditPost post={post} open={openModal} closeModal={this.closeModal} />
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
              <Evaluation postId={post.id} voteScore={post.voteScore} />
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
              <button onClick={() => this.setState({ openModal: true })}>
                Editar
              </button>
            </CardActions>
          </Card>
        }
      </section >
    );
  }
}

const mapDispatchToProps = {
  deletePost
};

export default connect(null, mapDispatchToProps)(PostCard);