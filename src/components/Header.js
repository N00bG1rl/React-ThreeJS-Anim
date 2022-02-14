import Logo from '../logoWhite.svg'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <a href='https://www.403.ee/'>
          <img className='logo' src={Logo} />
        </a>
        <nav>
          <ul>
            <li>
              <a href='/'>Products</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
            <li className='btn'>
              <a href='/'>Shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
