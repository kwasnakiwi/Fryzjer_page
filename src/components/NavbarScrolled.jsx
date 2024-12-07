function NavbarScrolled() {
    const navbar = document.querySelector('.navbar-list');
    
    // Funkcja do zmiany tła navbaru po przewinięciu
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) { // Zmienia tło po przewinięciu o 470px
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
    const navbar2 = document.querySelector('.navbar2-list');
    
    // Funkcja do zmiany tła navbaru po przewinięciu
    window.addEventListener('scroll', () => {
      if (window.scrollY > 470) { // Zmienia tło po przewinięciu o 470px
        navbar2.classList.add('navbar-scrolled');
      } else {
        navbar2.classList.remove('navbar-scrolled');
      }
    });
}

export default NavbarScrolled