import './styles/Navbar-Footer.css';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';

function Navbar() {


  return(
    <>
    <nav>
      <div className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-element hideOnMobile'><Link to='/uslugi/strzyzenie'>USŁUGI</Link></li>
          <li className='navbar-element hideOnMobile'><Link to='/portfolio'>PORTFOLIO</Link></li>
          <li className='navbar-element'><Link to='/'><img src={logo}/></Link></li>
          <li className='navbar-element hideOnMobile'><Link to='/cennik/fryzjerstwo'>CENNIK</Link></li>
          <li className='navbar-element hideOnMobile'><Link to='kontakt'><b>KONTAKT</b></Link></li>
          <li className='navbar-element showOnMobile'><h5 className='hamburger' onClick={
            function ShowNavbar() {
              const navbar2 = document.querySelector('.navbar2');
              const navbar = document.querySelector('.navbar');

              if (navbar2){
              navbar2.style.display = 'block'; // Pokaż navbar
              navbar.style.display = 'none';
              };
            }
          }>☰</h5></li>
        </ul>
      </div>
      <div className='navbar2'>
        <ul className='navbar2-list'>
          <li className='navbar2-element'><h5 className='x'onClick={
            function HideNavbar() {
              const navbar2 = document.querySelector('.navbar2');
              const navbar = document.querySelector('.navbar');

              if (navbar2){
              navbar2.style.display = 'none'; // Ukryj navbar
              navbar.style.display = 'flex';
              };            
            }
          }>×</h5></li>
          <li className='navbar2-element first-element'><Link to='/'><img src={logo} /></Link></li>
          <li className='navbar2-element'><Link to='/uslugi/strzyzenie'>USŁUGI</Link></li>
          <li className='navbar2-element'><Link to='/portfolio'>PORTFOLIO</Link></li>
          <li className='navbar2-element'><Link to='/cennik/fryzjerstwo'>CENNIK</Link></li>
          <li className='navbar2-element'><Link to='kontakt'><b>KONTAKT</b></Link></li>
        </ul>
      </div>
    </nav>

    </>
  )
}

export default Navbar