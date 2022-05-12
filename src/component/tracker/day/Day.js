import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { green, orange, pink } from '@mui/material/colors'
import React, { useContext } from 'react'
import InfoContext from '../../../ContextInfo'
import "./Day.css"

function Day() {
  const { date } = useContext(InfoContext)

  return (
    <div className='dayContainer'>
      <p className='date'>{`${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth() + 1 < 10 ? `0${date.getMonth() +1}` : date.getMonth() +1}/${date.getFullYear()}`}</p>


      <FormControl>
        <RadioGroup row>
          <FormControlLabel value="female" control={<Radio
            sx={{
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />} label="1 meal"
            // onSubmit={() => setObj(pink)}
          />
          <FormControlLabel value="male" control={<Radio
            sx={{
              '&.Mui-checked': {
                color: orange[600],
              },
            }}
          />} label="2 meals"
            // onSubmit={() => setObj(orange)}
              />
              <FormControlLabel value="other" control={<Radio
                sx={{
                  '&.Mui-checked': {
                    color: green[600],
                  },
                }}
              />}
                label="3 meals" 
                // onSubmit={() => setObj(green)}
                />
        </RadioGroup>
      </FormControl>

      {/* <button type='submit'></button> */}

      <div className='notes'>
        <p>notes</p>
        <input></input>
      </div>

    </div>
  )
}

export default Day