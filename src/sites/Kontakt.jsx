import './../styles/Kontakt.css';
import icon1 from './../assets/images/b 1.png'
import icon2 from './../assets/images/g1 1.png'
import icon3 from './../assets/images/path1 1.png'

function Kontakt() {
  return(
	<>
		<div className='center-container'>
			<div className='web-top3 web-top5'>
				<h1 className="web-top-title2 web-top-title3">Zarezerwuj termin u naszych ekspertów</h1>
				<div className='contact-icons'>
					<div className='icon1'>
						<a href='http://mbstudiourody.booksy.com/a'><img src={icon1} /></a>
					</div>
					<div className='icon2'>
						<img src={icon2} />
						<h5>
							Ul. Wagowa 11A,<br/>
							41-215 Sosnowiec
						</h5>
					</div>
					
					<div className='icon3'>
					<a href='tel:+48782866220'>
						<img src={icon3} />
						<h5>
							782 866 220
						</h5>
						</a>
					</div>
				</div>
			</div>
			<main className='main-page3'>
				<div className='map-box'>
				<iframe className='map2' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d637.2229444142265!2d19.241632269694005!3d50.29394799822267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDE3JzM4LjIiTiAxOcKwMTQnMzIuMiJF!5e0!3m2!1spl!2spl!4v1739103953808!5m2!1spl!2spl" width="1000px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</main>
		</div>
		</>
	)
}

export default Kontakt