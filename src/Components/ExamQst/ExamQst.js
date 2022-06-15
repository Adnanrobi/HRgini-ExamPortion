import { useState } from 'react';
import React from 'react';
import './ExamQst.css';

function ExamQst() {

  const [ExamQstState, setExamQstState] = useState('ExamQst__unmarked');

  const [ExamOptions,setExamOptions] = useState({a: false, b: false, c: false, d: false});

  const checkBox__clicked = (option) => {
    let duplicate__ExamOptions = {...ExamOptions, [option]: !ExamOptions[option]}
    setExamOptions({ ...ExamOptions, [option]: !ExamOptions[option] })
    if (!duplicate__ExamOptions.a && !duplicate__ExamOptions.b && !duplicate__ExamOptions.c && !duplicate__ExamOptions.d)
      {
      setExamQstState('ExamQst__unmarked');
      }
    else
      {
      setExamQstState('ExamQst__marked');
      }
  }

  return (
    <div className={ExamQstState}>
        <div className="ExamQst__Left">
            <div className="ExamQst__LeftTop">19. What is the Capital of Bangladesh?</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('a')}} className={ExamOptions.a?'Checkbox__marked' : 'Checkbox__unmarked'}></div>Dhaka</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('b')}} className={ExamOptions.b?'Checkbox__marked' : 'Checkbox__unmarked'}></div>Rajshahi</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('c')}} className={ExamOptions.c?'Checkbox__marked' : 'Checkbox__unmarked'}></div>Bogura</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('d')}} className={ExamOptions.d?'Checkbox__marked' : 'Checkbox__unmarked'}></div>Sylhet</div>
        </div>
        <div className="ExamQst__Right">
            <div className="ExamQst__RightTop"><b> Mark: <span className="Orange">1</span></b></div>
        </div>
    </div>
  )
}

export default ExamQst