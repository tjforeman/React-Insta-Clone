import React from 'react'
import Comment from './comment'

const CommentSection = props =>{
    return <div className='comment-contaner' key={props.id} >{props.comments.map((props) =>
        <Comment username={props.username} text={props.text} /> 
   )} <input className='comment-input' placeholder='add a comment ...'></input></div>;
    }
export default CommentSection