import React, { useState } from 'react';
import './style.css';

const UserForm = () => {
  // const [text, setText] = useState('holi');
  // const inputState = useState({title: '', other: ''})
  const [inputone, setInputone] = useState('')
  // const valueInput = (event) => {
  //   let result =  setText(event.target.value)
  //   console.log(result);
  // }
  return(
    <div>
      <input type='text' placeholder='Ingresa tu nombre aquí' className='user-form' 
      // value={inputState[0].title} onChange={event => inputState[1]({title: event.target.value})} 
      value={inputone} onChange={
        (event) => {
        const newInput = event.target.value
        setInputone(newInput)}
      } 
      />
      {/* name: {inputone} */}
    </div>
  )
}

export default UserForm;