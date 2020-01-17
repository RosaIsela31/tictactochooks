import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

const WelcomeView = () => {
  return(
    <div>
      <Navbar /> 

      <div className='container-btn-start'>
        <Link to={'/play'}>
          <button className='btn-start'>
            START
          </button>
        </Link>
      </div>

    </div>
  )

}

export default WelcomeView;