import './../styles/HomePage.css'
import arrow1 from './../assets/images/arrow.png';
import opinia1 from './../assets/images/opinia1.jpg';
import opinia2 from './../assets/images/opinia2.jpg';
import opinia3 from './../assets/images/opinia3.jpg';
import opinia4 from './../assets/images/opinia4.jpg';
import opinia5 from './../assets/images/opinia5.jpg';
import star from './../assets/images/star.png';
import pani from './../assets/images/pani.jpg';
import usluga1 from './../assets/images/Rectangle 26 (13).png';
import usluga3 from './../assets/images/Rectangle 26 (14).png';
import arrow3 from './../assets/images/arrow3.png';
import arrow2 from './../assets/images/arrow2.png';
import spec1 from './../assets/images/specj1.jpg';
import spec2 from './../assets/images/specj2.jpg';
import spec3 from './../assets/images/specj3.jpg';
import spec4 from './../assets/images/spec4.jpg';
import malpa from './../assets/images/malpa.png';
import localization from './../assets/images/localizacion.png';
import phone from './../assets/images/phone.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function HomePage() {
  return(
    <>
      <Helmet>
        <title>MB Studio Urody - Sosnowiec</title>
        <meta name='description' content='Zapraszamy do MB Studio Urody! Oferujemy kompleksowe usługi fryzjerskie – strzyżenie, koloryzację i stylizację włosów, a także zabiegi kosmetyczne takie jak żele, manicure, zdobienia i wiele więcej. Zapraszamy!' />
        <meta name='keywords' content='strzyżenie męskie, strzyżenie, koloryzacja, stylizacja włosów, zabiegi kosmetyczne, żele, manicure, salon urody, studio urody'/>
      </Helmet>
      <div className="center-container">
        <div className="web-top">
            <div className='web-top-text'>
            <h1 className="web-top-title">MB Studio Urody – zaufaj profesjonalistom!</h1>
            <h2 className="web-top-desc">
            MB Studio Urody to wyjątkowe miejsce, w którym pasja łączy się z doświadczeniem. Specjalizujemy się w fryzjerstwie, kosmetologii oraz stylizacji paznokci, oferując usługi na najwyższym poziomie.
            </h2>
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
                <h2>Perfekcyjna fryzura w naszym salonie</h2>
                <p>
                Nasz salon fryzjerski to miejsce, gdzie tradycja spotyka się z nowoczesnością. 
                W przytulnej atmosferze, z dbałością o każdy detal, oferujemy szeroki zakres 
                usług: od klasycznych cięć po najnowsze techniki koloryzacji. Doświadczony 
                zespół, profesjonalne produkty i indywidualne podejście gwarantują, że każdy 
                klient wyjdzie zadowolony. Zapraszamy
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
                </div>
              <div className='usluga lastUsluga'>
                <img src={usluga3}/>
                <div className='usluga-under'>
                  <h3>MANICURE</h3>
                </div>
                </div>
              </div>
              <Link  className='btn2' to='/uslugi'>
                  Zobacz wszystkie uslugi<img src={arrow3}/>
              </Link>
            </div>
            <div className='ppl-box'>
              <hr className='ppl-line' />
              <h2 className="ppl-title">Specjaliści od perfekcji</h2>
              <div className='ppl'>
                <div className='person'>
                  <img src={spec1}/>
                  <div  id='different-spec'>
                    <h3><b>Paulina</b> - Stylistka Paznokci</h3>
                  </div>
                </div>
                <div className='person'>
                  <img src={spec2}/>
                  <div>
                    <h3><b>Izabela</b> - Fryzjerka</h3>
                  </div>
                </div>
                <div className='person'>
                  <img src={spec3}/>
                  <div>
                    <h3><b>Karolina</b> - Fryzjerka</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='wizytowka-box'>
              <div className="wizytowka">
                <div className='wizytowka-left'>
                  <h3 className='wizytowka-title'>
                  Twoja metamorfoza zaczyna się tutaj – umów wizytę online!
                  </h3>
                  <h4 className='wizytowka-desc'>
                  Rezerwacja jeszcze nigdy nie była tak prosta!
                  Dzięki Booksy szybko i wygodnie wybierzesz dogodny termin.
                  Kliknij poniżej i zarezerwuj swoją wizytę już teraz
                  </h4>
                  <button className='btn3'>
                    <a target='_blank' href='http://mbstudiourody.booksy.com/a'>Rezerwuj przez Booksy</a><img src={arrow2}/>
                  </button>
                </div>
                <div className='wizytowka-right'>
                  <iframe className='map1' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d637.2229444142265!2d19.241632269694005!3d50.29394799822267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDE3JzM4LjIiTiAxOcKwMTQnMzIuMiJF!5e0!3m2!1spl!2spl!4v1739103953808!5m2!1spl!2spl" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
                </div>
              </div>
              <div className='icons'>
                
                  <div className='icon-box'>
                  <a target='_blank' href="mailto:mbstudiourodykontakt@gmail.com">
                    <img src={malpa}/>
                    <h4>mbstudiourodykontakt@gmail.com</h4>
                  </a>
                  </div>
                  <div className='icon-box nd2'>
                    <img src={localization}/>
                    <h4>Wagowa 11A,<br/>
                        41-215 Sosnowiec</h4>
                  </div>
                    <div className='icon-box lastIcon'>
                    <a href="tel:+48782866220" target='_blank'>
                      <img src={phone}/>
                      <h4>782 866 220</h4>
                      </a>
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
