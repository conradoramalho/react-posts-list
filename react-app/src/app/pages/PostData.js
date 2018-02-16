import React, { Component } from 'react';
import Header from "../components/header/Header";
import Grid from 'material-ui/Grid';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getPosts } from '../actions';

class PostData extends Component {
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
)(PostData)