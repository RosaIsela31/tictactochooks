import React from 'react';
import Navbar from '../components/navbar';
// import UserForm from '../components/userform';
import { Link } from 'react-router-dom';
import catplay from '../img/catplay.png';
import RulesOfTheGame from '../components/rulesOfTheGame';

const WelcomeView = () => {
  return(
    <div>
      <Navbar /> 
      <div className='container-rules'>
        <div className='container-btn-start'>
          {/* <UserForm /> */}
          <RulesOfTheGame />
          <Link to={'/play'}>
            <button className='btn-start'>
              START
            </button>
          </Link>
        </div>
        <img alt='play' src={catplay} />
      </div>

    </div>
  )

}

export default WelcomeView;