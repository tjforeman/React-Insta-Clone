import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
import dummyData from './dummy-data';
import './components/components.css'


class App extends Component {
  constructor(){
    super();
    this.state={
      users :[]
    }
  }
  componentDidMount(){
    this.setState({users: dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer users={this.state.users} />
      </div>
    );
  }
}

export default App;
