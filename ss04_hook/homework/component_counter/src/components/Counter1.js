import {useState} from "react";

export function Counter1() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => handleCount()}>Add 1</button>
        </>
    )
}