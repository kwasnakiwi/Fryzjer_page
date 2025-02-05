import './../../styles/Uslugi.css';
import { Link } from 'react-router-dom';
import usluga1 from './../../assets/images/Rectangle 26 (7).png';
import usluga2 from './../../assets/images/Rectangle 26 (8).png';
import usluga3 from './../../assets/images/Rectangle 26 (9).png';
import usluga4 from './../../assets/images/Rectangle 26 (10).png';
import usluga5 from './../../assets/images/Rectangle 26 (11).png';
import usluga6 from './../../assets/images/Rectangle 26 (12).png';
import arrow from './../../assets/images/arrow4.png'
import { useEffect } from 'react';

function Usluga() { 

	function initHideEffect() {
		// Pobieramy wszystkie elementy .usluga i .usluga-under
		const uslugi = document.querySelectorAll(".usluga");
	
	
		// Funkcja do ukrywania .usluga-under
		const handleMouseEnter = (event) => {
			const usluga = event.currentTarget;
			const uslugaUnder = usluga.querySelector(".usluga-under");
			if (uslugaUnder) uslugaUnder.classList.add("hidden");
		};
	
		// Funkcja do pokazywania .usluga-under
		const handleMouseLeave = (event) => {
			const usluga = event.currentTarget;
			const uslugaUnder = usluga.querySelector(".usluga-under");
			if (uslugaUnder) uslugaUnder.classList.remove("hidden");
		};
	
		// Dodajemy event listenery do każdej usługi osobno
		uslugi.forEach((usluga) => {
			usluga.addEventListener("mouseenter", handleMouseEnter);
			usluga.addEventListener("mouseleave", handleMouseLeave);
		});
	
		// Czyszczenie eventów przy odmontowaniu
		return () => {
			uslugi.forEach((usluga) => {
				usluga.removeEventListener("mouseenter", handleMouseEnter);
				usluga.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	}
	
	useEffect(() => {
		const cleanup = initHideEffect();
		return cleanup;
	}, []); 
	


	return(
		<div className="center-container">
			<div className="web-top3 web-top4">
				<h1 className='web-top-title2'>Poznaj Pełen Zakres Usług Naszego Studia</h1>
			</div>
			<main className='main-cont3'>
				<div className='uslugi2'>
					<Link to='/cennik/fryzjerstwo#b1'>
						<div className='usluga'>
							<img src={usluga1}/>
							<div className='usluga-under'>
								<h3>STRZYŻENIE</h3>
							</div>
							<div className='text-hover'>
								<h3>STRZYŻENIE</h3>
								<ul>
									<li>Klasyczne męskie</li>
									<li>Maszynka</li>
									<li>Klasyczne damskie + mycie</li>
									<li>Podcięcie końcówek</li>
								</ul>
							</div>
						</div>
					</Link>
					<Link to='/cennik/fryzjerstwo#b3'>
						<div className='usluga'>
							<img src={usluga2}/>
							<div className='usluga-under'>
								<h3>KOLORYZACJA</h3>
							</div>
							<div className='text-hover'>
								<h3>KOLORYZACJA</h3>
								<ul>
									<li>Klasyczna</li>
									<li>Kolor Duo / Refleks</li>
									<li>Airtouch</li>
									<li>Dekoloryzacja</li>
								</ul>
							</div>
						</div>
					</Link>
					<Link to='/cennik/fryzjerstwo#b5'>
						<div className='usluga'>
							<img src={usluga3}/>
							<div className='usluga-under'>
								<h3>ZABIEGI PIELĘGNACYJNE</h3>
							</div>
							<div className='text-hover'>
								<h3>ZABIEGI PIELĘGNACYJNE</h3>
								<ul>
									<li>Pielęgnacja</li>
									<li>Keratynowe prostowanie</li>
									<li>Mikroflex</li>
								</ul>
							</div>
						</div>
					</Link>
					<Link to='/cennik/kosmetyka#b1'>
						<div className='usluga'>
							<img src={usluga4}/>
							<div className='usluga-under'>
								<h3>MANICURE</h3>
							</div>
							<div className='text-hover'>
								<h3>MANICURE</h3>
								<ul>
									<li>Klasyczny</li>
									<li>Hybrydowy</li>
									<li>Usunięcie masy</li>
									<li>Naprawa paznokci</li>
								</ul>
							</div>
						</div>
					</Link>
					<Link to='/cennik/kosmetyka#b3'>
						<div className='usluga'>
							<img src={usluga5}/>
							<div className='usluga-under'>
								<h3>ŻEL / AKRYLOŻEL</h3>
							</div>
							<div className='text-hover'>
								<h3>ŻEL / AKRYLOŻEL</h3>
								<ul>
									<li>W butelce</li>
									<li>Korekta paznokci naturalnych</li>
								</ul>
							</div>
						</div>
					</Link>
					<Link to='/cennik/kosmetyka#b5'>
						<div className='usluga'>
							<img src={usluga6}/>
							<div className='usluga-under'>
								<h3>ZDOBIENIE</h3>
							</div>
							<div className='text-hover'>
								<h3>ZDOBIENIE</h3>
								<ul>
									<li>French / ombre</li>
									<li>Naklejka / stempel</li>
									<li>Ręcznie malowane</li>
								</ul>
							</div>
						</div>
					</Link>
				</div>
				<div className='button'>
					<Link to='/cennik/fryzjerstwo' className='uslugi-btn'>Zobacz ceny<img src={arrow}/></Link>
				</div>
			</main>
		</div>
	)
}

export default Usluga