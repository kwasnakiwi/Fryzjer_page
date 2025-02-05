import { useEffect } from 'react';

function NavbarScrolled() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar-list');

    const handleScroll = () => {
      if (window.scrollY > 100 || location.pathname === '/cennik/fryzjerstwo' || location.pathname === '/cennik/kosmetyka' ) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    // Dodanie nasłuchiwacza
    window.addEventListener('scroll', handleScroll);

    // Usunięcie nasłuchiwacza przy odmontowaniu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Pusty array oznacza, że efekt uruchomi się tylko raz, po załadowaniu komponentu

  return null;
}

export default NavbarScrolled;
