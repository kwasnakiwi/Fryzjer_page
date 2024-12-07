import './../styles/Portfolio.css'
import zdj1 from './../assets/images/zdj1.png';
import zdj2 from './../assets/images/zdj2.png';
import zdj3 from './../assets/images/zdj3.png';
import zdj4 from './../assets/images/zdj4.png';
import zdj5 from './../assets/images/zdj5.png';
import zdj6 from './../assets/images/zdj6.png';
import zdj7 from './../assets/images/zdj7.png';
import zdj8 from './../assets/images/zdj8.png';
import zdj9 from './../assets/images/zdj9.png';

function Portfolio() {
  return(
    <>
      <div className='center-container'>
        <div className="web-top2">
          <h1 className="web-top-title2">
            Zainspiruj się naszymi stylizacjami, 
            które podkreślą Twój charakter.
          </h1>
        </div>
        <main className='main-box'>
          <div className='images-box'>
            <div className='images'>
              <img src={zdj1}/>
              <img className='center-col' src={zdj2}/>
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