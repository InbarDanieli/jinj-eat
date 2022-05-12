import React from 'react'

function Settings() {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

  return (
    <div>
      <p>brackfast</p>
      <p>lunch</p>
      <p>dinner</p>
    </div>
  )
}

export default Settings