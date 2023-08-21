import {useState} from "react";

export function Counter2() {
    const [count, setCount] = useState(0);
    const handleCount = () => (
        setCount(prevState => prevState + 1),
        setCount(prevState => prevState + 1)
    )

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => handleCount()}>Add 2</button>
        </>
    )
}