import React from 'react';
import PostingList from "./PostingList";
import PostData from "./components/post-data/PostData";
import { Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={PostingList} />
      <Route exact path="/posts/:postId" component={PostData} />
    </div>
  );
}

export default App;