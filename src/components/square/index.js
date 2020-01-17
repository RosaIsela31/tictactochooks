import React, {useState} from 'react';
import './style.css';
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

// values = [0,0,0]
// turno = 0

const Square = () => {
  const [icon, setIcon] = useState('x');

  const handleChange = (icon) => {}
  //   if(icon == ''){
  //     setIcon(`${'X'}`)
  //   }else if (setIcon == 'X'){
  //     setIcon(`${'O'}`)
  //   }
  // }
  //  values[value_cuadrito] = 1
  //  if %turno == 0
  //   setIcon(`${'X'}`)
  //  else
  //   setIcon(`${'O'}`)
  // turno+=1;
   
  return(
    <div className='square'>
    {icon}

    </div>
  )
}

export default Square;