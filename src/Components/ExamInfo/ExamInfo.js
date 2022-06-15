import React from 'react';
import "./ExamInfo.css";
import TimerIcon from '@mui/icons-material/Timer';

function ExamInfo() {
  return (
    <div className="ExamInfo">
        
        <div className="ExamInfo__Left">
            <div className="ExamInfo__LeftTop"><b>SWE EXAM 4101</b></div>
            <div className="ExamInfo__LeftBottom">Marks:  <b>20</b></div>
        </div>
        <div className="ExamInfo__Right">
            <div className="ExamInfo__RightTop"><b>Remaining Time:</b></div>
        <div className="ExamInfo__RightBottom">
          <div className="ExamInfo__RightBottom__Left">
            <TimerIcon className="timer_icons"/>
          </div>
          <div className="ExamInfo__RightBottom__Right">
            <b>5min 23Sec</b>
          </div>
        </div>        
      </div>
      </div>
  )
}

export default ExamInfo