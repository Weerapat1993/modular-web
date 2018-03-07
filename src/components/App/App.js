import React from 'react'
import { Layout } from 'antd'
import 'Styles/styles.less'

const { Content } = Layout
const App = ({ children }) => (
  <Layout style={{ height: '100vh' }} >
    <Content>
      <div className='container'>
        {children}
      </div> 
    </Content>
  </Layout>
)

export default App
