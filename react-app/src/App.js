import React, { Component } from 'react';
import PostingList from "./PostingList";
import { Route } from "react-router-dom";
import './App.css';
import { update } from './actions';

class App extends Component {
  state = {
    isVisible: false
  }


  componentWillMount() {
    const { store } = this.props;

    store.subscribe(() => {

      this.setState({
        ...store.getState()
      });

    });
  }


  componentDidMount() {
  }


  changeStore = () => {
    this.props.store.dispatch(update({
      isVisible: !this.state.isVisible
    }));
  }


  render() {
    console.log('this.state: ', this.state);
    return (
      <div>
        <button onClick={this.changeStore}>asdasd{this.state.isVisible}</button>
        <p>{this.state.isVisible ? 'true' : 'false'}</p>
        <Route exact path="/" render={() => <PostingList />} />
      </div>
    );
  }
}

export default App;
