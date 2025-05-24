import './../../styles/Cennik.css';
import { Link } from 'react-router-dom';
import cennik1 from './../../assets/images/cennik7.png'
import cennik2 from './../../assets/images/cennik8.png'
import cennik3 from './../../assets/images/cennik9.png'
import cennik4 from './../../assets/images/cennik10.png'
import cennik5 from './../../assets/images/cennik11.png'
import cennik6 from './../../assets/images/cennik12.png'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Fryzjerstwo() {
  
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
						<Link id='blue' to='/cennik/fryzjerstwo'>Fryzjerstwo</Link>
            <Link to='/cennik/kosmetyka'>Kosmetyka</Link>
          </div>
          <div className='offers'>
            <div className='offer-box' id='b1'>
              <img src={cennik1} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-left'>Strzyżenie męskie</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Podgolenie maszynką</p>
                    <h4 className='price'>30 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Włosy krótkie</p>
                    <h4 className='price'>60 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Włosy długie</p>
                    <h4 className='price'>100 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box hideMobile' id='b2'>
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Strzyżenie damskie</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Krótkie/Długie + mycie</p>
                    <h4 className='price'>95 / 110 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Podcięcie końcówek + mycie</p>
                    <h4 className='price'>60 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Strzyżenie grzywki</p>
                    <h4 className='price'>25 zł</h4>
                  </div>
                </div>
              </div>
              <img src={cennik2} />
            </div>
            <div className='offer-box showMobile'>
            <img src={cennik2} />
            <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Strzyżenie damskie</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Klasyczne (Mycie)</p>
                    <h4 className='price'>95 / 110 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Podcięcie końcówek + mycie</p>
                    <h4 className='price'>85 zł</h4>
                  </div>
                  <hr className='offer-line' />
                   <div className='offer-price'>
                    <p>Strzyżenie grzywki</p>
                    <h4 className='price'>25 zł</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='offer-box' id='b3'>
              <img src={cennik3} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-left'>Koloryzacja</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Jeden kolor Krótkie/Strzyżenie/Modelowanie</p>
                    <h4 className='price'>210 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Jeden kolor Średnie/Strzyżenie/Modelowanie</p>
                    <h4 className='price'>260 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Jeden kolor Długie/Strzyżenie/Modelowanie</p>
                    <h4 className='price'>280 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Dekoloryzacja</p>
                    <h4 className='price'>250 zł+</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Koloryzacja Airtouch</p>
                    <h4 className='price'>700 - 900 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box hideMobile' id='b4'>
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Techniki koloryzacji</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy krótkie + strzyżenie</p>
                    <h4 className='price'>350 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy średnie + strzyżenie</p>
                    <h4 className='price'>400 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy długie + strzyżenie</p>
                    <h4 className='price'>450 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy krótkie</p>
                    <h4 className='price'>400 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy średnie</p>
                    <h4 className='price'>430 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy długie</p>
                    <h4 className='price'>480 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy średnie</p>
                    <h4 className='price'>450 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy długie</p>
                    <h4 className='price'>500 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
              <img src={cennik4} />
            </div>
            <div className='offer-box showMobile'>
            <img src={cennik4} />
            <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Techniki koloryzacji</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy krótkie + strzyżenie</p>
                    <h4 className='price'>350 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy średnie + strzyżenie</p>
                    <h4 className='price'>400 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy długie + strzyżenie</p>
                    <h4 className='price'>450 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy krótkie</p>
                    <h4 className='price'>400 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy średnie</p>
                    <h4 className='price'>430 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy długie</p>
                    <h4 className='price'>480 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy średnie</p>
                    <h4 className='price'>450 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy długie</p>
                    <h4 className='price'>500 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box' id='b5'>
              <img src={cennik5} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-left'>Zabiegi pielęgnacyjne</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Keratynowe prostowanie</p>
                    <h4 className='price'>350 - 500 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Pielęgnacja B3</p>
                    <h4 className='price'>60 - 180 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box hideMobile' id='b6'>
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Inne</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Strzyżenie brody</p>
                    <h4 className='price'>50 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Konsultacja</p>
                    <h4 className='price'>0,01 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
              <img src={cennik6} />
            </div>
            <div className='offer-box showMobile'>
              <img src={cennik6} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-right'>Inne</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Strzyżenie brody</p>
                    <h4 className='price'>50 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Konsultacja</p>
                    <h4 className='price'>0,01 zł</h4>
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

export default Fryzjerstwo