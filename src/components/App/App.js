import React from 'react'
import { Layout } from 'antd'
import globalStyles from 'Styles/globalStyles'
import 'Styles/styles.less'

const { Content } = Layout
const App = ({ children }) => (
  <Layout style={globalStyles.height('100vh')} >
    <Content>
      <div className='container'>
        {children}
      </div> 
    </Content>
  </Layout>
)

export default App
