import React from 'react'
import { Route } from "react-router-dom"
import PostList from '../app/pages/PostList'
import PostCategory from '../app/pages/PostCategory'
import PostData from '../app/pages/PostData';

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