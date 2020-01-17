import React from 'react';
import cat from '../../img/cat.png';

import './style.css';


const Navbar = () => {
  return(
    <div>
      <div className='navbar'>
        <img alt='michi' src={cat} className='img-cat'/> 
        <div>
          Tic-Tac-Toc
        </div>
      </div>
    </div>
    )
}

export default Navbar;