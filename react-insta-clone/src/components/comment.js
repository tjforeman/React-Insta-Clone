import React from 'react'

const Comment= props =>{
    return(
    <div className='comments-contaier'>
<p>{props.username} {props.text}</p>
    </div>
    )
}

export default Comment