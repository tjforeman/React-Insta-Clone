import React from 'react'
import Comment from './comment'

const CommentSection = props =>{
    return <div className='comment-contaner' key={props.id} >{props.comments.map((props) =>
        <Comment username={props.username} text={props.text} />
   )}</div>;
    }
export default CommentSection