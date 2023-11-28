import logo from './logo.svg';
import './App.css';
import Trainee from './components/Trainee';
import Christmas from './components/Christmas';
import Pets from './components/Pets';
import pet from './data/pet.json';


function App() {
  console.log("Pets:", pet);

  const petComponents = [];
  // looping through each pet in the json file
  for (const animal of pet) {
    console.log("Pet:", animal);
    petComponents.push(
      // Pulling the data from the json file
      <Pets Name={animal.Name} Breed={animal.Breed}
        Colour={animal.Colour} Nickname={animal.Nickname} />
    );

  }

  return (
    <div>
      <heading>
        <h1> React Week One</h1>
      </heading>
      <section>
        <p> Trying react, day one</p>
        <input placeholder='add text here..'></input>
        <button>Click Here</button>
        <br />
        <ul>
          <li>List thing one</li>
          <li>List thing two</li>
        </ul>
        {/*because of props on the trainee page we can set what
        data appears when we do the trainee component  */}
        <Trainee name="Adele" age="27" job="LBG" />
        <Christmas />
        <br />
      </section>
      
      <section>

        <h1>Pet Corner</h1>
        <img src='https://th.bing.com/th/id/R.934347256ce6150f1d9fc5c25684f9a3?rik=Vi8OB%2bl6H6PdUA&pid=ImgRaw&r=0' width={250} />
        {/* Again because of props on the pets page 
        we can input the data we want for each component */}
        <Pets name="Herbie" breed="Springador" colour="Black & White" nickname="Herbalish" />
        <Pets name="Ted" breed="Cockapoo" colour="Black & White" nickname="Terry" />
        <Pets name="Charlie" breed="Cocker Spaniel" colour="Brown" nickname="Charlos" />
        <img src='https://th.bing.com/th/id/R.934347256ce6150f1d9fc5c25684f9a3?rik=Vi8OB%2bl6H6PdUA&pid=ImgRaw&r=0' width={350} />
        <br />

        <h1>Json Practice</h1>
        {/* calling the pet components array to the page */}
        {petComponents}
      </section>

    </div>


  );
}

export default App;
