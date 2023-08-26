import React, {useState} from "react";

export function Car() {
    const [selectedCar, setSelectedCar] = useState({car: 'car', color: 'new'});

    const handleCarChange = (value) => {
        setSelectedCar({
            ...selectedCar,
            car: value
        })
    }

    const handleColorChange = (value) => {
        setSelectedCar({
            ...selectedCar,
            color: value
        })
    }

    return (
        <>
            <h1>Select your car</h1>

            <p>
                Select a car
                <select onChange={event => handleCarChange(event.target.value)}>
                    <option>Mercedes</option>
                    <option>BMW</option>
                    <option>Hyundai</option>
                    <option>Toyota</option>
                    <option>Ferrari</option>
                </select>
            </p>

            <p>
                Select a color
                <select onChange={event => handleColorChange(event.target.value)}>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>White</option>
                </select>
            </p>

            <h3>You selected a {selectedCar.color} {selectedCar.car}</h3>
        </>
    )


}