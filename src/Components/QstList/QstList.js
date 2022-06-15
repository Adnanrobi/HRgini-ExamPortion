import React from 'react';
import ExamQst from '../ExamQst/ExamQst';
import ImageQst from '../ImageQst/ImageQst';
import './QstList.css';

function QstList() {
    const QstArray = [1,2,3,4,5]
  return (
    <div className='QstList'>
      <ImageQst />
      {QstArray.map((Qst) => (<ExamQst />))}
    </div>
  )
}

export default QstList