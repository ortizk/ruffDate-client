// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Login from '../auth/Login'
 
// optional cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}
 
class Alert extends Component  {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Login />
      </AlertProvider>
    )
  }
}
 
 export default Alert;
// render(<Root />, document.getElementById('root'))