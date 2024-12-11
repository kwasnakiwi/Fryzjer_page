import './../../styles/Uslugi.css';
import { Link } from 'react-router-dom';
import usluga1 from './../../assets/images/usluga1.png';
import arrow from './../../assets/images/arrow4.png'

function Usluga2() {
	return(
		<div className="center-container">
			<div className="web-top3 web-top4">
				<h1 className='web-top-title2'>Poznaj Pełen Zakres Usług Naszego Studia</h1>
			</div>
			<main className='main-cont2'>
				<div className='site-navbar site-navbar2'>
            <Link to='/uslugi/strzyzenie'>Strzyżenie</Link>
            <Link id='blue' to='/uslugi/paznokcie'>Paznokcie</Link>
            <Link to='/uslugi/stylizacja'>Stylizacja</Link>
        </div>
				<div className='uslugi2'>
					<div className='usluga'>
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
					</div>
					<div className='usluga'>
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
					</div>
					<div className='usluga'>
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
					</div>
					<div className='usluga'>
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
					</div>
					<div className='usluga'>
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
					</div>
					<div className='usluga'>
						<img src={usluga1}/>
						<div className='usluga-under'>
							<h3>STRZYŻENIE</h3>
						</div>
					</div>
				</div>
				<div className='button'>
				<Link to='/cennik/strzyzenie' className='uslugi-btn'>Zobacz ceny<img src={arrow}/></Link>
				</div>
			</main>
		</div>
	)
}

export default Usluga2