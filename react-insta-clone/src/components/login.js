import React, {Component} from 'react'
import insta from './insta-insta.jpg';
import styled from "styled-components";

const LoginDiv = styled.div`
width:30%;
  margin-left:40%;
  margin-top:15%;
  border:1px solid gray;
  display:flex;
  flex-direction:column;
`;

const LoginImg= styled.img`
height:110px;
margin-bottom:10px;
`;

const LoginForm = styled.input`
margin-bottom:20px;
height:40px;
text-align:center;
`;

const LoginButton= styled.button`
height:50px;
background-color:black;
color:white;
`;


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
        <LoginDiv>
        <LoginImg src={insta} />
          <LoginForm placeholder='username' onChange={this.submitName} />  
          <LoginForm  placeholder='password' />
        <LoginButton className='log-button'
         onClick={this.signOn}>
         Login</LoginButton>
        </LoginDiv>
    )
}
}

export default Login

