import {useState} from 'react';
import React from 'react';
import './ImageQst.css';

function ImageQst() {

  const [ImageQstState, setImageQstState] = useState('ImageQst__unmarked');

  const [ExamOptions,setExamOptions] = useState({a: false, b: false, c: false, d: false});

  const checkBox__clicked = (option) => {
    let duplicate__ExamOptions = {...ExamOptions, [option]: !ExamOptions[option]}
    setExamOptions({ ...ExamOptions, [option]: !ExamOptions[option] })
    if (!duplicate__ExamOptions.a && !duplicate__ExamOptions.b && !duplicate__ExamOptions.c && !duplicate__ExamOptions.d)
      {
      setImageQstState('ImageQst__unmarked');
      }
    else
      {
      setImageQstState('ImageQst__marked');
      }
  }

  return (
    <div className={ImageQstState}>
        <div className='Qst__row'>
            <div className='Qst__row__left'> 
                19. What is the Capital of Bangladesh?
            </div>
            <div className='Qst__row__right'>
                <b> Mark: <span className="Orange">1</span></b>
            </div>
        </div>
        <div className='Image__grid'>
            <div className="ImageQst__LeftBottom"><div onClick={() =>{checkBox__clicked('a')}} className={ExamOptions.a?'Checkbox__marked' : 'Checkbox__unmarked'}></div><div className='ImageQst__image'></div></div>
            <div className="ImageQst__LeftBottom"><div onClick={() =>{checkBox__clicked('b')}} className={ExamOptions.b?'Checkbox__marked' : 'Checkbox__unmarked'}></div><div className='ImageQst__image'></div></div>
            <div className="ImageQst__LeftBottom"><div onClick={() =>{checkBox__clicked('c')}} className={ExamOptions.c?'Checkbox__marked' : 'Checkbox__unmarked'}></div><div className='ImageQst__image'></div></div>
            <div className="ImageQst__LeftBottom"><div onClick={() =>{checkBox__clicked('d')}} className={ExamOptions.d?'Checkbox__marked' : 'Checkbox__unmarked'}></div><div className='ImageQst__image'></div></div>
        </div>
    </div>
  )
}

export default ImageQst