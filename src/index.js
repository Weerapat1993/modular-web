import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import configureStore from './config/store'
import registerServiceWorker from './registerServiceWorker'
import 'antd-mobile/dist/antd-mobile.less'

// Language
import './language'

const App = () => (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();