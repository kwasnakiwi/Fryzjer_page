import './../../styles/Cennik.css';
import { Link } from 'react-router-dom';
import cennik1 from './../../assets/images/cennik7.png'
import cennik2 from './../../assets/images/cennik8.png'
import cennik3 from './../../assets/images/cennik9.png'
import cennik4 from './../../assets/images/cennik10.png'
import cennik5 from './../../assets/images/cennik11.png'
import cennik6 from './../../assets/images/cennik12.png'

function Fryzjerstwo() {
  return(
    <>
      <div className="center-container">
        <div className="web-top3">
          <h1 className="web-top-title2">
            Ceny, które odpowiadają Twoim wymaganiom
          </h1>
        </div>
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
                    <p>Klasyczne</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Maszynka</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Włosy długie</p>
                    <h4 className='price'>36 zł</h4>
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
                    <p>Klasyczne (Mycie)</p>
                    <h4 className='price'>68 / 85 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Podcięcie końcówek + mycie</p>
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
                <h2 className='offer-name margin-right'>Strzyżenie damskie</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Klasyczne (Mycie)</p>
                    <h4 className='price'>68 / 85 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Podcięcie końcówek + mycie</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                </div>
              </div>
            </div>
            <div className='offer-box' id='b3'>
              <img src={cennik3} />
              <div className='cennik-box-text'>
                <h2 className='offer-name margin-left'>Koloryzacja</h2>
                <div className='offer-prices'>
                  <div className='offer-price'>
                    <p>Włosy krótkie</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Włosy średnie / + strzyżenie</p>
                    <h4 className='price'>74 / 95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Włosy długie / + strzyżenie</p>
                    <h4 className='price'>92 / 160 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Kolor Duo / Refleks</p>
                    <h4 className='price'>+50 / 90 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Dekoloryzacja</p>
                    <h4 className='price'>125 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Koloryzacja Airtouch</p>
                    <h4 className='price'>165 zł</h4>
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
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy średnie + strzyżenie</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy długie + strzyżenie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy krótkie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy średnie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy długie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy średnie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy długie</p>
                    <h4 className='price'>95 zł</h4>
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
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy średnie + strzyżenie</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Refleksy / Pasemka włosy długie + strzyżenie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy krótkie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy średnie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Baleyage / Tonowanie włosy długie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy średnie</p>
                    <h4 className='price'>95 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Sombre / Ombre włosy długie</p>
                    <h4 className='price'>95 zł</h4>
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
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Pielęgnacja</p>
                    <h4 className='price'>74 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Mikroflex włosy średnie</p>
                    <h4 className='price'>36 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Mikroflex włosy długie</p>
                    <h4 className='price'>36 zł</h4>
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
                    <p>Zagęszczenie włosów</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Konsultacja</p>
                    <h4 className='price'>74 zł</h4>
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
                    <p>Zagęszczenie włosów</p>
                    <h4 className='price'>68 zł</h4>
                  </div>
                  <hr className='offer-line' />
                  <div className='offer-price'>
                    <p>Konsultacja</p>
                    <h4 className='price'>74 zł</h4>
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