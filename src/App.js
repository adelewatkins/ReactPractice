import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import Queens from './components/QueenSolution';
import CatFacts from './components/CatFacts';
import QueensAPI from './components/QueenSolutionAPI';
import QueensSolutionAPI from './components/QueenSolutionAPI';


function App() {


  return (
    <div>

      {/* this is the component containing the 3 buttons
      with functions from MyButton.jsx */}
      <h2>Counter</h2>
      <Counter />
      <CatFacts />
     <QueensSolutionAPI />

    </div>


  );
}

export default App;
