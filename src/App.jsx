import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./sites/HomePage"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Portfolio from "./sites/Porfolio"
import Fryzjerstwo from "./sites/Cennik_sites/Fryzjerstwo"
import Kosmetyka from "./sites/Cennik_sites/Kosmetyka"
import Uslugi from "./sites/Uslugi_sites/Usluga"
import Kontakt from "./sites/Kontakt"
import ScrollToTop from "./components/ScrollToTop"
import NavbarScrolled from "./components/NavbarScrolled"

function App() {
  return (
    <>
      <Router>
        <div className="animations">
          <ScrollToTop />
          <NavbarScrolled />
        </div>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cennik/fryzjerstwo" element={<Fryzjerstwo />} />
          <Route path="/cennik/kosmetyka" element={<Kosmetyka />} />
          <Route path="/uslugi" element={<Uslugi />} />
          <Route path='/kontakt' element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
