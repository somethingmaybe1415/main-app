import img from "./assets/phone.png"
import olye from "./assets/fokus.png"

import './App.css';

function App() {
  return (
    <header>
    <div className="container flex">
    { <img src={olye} alt="" /> }
    <nav className="yozuv flex">
      <li><a href="#"><span>Home</span></a></li>
      <li><a href="#">Product</a></li>
      <li><a href="#">Faq</a></li>
      <li><a href="#">Contact</a></li>
    </nav>
  </div>
  <div className="App">
      <hr className='hr'/>
      <h1>How the app Works</h1>
      <div className="container">
        <img src={img} alt="" />

        <div className="cont-main">
      <h3><span>Create an Account</span></h3>
      <h2>Create/login to an existing <br /> account to get started</h2>
      <p>An account is created with your email <br /> and a desired password</p>
        </div>

      </div>

            <div className="container">


        <div className="cont-mainn">
      <h3><span>Explore varieties</span></h3>
      <h2>Shop for your favorites<br /> meal as e dey hot.</h2>
      <p>Shop for your favorite meals or drinks<br />and enjoy while doing it.</p>
        </div>
                <img src={img} alt="" />
        
      </div>


            <div className="container">
        <img src={img} alt="" />

        <div className="cont-main">
      <h3><span>Checkout</span></h3>
      <h2>When you done check out<br />and get it delivered.</h2>
      <p>When you done check out and get it  <br /> delivered with ease.</p>
        </div>
        
      </div>

 
         <div className="app-container">
      <div className="content">
        <h1>Download the app now.</h1>
        <p>Available on your favorite store. Start your premium experience now.</p>
        <div className="buttons">
          <a href="#" className="button playstore">Playstore</a>
          <a href="#" className="button">App store</a>
        </div>
      </div>
      </div>
      
      
    </div>  <div className="App">
      <hr className='hr'/>
      <h1>How the app Works</h1>
      <div className="container">
        <img src={img} alt="" />

        <div className="cont-main">
      <h3><span>Create an Account</span></h3>
      <h2>Create/login to an existing <br /> account to get started</h2>
      <p>An account is created with your email <br /> and a desired password</p>
        </div>

      </div>

            <div className="container">


        <div className="cont-mainn">
      <h3><span>Explore varieties</span></h3>
      <h2>Shop for your favorites<br /> meal as e dey hot.</h2>
      <p>Shop for your favorite meals or drinks<br />and enjoy while doing it.</p>
        </div>
                <img src={img} alt="" />
        
      </div>


            <div className="container">
        <img src={img} alt="" />

        <div className="cont-main">
      <h3><span>Checkout</span></h3>
      <h2>When you done check out<br />and get it delivered.</h2>
      <p>When you done check out and get it  <br /> delivered with ease.</p>
        </div>
        
      </div>

 
         <div className="app-container">
      <div className="content">
        <h1>Download the app now.</h1>
        <p>Available on your favorite store. Start your premium experience now.</p>
        <div className="buttons">
          <a href="#" className="button playstore">Playstore</a>
          <a href="#" className="button">App store</a>
        </div>
      </div>
      </div>
      
      
    </div>


  </header>
  );
}

export default App;
