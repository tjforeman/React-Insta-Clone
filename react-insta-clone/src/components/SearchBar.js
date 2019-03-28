import React from 'react'
import camera from './insta-camera.png';
import insta from './insta-insta.jpg';
import compass from './insta-compass.png';
import heart from './insta-heart.png'
import profile from './insta-profile.png'
import styled from "styled-components";

const LogoHeader = styled.div`
display:flex;
align-items:center;
width:750px;
margin-left:25%;
justify-content:space-between;
margin-bottom:30px;
`;
const Box = styled.div `
display:flex;
align-content:center;
`;

const LogoImage= styled.img`
width:120px;
height:50px;
`;

const IconImage=styled.img`
width:50px;
height:40px;
`;

const Inputbar= styled.input`
height:20px;
text-align:center;
border-radius:8px;
`;

const SearchBar = props =>{
    return (
        <LogoHeader>
        <Box>
        <IconImage src={camera}/>
         <LogoImage src={insta}/>
         </Box>
         <Inputbar type='text' placeholder='search' onKeyDown={props.searchItems}></Inputbar>
         <Box>
         <IconImage src={compass} />
         <IconImage src={heart} />
         <IconImage src={profile} />
         </Box>
        </LogoHeader>
    )
}
export default SearchBar