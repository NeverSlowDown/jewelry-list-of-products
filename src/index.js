import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router
} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
