import './styles/Navbar-Footer.css';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';

function Navbar() {
  return(
    <nav>
      <div className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-element'><Link to='/uslugi/strzyzenie'>USŁUGI</Link></li>
          <li className='navbar-element'><Link to='/portfolio'>PORTFOLIO</Link></li>
          <li className='navbar-element'><Link to='/'><img src={logo}/></Link></li>
          <li className='navbar-element'><Link to='/cennik/strzyzenie'>CENNIK</Link></li>
          <li className='navbar-element'><Link to='kontakt'>KONTAKT</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar