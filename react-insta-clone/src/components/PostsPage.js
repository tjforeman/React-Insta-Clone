import React, { Component } from 'react';
import SearchBar from './SearchBar'
import PostContainer from './PostContainer'
import dummyData from './dummy-data';
import './components.css'

class PostPage extends Component {
    constructor(){
      super();
      this.state={
        users :[],
        filteredPosts:[],
      }
    }
    componentDidMount(){
      this.setState({users: dummyData});
    }
    searchItems = event =>{
      let search= this.state.users.filter(post =>{
        if (post.username.includes(event.target.value)) {
          console.log(event.target.value)
          return post;
        }
      });
      this.setState({filteredPosts:search});
    };
  
  
    render() {
      return (
        <div className="posts">
          <SearchBar searchItems={this.searchItems}  />
          <PostContainer users={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts: this.state.users
            } />
        </div>
      );
    }
  }
  
  export default PostPage;