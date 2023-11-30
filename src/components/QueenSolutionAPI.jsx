import { useState } from "react";
import Queen from "./Queen";
import axios from "axios";



function QueensSolutionAPI() {
    const [filter, setFilter] = useState("");
    const [queens, setQueens] = useState("");

    function getQueens() {
        axios.get("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json")

            .then((response) => {
                setQueens(response.data)
            })
            .catch((error) => {
                setQueens("There was an error, please try again");
            })

    }
    function handleChange(event) {

        console.log("Event:", event);
        console.log("Target:", event.target);
        console.log("Value:", event.target.value);

        setFilter(event.target.value);
    }


    console.log("Filter:", filter);
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
    return (
        <div>
            <h2>Monarchs</h2>
            <input type="text" placeholder="Type here.."
                value={filter} onChange={handleChange} />
            <button onClick={() => getQueens()}>Click for Monarchs</button>
            {queenComponents}
        </div>
    );
}

export default QueensSolutionAPI;








