import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Dashboard from '../app/pages/dashboard'
import PostCategory from '../app/pages/post-category'
import PostData from '../app/pages/post-data';
import NotFound from '../app/pages/404/not-found';

const Routes = () => {
    return (
        <Switch >
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/categories/:category" component={PostCategory} />
            <Route exact path="/categories/:category/posts/:postId" component={PostData} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
        </Switch>
    );
}

export default Routes;