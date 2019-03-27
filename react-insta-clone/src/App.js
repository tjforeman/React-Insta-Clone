import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage'
import withAuthenticate from './authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
