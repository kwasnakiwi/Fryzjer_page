import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./sites/HomePage"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Portfolio from "./sites/Porfolio"
import Strzyzenie from "./sites/Cennik_sites/Strzyzenie"
import Paznokcie from "./sites/Cennik_sites/Paznokcie"
import Regeneracja from "./sites/Cennik_sites/Regeneracja"
import Stylizacja from "./sites/Cennik_sites/Stylizacja"
import Usluga1 from "./sites/Uslugi_sites/Usluga1"
import Usluga2 from "./sites/Uslugi_sites/Usluga2"
import Usluga3 from "./sites/Uslugi_sites/Usluga3"
import Kontakt from "./sites/Kontakt"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <Router>
        <div className="animations">
          <ScrollToTop />
        </div>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cennik/strzyzenie" element={<Strzyzenie />} />
          <Route path="/cennik/paznokcie" element={<Paznokcie />} />
          <Route path="/cennik/regeneracja" element={<Regeneracja />} />
          <Route path="/cennik/stylizacja" element={<Stylizacja />} />
          <Route path="/uslugi/strzyzenie" element={<Usluga1 />} />
          <Route path='/uslugi/paznokcie' element={<Usluga2 />} />
          <Route path='/uslugi/stylizacja' element={<Usluga3 />} />
          <Route path='/kontakt' element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App