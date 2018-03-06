import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const About = () => (
  <div>
    <h1>About</h1>

    <Link to='/'>
      <Button type="primary" icon='home' >Home</Button>
    </Link>
  </div>
)

export default About
