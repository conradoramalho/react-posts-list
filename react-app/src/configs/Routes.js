import React from 'react'
import { Route } from "react-router-dom"
import Dashboard from '../app/pages/dashboard'
import PostCategory from '../app/pages/post-category'
import PostData from '../app/pages/post-data';

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/categories/:category" component={PostCategory} />
            <Route exact path="/categories/:category/posts/:postId" component={PostData} />
        </div>
    );
}

export default Routes;