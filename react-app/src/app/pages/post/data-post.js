import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { CardActions, IconButton, Typography, Paper } from 'material-ui'
import { Delete, Comment } from 'material-ui-icons'
import Header from '../../components/header/Header'
import { getPostById, deletePost } from '../../actions/post-actions'
import Evaluation from '../../components/evaluation/evaluation'
import CommentList from '../../components/comment/comment-list'
import EditPost from '../../components/edit-post/edit-post'

import './data-post.css';

class PostData extends PureComponent {
  state = {
    openModal: false
  }

  static propTypes = {
    post: PropTypes.object,
    getPostById: PropTypes.func,
    sendNewComment: PropTypes.func,
    match: PropTypes.object,
    comments: PropTypes.array,
    updateComment: PropTypes.func,
    loading: PropTypes.bool,
    hasPost: PropTypes.bool,
    deletePost: PropTypes.func,
    history: PropTypes.array,
  };

  componentDidMount() {
    this.props.getPostById(this.props.match.params.postId);
  }

  deletePost = (postId) => {
    this.props.deletePost(postId);
    this.props.history.push('/')
  }

  closeModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    const { post, loading } = this.props;

    return (
      <Fragment>
        {
          loading ?
            (<p>Carregando</p>) :
            (
              !post.id ?
                (
                  <div>
                    <h2>
                      Página não encontrada
                    </h2>
                    <Link to='/' >Voltar</Link>
                  </div>
                ) :
                (
                  <Fragment>
                    <EditPost open={this.state.openModal} closeModal={this.closeModal}></EditPost>
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
                          <Evaluation postId={post.id} voteScore={post.voteScore} />
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
                          <IconButton onClick={() => this.deletePost(post.id)}>
                            <Delete />
                          </IconButton>
                          <IconButton onClick={() => this.setState({ openModal: true })}>
                            Editar
                          </IconButton>
                        </CardActions>
                      </Paper>
                    </section>
                    <CommentList postId={post.id} />
                  </Fragment>
                )
            )
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({
  post: postsReducer.post,
  comments: commentsReducer.comments,
  loading: postsReducer.loading
});

const mapDispatchToProps = {
  getPostById,
  deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostData)