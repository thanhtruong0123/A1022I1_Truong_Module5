import {useState} from "react";

export function Student() {
    const [studentList, setStudentList] = useState(["HaiTT", "TrungDP"]);
    const [studentName, setStudentName] = useState("");

    const addStudent = () => {
        setStudentList([...studentList, studentName]);
        setStudentName("");
    }

    return (
        <>
            <input value={studentName} onChange={(event) => setStudentName(event.target.value)}/>
            <button onClick={() => addStudent()}>Add</button>
            <ul>
                {studentList.map((value, key) => {
                    return <li key={key}>{value}</li>
                })}
            </ul>
        </>
    )
}
