import { Fragment } from 'react'

import logo from './logo.svg'
import './App.css'

import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <Header />
      <img src={logo} className='App-logo' alt='logo' />
    </Fragment>
  )
}

export default App
