import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Day from './day/Day';
import Week from './week/Week';
import Month from './month/Month';
import Year from './year/Year';
import { useParams, useNavigate } from 'react-router-dom';

function Tracker() {
  const { trackerTime } = useParams();
  const navigate = useNavigate()

  const [value, setValue] = useState('Day');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100vw' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab onClick={() => navigate("./day")} sx={{ width: "25%" }} value="Day" label="day" />
          <Tab onClick={() => navigate("./week")} sx={{ width: "25%" }} value="Week" label="Week" />
          <Tab onClick={() => navigate("./month")} sx={{ width: "25%" }} value="Month" label="Month" />
          <Tab onClick={() => navigate("./year")} sx={{ width: "25%" }} value="Year" label="Year" />
        </Tabs>
      </Box>

      {
        {
          'day': <Day />,
          'week': <Week />,
          "month": <Month />,
          "year": <Year />,
          undefined: <Day />
        }[trackerTime]
      }

    </div>
  );
}

export default Tracker