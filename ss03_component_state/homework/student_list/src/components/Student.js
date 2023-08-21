import {Component} from "react";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList : [
                {
                    studentId : 1,
                    studentName : 'Nguyen Van A',
                    studentAge : 30,
                    studentAddress : 'Hanoi'
                },
                {
                    studentId : 2,
                    studentName : 'Truong Thanh Truong',
                    studentAge : 24,
                    studentAddress : 'Danang'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {this.state.studentList.map((student, index) => {
                        return <tr key={index}>
                            <td>{student.studentId}</td>
                            <td>{student.studentName}</td>
                            <td>{student.studentAge}</td>
                            <td>{student.studentAddress}</td>
                        </tr>
                    })}
                </table>
            </>
        )
    }
}

export default Student;
