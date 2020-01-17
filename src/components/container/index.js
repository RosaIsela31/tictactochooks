import React from 'react';
import Square from '../square';
import './style.css';

const Container = () => {
  return(
    <div className='container'>
      <div className='container-flex'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='container-flex'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='container-flex'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Container;