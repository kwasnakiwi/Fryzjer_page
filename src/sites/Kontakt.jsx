import './../styles/Kontakt.css';
import icon1 from './../assets/images/b 1.png'
import icon2 from './../assets/images/g1 1.png'
import icon3 from './../assets/images/path1 1.png'

function Kontakt() {
  return(
		<div className='center-container'>
			<div className='web-top3 web-top5'>
				<h1 className="web-top-title2 web-top-title3">Zarezerwuj termin u naszych ekspertów</h1>
				<div className='contact-icons'>
					<div className='icon1'>
						<img src={icon1} />
					</div>
					<div className='icon2'>
						<img src={icon2} />
						<h5>
							Ul.Poniatowskiego 4A<br/>
							41-203 Sosnowiec
						</h5>
					</div>
					<div className='icon3'>
						<img src={icon3} />
						<h5>
							123 123 123
						</h5>
					</div>
				</div>
			</div>
			<main className='main-page3'>
				<div className='map-box'>
					<iframe className='map2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.636628404545!2d19.15262641185138!3d50.2987104981595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716da8a67c52f83%3A0x17ec9310a84e9ceb!2sPaderewska%20Agnieszka.%20Salon%20fryzjerski!5e0!3m2!1spl!2spl!4v1733502509438!5m2!1spl!2spl" width='1000px' style={{border: 0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</main>
		</div>
	)
}

export default Kontakt