import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import PostCard from '../components/post-card/post-card'
import Grid from 'material-ui/Grid';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Button } from 'material-ui';
import { getPostList, getCategoryList } from '../actions';

class PostList extends PureComponent {
    componentDidMount() {
        this.props.getPostList();
        this.props.getCategoryList();
    }

    render() {
        const { posts, categories } = this.props;

        return (
            <Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Header title='List of categories' />
                    </Grid>
                    {
                        categories && (
                            categories.map((category, index) => (
                                <Link key={index} to={`categories/${category.path}`}>
                                    <Button color="primary">
                                        {category.name}
                                    </Button>
                                </Link>
                            )
                            ))
                    }
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Header title='List of posts' />
                    </Grid>
                    {
                        posts && (
                            posts.map(post => (
                                <Grid container key={post.id}>
                                    <Grid item xs={12}>
                                        <PostCard post={post} />
                                    </Grid>
                                </Grid>
                            )
                            ))
                    }
                </Grid>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsReducer.posts,
        categories: state.categoriesReducer.categories
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostList,
    getCategoryList
}, dispatch);

PostList.propTypes = {
    requestPostsList: PropTypes.func,
    posts: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)