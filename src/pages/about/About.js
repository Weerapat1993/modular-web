import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { App } from 'Components/App'

const About = () => (
  <App>
    <h1>About</h1>
    <Link to='/'>
      <Button type="primary" icon='home' >Home</Button>
    </Link>
  </App>
)

export default About
