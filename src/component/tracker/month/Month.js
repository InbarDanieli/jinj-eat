import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import InfoContext from '../../../ContextInfo';
import './Month.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function Month() {
  const { date, setDate } = useContext(InfoContext)
  const navigate = useNavigate()


  console.log(moment(date).daysInMonth().toString());
  console.log(moment(date).startOf("month").toString());
  console.log(moment(date).calendar());

  return (
    <div>
      <Calendar
        tileContent={() => { }}
        showNeighboringMonth={false}
        view="month"
        minDetail="month"
        maxDetail="month"
        calendarType='Hebrew'
        prev2Label={null}
        next2Label={null}
        onChange={setDate}
        onClickDay={(e) => { navigate("./day"); setDate(e); }}
        value={date}
      />
    </div>
  );
}

export default Month