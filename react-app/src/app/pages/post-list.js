import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from '../components/header/Header';
import PostCard from '../components/post-card/PostCard'
import Grid from 'material-ui/Grid';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getPostList } from '../actions';

class PostList extends Component {
    async componentDidMount() {
        await this.props.getPostList();
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Header title='List of posts' />
                    </Grid>
                    {
                        posts && (
                            posts.map(post => (
                                <Grid container key={post.id}>
                                    <Grid item xs={6}>
                                        <PostCard post={post} />
                                    </Grid>
                                </Grid>
                            )
                            ))
                    }
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsReducer.data
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostList
}, dispatch);

PostList.propTypes = {
    requestPostsList: PropTypes.func,
    posts: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)