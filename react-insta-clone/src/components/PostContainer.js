import React from 'react'
import CommentSection from './CommentSection'
import PropTypes from 'prop-types';

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
PostContainer.propTypes = {
    props: PropTypes.shape({
        username: PropTypes.string,
        likes: PropTypes.number
    })
    };

export default PostContainer