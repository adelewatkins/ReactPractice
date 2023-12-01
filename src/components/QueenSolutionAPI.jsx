import { useState, useEffect } from "react";
import Queen from "./Queen";
import axios from "axios";



function QueensSolutionAPI() {
    const [filter, setFilter] = useState("");
    const [queens, setQueens] = useState([]);


    // This gets the queen data from an API 
    // instead of a local json file
    function getQueens() {
        axios.get("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json")

        // The setqueens is whats used to update the usestate 
            .then((response) => { setQueens(response.data) })
            .catch((error) => { setQueens("Error, please try again"); })
    
        }


    function handleChange(event) {

        console.log("Event:", event);
        console.log("Target:", event.target);
        console.log("Value:", event.target.value);

        setFilter(event.target.value);
    }

    // This will make the info be triggered when the page
    // loads rather than needing the button in return.
    // [] are to prevent infinite loop
    // The useeffect below is what we can use to 
    // prevent needing the button

    // useEffect(() => { getQueens() }, [])

    const queenComponents = [];
    for (const queen of queens) {

        if (filter.length === 0 || queen.nm.toLowerCase().startsWith(filter.toLowerCase())) {
            queenComponents.push(
                <Queen key={queen.nm + " " + queen.yrs}
                    nm={queen.nm}
                    cty={queen.cty}
                    hse={queen.hse}
                    yrs={queen.yrs} />
            );
        }
    }

    // The if statement causes the button to show 
    // if queens input is equal to 0 and disappear
    // if it is not 

    if (queens.length == 0) {

        return (<div>
            <h2>Monarchs</h2>
            <input type="text" placeholder="Type here.."
                value={filter} onChange={handleChange} />

            {/* button no longer required do to use effect code
            launching the data instead  */}
            <button onClick={() => getQueens()}>
                Click for Monarchs</button>

            {queenComponents}
        </div>)

    } else {

        return (
            <div>
                <h2>Monarchs</h2>
                <input type="text" placeholder="Type here.."
                    value={filter} onChange={handleChange} />

                {/* button no longer required do to use effect code
            launching the data instead  */}


                {queenComponents}
            </div>)

    }
}

export default QueensSolutionAPI;








