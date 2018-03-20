import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, Grid } from 'material-ui';
import AddIcon from 'material-ui-icons/Add';
import Header from '../../components/header/Header';
import PostCard from '../../components/post-card/post-card'
import { getPostList, getCategoryList } from '../../actions';
import './dashboard.css';

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
                            posts.map((post, index) => (
                                <Grid container key={index}>
                                    <Grid item xs={12}>
                                        <PostCard post={post} />
                                    </Grid>
                                </Grid>
                            )
                            ))
                    }
                </Grid>
                <Link to="/posts/new">
                    <Button variant="fab" color="primary" aria-label="add" className="btn-add">
                        <AddIcon />
                    </Button>
                </Link>
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
    posts: PropTypes.array,
    categories: PropTypes.array,
    requestPostsList: PropTypes.func,
    getPostList: PropTypes.func,
    getCategoryList: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)