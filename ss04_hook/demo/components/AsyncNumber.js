    import {useState} from "react";

export function AsyncNumber() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => handleCount()}>Increment</button>
        </>
    )
}
