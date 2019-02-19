import React from 'react'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

window.React = React

ReactDOM.render(<App />, document.getElementById('react-container'))
registerServiceWorker()
