import React from 'react'
import { Layout } from 'antd'
import styles from './Styles'
import 'Styles/styles.less'

const { Content } = Layout
const App = ({ children }) => (
  <Layout style={styles.height('100vh').get()} >
    <Content>
      <div className='container'>
        {children}
        <div style={styles.circle(50).backgroundColor('#000').get()} />
      </div> 
    </Content>
  </Layout>
)

export default App
