import './../../styles/Uslugi.css';
import { Link } from 'react-router-dom';
import usluga1 from './../../assets/images/usluga1.png';
import arrow from './../../assets/images/arrow4.png'

function Usluga1() {
	return(
		<div className="center-container">
			<div className="web-top3 web-top4">
				<h1 className='web-top-title2'>Poznaj Pełen Zakres Usług Naszego Studia</h1>
			</div>
			<main className='main-cont2'>
				<div className='site-navbar site-navbar2'>
            <Link id="blue" to='/uslugi/strzyzenie'>Strzyżenie</Link>
            <Link to='/uslugi/paznokcie'>Paznokcie</Link>
            <Link to='/uslugi/stylizacja'>Stylizacja</Link>
        </div>
				<div className='uslugi2'>
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
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
						<div className='text-hover'>
							<p>Lorem ipsum<br/>dolor sit amet</p>
						</div>
					</div>
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
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
						<div className='text-hover'>
							<p>Lorem ipsum<br/>dolor sit amet</p>
						</div>
					</div>
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
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
						<div className='text-hover'>
							<p>Lorem ipsum<br/>dolor sit amet</p>
						</div>
					</div>
				</div>
				<div className='button'>
					<Link to='/cennik/fryzjerstwo' className='uslugi-btn'>Zobacz ceny<img src={arrow}/></Link>
				</div>
			</main>
		</div>
	)
}

export default Usluga1