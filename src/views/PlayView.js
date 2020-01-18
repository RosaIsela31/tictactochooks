import React from 'react';
import Navbar from '../components/navbar';
import Container from '../components/container';
import Turn from '../components/turn';
import UserForm from '../components/userform';

import './style.css';


const PlayView = () => {
  return (
    <div>
      <Navbar />
      <Turn />
      <div className='play-view'>
        <Container />
      </div>
    </div>

  )
}

export default PlayView;