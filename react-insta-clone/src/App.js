import React, { Component } from 'react';
import PostsPage from './components/PostsPage'
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/login'
import styled from "styled-components";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const AppDiv= styled.div`
width:90%;
`;


class App extends Component {
  constructor(){
    super();
  }

  render() {
    return  (
      <AppDiv>
        <ComponentFromWithAuthenticate />
      </AppDiv>
    );
  }
}

export default App;
