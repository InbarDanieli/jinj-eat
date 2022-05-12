import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div>
      <h1>Hallo Jinjint,</h1>
      <h3>and welcome to the FOOD</h3>
      <p>My goal is to try and motivate you to eat at least 3 time a day (because is important!),
        <br />
        But for doing it i need you to try and not ignore the notifications from this app
        <br />
        I worked really hard on this app so please give it a try!
        <br /><br />
        Hope you enjoy
      </p>

      <Link to="/settings">set your personal timing</Link>
      <br/>
      <Link to="/recipes">recepies?</Link>
      <br/>
      <Link to="/tracker">eating tracker</Link>
    </div>
  )
}

export default MainPage