import React from 'react'
import camera from './insta-camera.png';
import insta from './insta-insta.jpg';
import compass from './insta-compass.png';
import heart from './insta-heart.png'
import profile from './insta-profile.png'


const SearchBar = props =>{
    return (
        <div className='searchbar-container'>
        <div ClassName='head'>
        <img className='camera' src={camera}/>
         <img className='insta' src={insta}/>
         </div>
         <form>
         <input className='input' placeholder='search'></input>
         </form>
         <div className='icons'>
         <img className='compass' src={compass} />
         <img className='heart' src={heart} />
         <img className ='profile'src={profile} />
         </div>
        </div>
    )
}
export default SearchBar