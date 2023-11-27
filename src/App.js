import logo from './logo.svg';
import './App.css';
import Trainer from './components/Trainer';

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
        <img src='https://www.gardeningknowhow.com/wp-content/uploads/2020/11/christmas-tree.jpg' width={300}></img>
      <Trainer/>
      </section>
    </div>


  );
}

export default App;
