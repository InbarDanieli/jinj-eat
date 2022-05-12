import React, { useContext } from 'react'
import InfoContext from '../../../ContextInfo'
import "./Day.css"

function Day() {
  const { date } = useContext(InfoContext)

  return (
    <div className='dayContainer'>
      <p className='date'>{`${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth()}/${date.getFullYear()}`}</p>
      <div className='mealGrades'>
        <label>
          <input className='meal1' name='name' type="radio"></input>
          <span>meal 1</span>
        </label>

        <label>
          <input className='meal2' name='name' type="radio"></input>
          <span>meal 2</span>
        </label>

        <label>
          <input className='meal3' name='name' type="radio"></input>
          <span>meal 3</span>
        </label>

      </div>


      <div className='notes'>
        <p>notes</p>
        <input></input>
      </div>
    </div>
  )
}

export default Day