import {useEffect, useState} from "react";

export function UpdateName() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        console.log("use effect");
        return () => {
            console.log("Clean up")
        }
    }, [name]);

    return (
        <>
            <h2>{name}</h2>
            <input onChange={(event) => setName(event.target.value)}/>
            <input onChange={(event) => setAddress(event.target.value)}/>
        </>
    )
}
