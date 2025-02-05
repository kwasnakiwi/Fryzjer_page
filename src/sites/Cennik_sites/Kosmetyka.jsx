import './../../styles/Cennik.css';
import { Link } from 'react-router-dom';
import cennik1 from './../../assets/images/cennik1.png'
import cennik2 from './../../assets/images/cennik2.png'
import cennik3 from './../../assets/images/cennik3.png'
import cennik4 from './../../assets/images/cennik4.png'
import cennik5 from './../../assets/images/cennik5.png'
import cennik6 from './../../assets/images/cennik6.png'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Kosmetyka() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Obliczanie pozycji elementu względem górnej krawędzi strony
        const elementPosition = element.getBoundingClientRect().top;
        
        // Przewijanie do elementu z offsetem
        window.scrollTo({
          top: elementPosition + window.pageYOffset - 200, // 300px od góry
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return(
    <>
      <div className="center-container">
        {/* <div className="web-top3">
          <h1 className="web-top-title2">
            Ceny, które odpowiadają Twoim wymaganiom
          </h1>
        </div> */}
        <main className='main-cont2'>
          <div className='site-navbar'>
						<Link to='/cennik/fryzjerstwo'>Fryzjerstwo</Link>
            <Link id='blue' to='/cennik/kosmetyka'>Kosmetyka</Link>
          </div>
          <div className='offers'>
            <div className='offer-box' id='b1'>
              <img src={cennik1} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-left'>Maniciure</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Manicure klasyczny</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Manicure hybrydowy</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Spa Manicure</p>
                    <h4 className='price'>36 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Usunięcie masy (z innego salonu)</p>
                    <h4 className='price'>52 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Naprawa jednego paznokcia</p>
                    <h4 className='price'>64 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box hideMobile' id='b2'>
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Żel na naturalnej płytce</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Żel w butelce</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Korekta paznokci naturalnych</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
              <img src={cennik2} />
            </div>
            <div className='offer-box showMobile'>
            <img src={cennik2} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Żel na naturalnej płytce</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Żel w butelce</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Korekta paznokci naturalnych</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box' id='b3'>
              <img src={cennik3} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-left'>Żel / akrylożel</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Krótkie</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Średnie</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Długie</p>
                    <h4 className='price'>92 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Usunięcie masy (z innego salonu)</p>
                    <h4 className='price'>25 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Naprawa jednego paznokcia</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box hideMobile' id='b4'>
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Rekonstrukcja</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Pojedyńczy paznokieć</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Pełna stylizacja</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
              <img src={cennik4} />
            </div>
            <div className='offer-box showMobile'>
            <img src={cennik4} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Rekonstrukcja</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Pojedyńczy paznokieć</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Pełna stylizacja</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box' id='b5'>
              <img src={cennik5} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-left'>Uzupełnienie</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>2-3 tygodnie</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>3-4 tygodnie</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Powyżej 4 tygodni</p>
                    <h4 className='price'>36 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box hideMobile' id='b6'>
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Zdobienie</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>French/ombre</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Naklejka/stempel</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Ręcznie malowane zdobienie</p>
                    <h4 className='price'>36 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Pyłek</p>
                    <h4 className='price'>52 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
              <img src={cennik6} />
            </div>
            <div className='offer-box showMobile'>
              <img src={cennik6} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Zdobienie</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>French/ombre</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Naklejka/stempel</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Ręcznie malowane zdobienie</p>
                    <h4 className='price'>36 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Pyłek</p>
                    <h4 className='price'>52 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Kosmetyka