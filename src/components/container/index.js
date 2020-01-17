import React, { useState } from 'react';
import Square from '../square';
import './style.css';

const values = [null, null, null, null, null, null, null, null ,null]

// Iterar los recuadros para colocar 1 ò 0 segun de quien sea el turno
// function myTurn (value) {
//   for(let i = 0; i<values.length; i++){
//     //Si es par o impar
//     // if(i)
//       //values[value] = 1 o 0
//   }
// }

const Container = () => {

  const [ check, setCheck ] = useState('X')

  const handleClick = () => {
    setCheck(`${'X'}`)
  }

  return(
    <div className='container'>
      <div className='container-flex'>
        <Square value={0} onClick={null}>{check}</Square>
        <Square value={1} onClick={null}/>
        <Square value={2} onClick={null}/>
      </div>
      <div className='container-flex'>
        <Square value={3} onClick={null}/>
        <Square value={4} onClick={null}/>
        <Square value={5} onClick={null}/>
      </div>
      <div className='container-flex'>
        <Square value={6} onClick={null}/>
        <Square value={7} onClick={null}/>
        <Square value={8} onClick={null}/>
      </div>
    </div>
  )
}

export default Container;