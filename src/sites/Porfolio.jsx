import './../styles/Portfolio.css'
import zdj1 from './../assets/images/portfolio1.png';
import zdj2 from './../assets/images/portfolio2.png';
import zdj3 from './../assets/images/portfolio3.png';
import zdj4 from './../assets/images/portfolio4.png';
import zdj5 from './../assets/images/portfolio5.png';
import zdj6 from './../assets/images/portfolio6.png';
import zdj7 from './../assets/images/portfolio7.png';
import zdj8 from './../assets/images/portfolio8.png';
import zdj9 from './../assets/images/portfolio9.png';

function Portfolio() {
  return(
    <>
      <div className='center-container'>
        <div className="web-top2">
          <h1 className="web-top-title2">
          Portfolio pełne inspiracji – poznaj nasze możliwości!
          </h1>
        </div>
        <main className='main-box'>
          <div className='images-box'>
            <div className='images'>
              <img src={zdj2}/>
              <img className='center-col' src={zdj1}/>
              <img  src={zdj3}/>
              <img src={zdj4}/>
              <img className='center-col' src={zdj5}/>
              <img src={zdj6}/>
              <img src={zdj7}/>
              <img className='center-col' src={zdj8}/>
              <img src={zdj9}/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Portfolio