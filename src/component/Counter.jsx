import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    console.log(count);
    console.log(setCount);
    const btnIncrease = () => {
        setCount(count + 1);
    }
    const btnDecrease = () => {
       if (count > 0) {
         setCount(count - 1);
        }
    };
    return (
      <div className="container">
        <h1>Set Count Value: </h1>
        <h3 className="text-success">Value: {count}</h3>
        <button onClick={btnIncrease} className="m-1 btn btn-warning">
          Increase
        </button>
        <button onClick={btnDecrease} className="btn btn-primary">
          Decrease
        </button>
      </div>
    );
};

export default Counter;