import React from 'react'
import PropTypes from 'prop-types';
import styled from "styled-components";

const CommentDiv= styled.div`
margin-left:15px;
    display:flex;
`;

const User= styled.p`
margin-right:10px;
font-weight:bold;
`;

const Comment= props =>{
    return(
    <CommentDiv>
<User>{props.username}  </User>
<p>{props.text}</p>
    </CommentDiv>
    )
}
Comment.propTypes = {
comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
})
};

export default Comment