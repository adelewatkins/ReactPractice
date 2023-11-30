
// This is importing the useState function
import { useState } from 'react';


function Counter() {

    // react tracks this value for us, count gets
    // the value from React. Set count Sets the value
    // but its not stored here
    const [count, setCount] = useState(0);

    return ( 
        <div>
            <input type="number" readOnly value={count} />
            <br/>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count + 5)}>+5</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 5)}>-5</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
     );
}

export default Counter;