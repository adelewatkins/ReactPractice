import { useState } from "react";
import axios from "axios";


function CatFacts() {
const [fact, setFact] = useState("");

function getFact(){

    axios.get("https://catfact.ninja/fact")

    .then((response) => {
        setFact(response.data.fact)
    })

    .catch ((error) => {
        setFact("There was an error, please try again");
    })
}

    return ( 
        <div>
            <h1> Cat Facts</h1>
            <p>{fact}</p>

            <button onClick={() => getFact()}>Click for fact</button>
        </div>
     );
}




export default CatFacts;