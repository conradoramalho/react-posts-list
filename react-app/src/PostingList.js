import React, { Component } from 'react';
import Header from "./components/header/Header";
import Posts from './components/posts/Posts'
import Grid from 'material-ui/Grid';

export default class PostingList extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Header title='List of posts' />
                    </Grid>
                    {[0, 1, 2, 3].map(value => (
                        <Grid item xs={6}>
                            <Posts />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}
