import React from 'react'
import CommentSection from './CommentSection'

const PostContainer=props =>{
    return( 
    <div className='post-container'>    
        {props.users.map(props => 
            <div key={props.id}>
            <div className='top'>
            <img className= 'top-pic' src= {props.thumbnailUrl} />
            <p className='username'>{props.username}</p>
            </div>
            <img class='post-pic'src={props.imageUrl} />
            <p class='likes'>{props.likes} likes</p>
                <CommentSection 
                    comments={props.comments} />
            </div>
        )} 
    </div>)
}


export default PostContainer