import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { App } from 'Components/App'

const Home = () => (
  <App>
    <h1>Home</h1>
    <Link to='/about'>
      <Button type="primary">About</Button>
    </Link>
  </App>
)

export default Home

