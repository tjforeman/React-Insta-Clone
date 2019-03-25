import React from 'react'
import CommentSection from './CommentSection'

const PostContainer=props =>{
    return( 
    <div className='post-container'>    
        {props.users.map(props => 
            <div key={props.id}>
            <p>{props.username}</p>
            <img src={props.imageUrl} />
            <p>{props.likes} likes</p>
                <CommentSection 
                    comments={props.comments} />
            </div>
        )} 
    </div>)
}


export default PostContainer