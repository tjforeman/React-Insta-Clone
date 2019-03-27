import React, {Component}from 'react'
import Comment from './comment'

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    handleChanges= event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    submitComment= event =>{
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments,{
         text: this.state.comment,
         username: 'Coolperson'
                }
            ]
        })
    }
    render(){
        return(
        <div>
        {this.state.comments.map((props) => 
        <Comment username={props.username} key={props.id} text={props.text} />)}
        <form onSubmit={this.submitComment}>
                <input className='comment-input' type="text" name='comment' placeholder = 'add a comment...' value={this.state.comment} onChange={this.handleChanges}/>
        </form>
        </div>
        )
    }
}


        export default CommentSection

