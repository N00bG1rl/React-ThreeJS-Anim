import Logo from '../logoWhite.svg'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        {/* <div className='logo'>{img}</div> */}
        <img className='logo' src={Logo} />
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
            <li className='shopBtn'>
              <a href='/'>Shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
