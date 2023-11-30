import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import Queens from './components/QueenSolution';
import CatFacts from './components/CatFacts';


function App() {


  return (
    <div>

      {/* this is the component containing the 3 buttons
      with functions from MyButton.jsx */}
      <MyButton />

      <h2>Counter</h2>
      <Counter />
      {/* <Queens /> */}
      <CatFacts />

    </div>


  );
}

export default App;
