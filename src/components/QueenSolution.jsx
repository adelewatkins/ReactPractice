import { useState } from "react";
import queens from '../data/queens.json';
import Queen from "./Queen";


function Queens() {
    const [filter, setFilter] = useState("");

    function handleChange(event) {
        // browser triggers an event whenever the page is interacted with
        // this event is passed into any event handler function
        console.log("Event:", event);
        // the target of the event is whatever element it was triggered on
        console.log("Target:", event.target);
        // as it's an input I can grab the contents with .value
        console.log("Value:", event.target.value);

        setFilter(event.target.value);
    }

    console.log("Filter:", filter);
    const queenComponents = [];
    // looping through each queen in the json file
    for (const queen of queens) {
        // if filter is blank OR the queens name matches the 
        // filter put them on the page. To lower case makes it
        // case insensitive. Starts with filters as you type
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
            <h2>Queens</h2>
            <input type="text" placeholder="Type here.." 
               value={filter} onChange={handleChange} />
            {queenComponents}
        </div>
    );
}

export default Queens;






