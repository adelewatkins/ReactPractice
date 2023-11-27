import logo from './logo.svg';
import './App.css';
import Trainee from './components/Trainee';
import Christmas from './components/Christmas';


function App() {
  return (
    <div>
      <heading>
        <h1> React Week One</h1>
      </heading>
      <section>
        <p> Trying react, day one</p>
        <input placeholder='add text here..'></input>
        <button>Click Here</button>
        <br/>
        <br/>
      <Trainee/>
      <br/>
      <Christmas/>

      </section>
    </div>


  );
}

export default App;
