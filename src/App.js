import React, { Component } from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import "./App.css";
import store from "./components/store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
          <hr />
        </div>
      </Provider>
    );
  }
}

export default App;
