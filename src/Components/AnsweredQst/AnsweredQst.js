import React from 'react';
import './AnsweredQst.css';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function AnsweredQst() {
  return (
    <div>
          <div className="AQ__top">
              <div className="AQ__top_left">
                <FormatListNumberedIcon />
              </div>
              <div className="AQ__top_right">
              <b>Answered Questions</b>
              </div>

          
          </div>
          <div className="AQ__bottom">
              <div className="AQ_number"><b>1</b></div>
              <div className="AQ_number"><b>2</b></div>
              <div className="AQ_number"><b>3</b></div>
              <div className="AQ_number"><b>4</b></div>
              <div className="AQ_number"><b>5</b></div>
              <div className="AQ_number"><b>6</b></div>
              <div className="AQ_number"><b>7</b></div>
              <div className="AQ_number"><b>8</b></div>
              <div className="AQ_number"><b>9</b></div>
              <div className="AQ_number"><b>10</b></div>
              <div className="AQ_number"><b>11</b></div>
          </div>
    </div>
  )
}

export default AnsweredQst