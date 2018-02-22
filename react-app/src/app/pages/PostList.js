import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from '../components/header/Header';
import PostCard from '../components/post-card/PostCard'
import Grid from 'material-ui/Grid';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { requestPostsList } from '../actions';

class PostList extends Component {
    async componentDidMount() {
        await this.props.requestPostsList();
    }

    render() {
        debugger
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

function mapStateToProps({ postList }) {
    return {
        posts: postList.data
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    requestPostsList
}, dispatch);

PostList.propTypes = {
    requestPostsList: PropTypes.func,
    posts: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)