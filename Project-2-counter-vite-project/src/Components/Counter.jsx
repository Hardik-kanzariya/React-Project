import {useState} from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    
    const decrement = () => {
        setCount(count-1);
    
    if (count <= 0) {
        alert("Counter can't be Negative");
        setCount(0);
    }
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div className="counter">
            <h1>Counter</h1>
            <h1 className="count">{count}</h1>
            <div className="buttons">
                <button className="btn increment" onClick={increment}>+</button>
                <button className="btn reset" onClick={reset}>Reset</button>
                <button className="btn decrement" onClick={decrement}>-</button>
                </div>
                </div>

    )
        
}

export default Counter;