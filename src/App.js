import './App.css';
import logoIron from "./images/ironhack-logo-xs.png";
import menuNav from "./images/menu-top-xs.png";
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
        <header>
          <img src={logoIron} alt='ironhack-logo'/>
          <img src={menuNav} alt='menu-rop-img'/>
        </header>
      <div className='App-header'>
        <section>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </section>
      </div>
      <div className='main'>
        <div>
          <img src={icon1} alt='icon 1'/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt="icon 2"/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon 3"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src={icon4} alt="icon 4"/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
export default App;