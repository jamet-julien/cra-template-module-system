import React from "react";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const { count } = useSelector(st => st.counter);
    const dispatch = useDispatch();

    const increment = () => dispatch({ type: "INCREMENT" });
    const decrement = () => dispatch({ type: "DECREMENT" });

    return (
        <>
            <span>counter : {count}</span>
            <br />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
};

export default Counter;
