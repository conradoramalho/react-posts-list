import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from '../components/header/Header';
import PostCard from '../components/post-card/PostCard'
import Grid from 'material-ui/Grid';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getPostCategory } from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.getPostCategory(this.props.match.params.category);
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

function mapStateToProps({ postsReducer }) {
    const { posts } = postsReducer;
    return { posts }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostCategory
}, dispatch);

PostList.propTypes = {
    getPostsCategory: PropTypes.func,
    posts: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)