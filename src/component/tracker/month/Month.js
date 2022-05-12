import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import InfoContext from '../../../ContextInfo';
import './Month.css';

function Month() {
  const { date, setDate } = useContext(InfoContext)

  
  return (
    <div>
      <Calendar
      tileContent	={()=>{}}
      // showWeekNumbers = {true}
      showNeighboringMonth	= {false}
      view="month"
        navigationLabel={null}
        calendarType='Hebrew'
        prev2Label={null}
        next2Label={null}
        onChange={setDate}
        onClickDay={(e)=>{console.log(e);}}
        value={date}
      />
    </div>
  );
}

export default Month