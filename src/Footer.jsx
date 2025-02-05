import logo from "./assets/images/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
    return <div className="footer">
            <Link to='/'><ul className="footer-list" id="list1">
                <li className="footer-list-line" id="firstInFooter"><img src={logo}/></li>
            </ul></Link>
            <ul className="footer-list" id="list2">
                <li className="footer-list-line"><Link to='/'>Strona Główna</Link></li>
                <li className="footer-list-line"><Link to='/uslugi'>Usługi</Link></li>
                <li className="footer-list-line"><Link to='/portfolio'>Portfolio</Link></li>
				<li className="footer-list-line"><Link to='/cennik/strzyzenie'>Cennik</Link></li>
                <li className="footer-list-line"><Link to='/kontakt'>Kontakt</Link></li>
            </ul>
            <ul className="footer-list" id="list3">
                <li className="footer-list-line">MB Studio Urody</li>
                <li className="footer-list-line">Adres</li>
                <li className="footer-list-line">Sosnowiec</li>
				<li className="footer-list-line">Mail</li>
				<li className="footer-list-line">782 866 220</li>
            </ul>
        </div>
}

export default Footer








