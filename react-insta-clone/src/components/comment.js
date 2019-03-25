import React from 'react'
import PropTypes from 'prop-types';

const Comment= props =>{
    return(
    <div className='comments-contaier'>
<p>{props.username} {props.text}</p>
    </div>
    )
}
Comment.propTypes = {
comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
})
};

export default Comment