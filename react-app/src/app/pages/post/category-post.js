import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import PostCard from '../../components/post-card/post-card'
import { getPostCategory } from '../../actions';

class PostList extends Component {
  state = {
    category: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { category } = nextProps.match.params;

    if (category !== prevState.category) {
      return {
        category
      }
    }

    return null;
  }

  componentDidMount() {
    this.props.getPostCategory(this.state.category);
  }

  componentDidUpdate(prevProps, { category }) {

    if (category !== this.state.category)
      this.props.getPostCategory(this.state.category);

  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header title='List of posts' />
          </Grid>
          {
            this.props.posts && this.props.posts.map(post => (
              <Grid container key={post.id}>
                <Grid item xs={6}>
                  <PostCard post={post} />
                </Grid>
              </Grid>
            ))
          }
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.categoriesReducer.postsCategory.filter(x => !x.deleted)
})


const mapDispatchToProps = {
  getPostCategory
};

PostList.propTypes = {
  getPostsCategory: PropTypes.func,
  getPostCategory: PropTypes.func,
  posts: PropTypes.array,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)