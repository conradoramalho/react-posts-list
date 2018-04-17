import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Dashboard from '../app/pages/dashboard/dashboard'
import CategoryPost from '../app/pages/post/category-post'
import NewPost from '../app/pages/post/new-post';
import DataPost from '../app/pages/post/data-post';
import NotFound from '../app/pages/404/not-found';

const Routes = () => (
  <Switch >
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/posts/new" component={NewPost} />
    <Route exact path="/category/:category" component={CategoryPost} />
    <Route exact path="/:category/:postId" component={DataPost} />
    <Route path='/404' component={NotFound} />
    <Redirect from='*' to='/404' />
  </Switch>
);

export default Routes;