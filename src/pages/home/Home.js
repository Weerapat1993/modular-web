import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to='/about'>
      <Button type="primary">About</Button>
    </Link>
  </div>
)

export default Home

