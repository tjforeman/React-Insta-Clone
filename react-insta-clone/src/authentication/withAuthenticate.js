import React, {Component} from 'react'

const withAuthenticate = PostsPage => Login =>
class Name extends Component {
    constructor(){
    super();
    this.state={
        loggedIn:false
    }
    
    }
    signIn = () =>{ 
        this.setState({loggedIn: true});
    }
  render() {
    return (
        this.state.loggedIn === false ?
            <Login online={this.state.loggedIn} signIn={this.signIn}/> : <PostsPage />
    );
  }
};


export default withAuthenticate