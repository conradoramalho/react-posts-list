import React from 'react';
import PostingList from "./PostingList";
import { Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={PostingList} />
    </div>
  );
}

export default App;