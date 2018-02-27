import React from 'react'
import { Route } from "react-router-dom"
import PostList from '../app/pages/post-list'
import PostCategory from '../app/pages/post-category'
import PostData from '../app/pages/post-data';

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={PostList} />
            <Route exact path="/category/:category" component={PostCategory} />
            <Route exact path="/category/:category/post/:postId" component={PostData} />
        </div>
    );
}

export default Routes;