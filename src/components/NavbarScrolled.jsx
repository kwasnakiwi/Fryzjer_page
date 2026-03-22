import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function NavbarScrolled() {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector('.navbar-list');
    if (!navbar) return;

    const handleScroll = () => {
      const isPricingPage = location.pathname.startsWith('/cennik');
      const isScrolled = window.scrollY > 200;

      if (isScrolled || isPricingPage) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return null;
}

export default NavbarScrolled;