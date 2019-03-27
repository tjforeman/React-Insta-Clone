import React, {Component} from 'react'
import insta from './insta-insta.jpg';

class Login extends Component{
constructor(){
    super();
    this.state={
        inputText:""
    }
}

submitName= event => this.setState({ inputText: event.target.value });

signOn= event => {
    event.preventDefault();
    localStorage.setItem('user', this.state.inputText);
    this.props.signIn();
  };

    render(){
    return(
        <div className='login'>
        <img className='log-pic' src={insta} />
          <input className='log-form' placeholder='username' onChange={this.submitName}></input>  
          <input className='log-form' placeholder='password'></input>
        <button className='log-button' onClick={this.signOn}>Login</button>
        </div>
    )
}
}

export default Login

