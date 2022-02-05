import logo from './logo.svg'
import './App.css'

import Header from './components/Header'

function App() {
  return (
    <header>
      <Header />
      <img src={logo} className='App-logo' alt='logo' />
    </header>
  )
}

export default App
