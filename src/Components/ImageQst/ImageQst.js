import React from 'react';
import './ImageQst.css';

function ImageQst() {
  return (
    <div className="ImageQst">
        <div className='Qst__row'>
            <div className='Qst__row__left'> 
                19. What is the Capital of Bangladesh?
            </div>
            <div className='Qst__row__right'>
                <b> Mark: <span className="Orange">1</span></b>
            </div>
        </div>
        <div className='Image__grid'>
            <div className="ExamQst__LeftBottom"> <div className='Checkbox'></div><div className='ImageQst__image'>Dhaka</div></div>
            <div className="ExamQst__LeftBottom"> <div className='Checkbox'></div><div className='ImageQst__image'>Dhaka</div></div>
            <div className="ExamQst__LeftBottom"> <div className='Checkbox'></div><div className='ImageQst__image'>Dhaka</div></div>
            <div className="ExamQst__LeftBottom"> <div className='Checkbox'></div><div className='ImageQst__image'>Dhaka</div></div>
        </div>
    </div>
  )
}

export default ImageQst