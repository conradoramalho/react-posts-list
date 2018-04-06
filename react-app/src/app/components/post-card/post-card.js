import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Grid, IconButton, Typography } from 'material-ui';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Delete, Comment } from 'material-ui-icons';
import Evaluation from '../evaluation/evaluation';

import './post-card.css';
import { deletePost } from '../../actions';

class PostCard extends PureComponent {
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

export default connect('', mapDispatchToProps)(PostCard);