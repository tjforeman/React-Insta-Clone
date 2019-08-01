import React from 'react';
import CommentSection from './CommentSection'
import PropTypes from 'prop-types';
import heart from './insta-heart.png'
import comment from './insta-comment.png'
import styled from "styled-components";

const PostDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width:40%;
margin-left:35%;
`;
const Top = styled.div`
display:flex;
align-items:center;
padding-left:15px;
border:1px solid lightgray;
width:483px;
`;

const TopPic = styled.img`
height:30px;
width:30px;
border-radius:20px;
`;

const UserName= styled.p`
margin-left:10px;
font-weight:none;
`;

const PostPic = styled.img`
height:400px;
width:500px;
margin:0;
padding:0;
`;
const Icon = styled.div`
display:flex;
align-items:center;
`;

const Bottom= styled.div`
border-right:1px solid lightgray
border-left:1px solid lightgray
border-bottom:1px solid lightgray
width:498px
margin-bottom:20px;
`;

const BottomPic = styled.img `
width:10%;
height:10%;
margin:0;
`;

const Likes= styled.p`
font-weight:bold;
margin-left:15px;
`;

const PostContainer=props =>{
    return( 
    <PostDiv >    
        {props.users.map(props => 
            <div key={props.id} post={props.post}>
            <Top>
            <TopPic src= {props.thumbnailUrl} />
            <UserName>{props.username}</UserName>
            </Top>
            <PostPic src={props.imageUrl} />
            <Bottom>
            <Icon>
            <BottomPic src={heart} />
            <BottomPic src={comment} />
            </Icon>
            <Likes>{props.likes} likes</Likes>
                <CommentSection comments={props.comments}  />
            </Bottom>
            </div>
        )} 
    </PostDiv>)
}
PostContainer.propTypes = {
    props: PropTypes.shape({
        username: PropTypes.string,
        likes: PropTypes.number
    })
    };

export default PostContainer