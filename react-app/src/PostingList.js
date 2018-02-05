import React, { Component } from 'react';
import Header from "./components/header/Header";
import Post from './components/posts/Posts'
import Grid from 'material-ui/Grid';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getPosts } from './actions';

class PostingList extends Component {
    componentDidMount() {
        this.props.getPosts();
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
                                    <Post post={post} />
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        posts
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPosts
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostingList)