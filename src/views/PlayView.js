import React from 'react';
import Navbar from '../components/navbar';
import Container from '../components/container';

import './style.css';


const PlayView = () => {
  return (
    <div>
      <Navbar />
      <div className='play-view'>
        <Container />
      </div>
    </div>

  )
}

export default PlayView;