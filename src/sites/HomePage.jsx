import './../styles/HomePage.css'
import arrow1 from './../assets/images/arrow.png';
import opinia1 from './../assets/images/opinia1.jpg';
import opinia2 from './../assets/images/opinia2.jpg';
import opinia3 from './../assets/images/opinia3.jpg';
import opinia4 from './../assets/images/opinia4.jpg';
import opinia5 from './../assets/images/opinia5.jpg';
import star from './../assets/images/star.png';
import pani from './../assets/images/pani.jpg';
import usluga1 from './../assets/images/usluga1.png';
import usluga2 from './../assets/images/usluga2.png';
import usluga3 from './../assets/images/usluga3.png';
import arrow3 from './../assets/images/arrow3.png';
import arrow2 from './../assets/images/arrow2.png';
import spec1 from './../assets/images/spec1.jpg';
import spec2 from './../assets/images/spec2.jpg';
import spec3 from './../assets/images/spec3.jpg';
import spec4 from './../assets/images/spec4.jpg';
import malpa from './../assets/images/malpa.png';
import localization from './../assets/images/localizacion.png';
import phone from './../assets/images/phone.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return(
    <>
      <div className="center-container">
        <div className="web-top">
            <div className='web-top-text'>
            <h1 className="web-top-title">MB Studio Urody – zaufaj profesjonalistom!</h1>
            <p className="web-top-desc">
              MB Studio Urody to miejsce, gdzie specjalizujemy się w fryzjerstwie, 
              kosmetologii oraz stylizacji paznokci. Nasza oferta obejmuje 
              profesjonalne usługi stylizacji włosów i zabiegów kosmetycznych.
            </p>
            <Link to='/portfolio' className="btn1">Portfolio<img src={arrow1}/></Link>
          </div>
        </div>
        <main>
          <div className='opinions-box'>
            <h2 className='opinions-title'>Opinie naszych zadowolonych klientów</h2>
            <div className='opinions'>
              <div className='opinion'>
                <img className='opinion-img' src={opinia1}/>
                <div className='star-opinion'>
                  <h4>5<img src={star}/></h4>
                </div>
                <h3 className='opinion-cont'>"Świetna obsługa"</h3>
              </div>
              <div className='opinion'>
                <img className='opinion-img' src={opinia2}/>
                <div className='star-opinion'>
                  <h4>4,5<img src={star}/></h4>
                </div>
                <h3 className='opinion-cont'>"Profesjonalny zespół"</h3>
              </div>
              <div className='opinion hideOnMobile'>
                <img className='opinion-img' src={opinia3}/>
                <div className='star-opinion'>
                  <h4>4,3<img src={star}/></h4>
                </div>
                <h3 className='opinion-cont'>"Niezawodna jakość"</h3>
              </div>
              <div className='opinion hideOnMobile'>
                <img className='opinion-img' src={opinia4}/>
                <div className='star-opinion'>
                  <h4>4,3<img src={star}/></h4>
                </div>
                <h3 className='opinion-cont'>"Zawsze zadowolona"</h3>
              </div>
              <div className='opinion lastOpinion'>
                <img className='opinion-img' src={opinia5}/>
                <div className='star-opinion'>
                  <h4>5<img src={star}/></h4>
                </div>
                <h3 className='opinion-cont'>"Polecam serdecznie"</h3>
              </div>
            </div>
            <div className='description'>
              <img src={pani}/>
              <div className='description-text'>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum 
                  dolor sit amet consectetur. Lorem ipsum dolor sit 
                  amet consectetur. Lorem ipsum dolor sit amet consectetur. 
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor 
                  sit amet consectetur. Lorem ipsum dolor sit amet 
                  consectetur. Lorem ipsum dolor sit amet consectetur. 
                </p>
              </div>
            </div>
            <div className='uslugi-box'>
              <hr className='uslugi-line' />
              <h2 className='uslugi-title'>Nasze Usługi</h2>
              <div className='uslugi'>
                <div className='usluga'>
                  <img src={usluga1}/>
                  <div className='usluga-under'>
                    <h3>STRZYŻENIE</h3>
                  </div>
                  <div className='text-hover'>
							      <p>Lorem ipsum<br/>dolor sit amet</p>
						      </div>
                </div>
                <div className='usluga'>
                  <img src={usluga2}/>
                  <div className='usluga-under'>
                  <h3>USŁUGI PREMIUM</h3>
                </div>
                <div className='text-hover'>
							      <p>Lorem ipsum<br/>dolor sit amet</p>
						    </div>
              </div>
              <div className='usluga lastUsluga'>
                <img src={usluga3}/>
                <div className='usluga-under'>
                  <h3>MANICURE</h3>
                </div>
                <div className='text-hover'>
							      <p>Lorem ipsum<br/>dolor sit amet</p>
						    </div>
                </div>
              </div>
              <Link  className='btn2' to='/uslugi/strzyzenie'>
                  Zobacz wszystkie uslugi<img src={arrow3}/>
              </Link>
            </div>
            <div className='ppl-box'>
              <hr className='ppl-line' />
              <h2 className="ppl-title">Specjaliści od perfekcji</h2>
              <div className='ppl'>
                <div className='person'>
                  <img src={spec1}/>
                  <div>
                    <h3><b>Monika</b> - Fryzjerka</h3>
                  </div>
                </div>
                <div className='person'>
                  <img src={spec2}/>
                  <div>
                    <h3><b>Monika</b> - Fryzjerka</h3>
                  </div>
                </div>
                <div className='person'>
                  <img src={spec3}/>
                  <div>
                    <h3><b>Monika</b> - Stylistka</h3>
                  </div>
                </div>
                <div className='person'>
                  <img src={spec4}/>
                  <div>
                    <h3><b>Monika</b> - Stylistka</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='wizytowka'>
              <div className='wizytowka-left'>
                <h2 className='wizytowka-title'>
                  Umów się na wizytę online i 
                  zadbaj o swoje piękno już dziś!
                </h2>
                <p className='wizytowka-desc'>
                  Nie czekaj na idealny moment, umów się na wizytę 
                  w naszym salonie jednym kliknięciem! Korzystając z 
                  Booksy, szybko i wygodnie zarezerwujesz termin, 
                  który Ci odpowiada. Kliknij poniżej, aby przejść do 
                  rezerwacji i poczuj się wyjątkowo!
                </p>
                <button className='btn3'>
                  Rezerwuj przez Booksy<img src={arrow2}/>
                </button>
              </div>
              <div className='wizytowka-right'>
                <iframe className='map1' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2548.636810466018!2d19.1526264!3d50.2987071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716da8a67c52f83%3A0x17ec9310a84e9ceb!2sPaderewska%20Agnieszka.%20Salon%20fryzjerski!5e0!3m2!1spl!2spl!4v1732040764317!5m2!1spl!2spl"  height="475" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className='icons'>
                  <div className='icon-box'>
                    <img src={malpa}/>
                    <h4>example@gmail.com</h4>
                  </div>
                  <div className='icon-box'>
                    <img src={localization}/>
                    <h4>Jana Matejki 31,<br/>
                        41-219 Sosnowiec</h4>
                  </div>
                  <div className='icon-box lastIcon'>
                    <img src={phone}/>
                    <h4>123 123 123</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
