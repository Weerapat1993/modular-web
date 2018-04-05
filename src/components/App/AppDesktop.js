import React from 'react'
import { Layout } from 'antd'
import styles from './styles'
import 'Styles/styles.less'

const { Content } = Layout
const App = ({ children }) => (
  <Layout style={styles.height('100vh')} >
    <Content>
      <div className='container'>
        {children}
      </div> 
    </Content>
  </Layout>
)

export default App
