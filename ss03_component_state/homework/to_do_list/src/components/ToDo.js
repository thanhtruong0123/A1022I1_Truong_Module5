import {Component} from "react";

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            toDoName : "",
            toDoList : ["Làm bài tập", "Làm việc nhà"]
        }
    }

    handleInputName(value) {
        this.setState({
            toDoName: value
        })
    }

    addToDo() {
        this.setState({
            toDoList: [...this.state.toDoList, this.state.toDoName],
            toDoName: ""
        })
    }

    render() {
        return (
            <>
                <input value={this.state.toDoName} onChange={(event)=> this.handleInputName(event.target.value)}/>
                <button onClick={() => this.addToDo()}>Add</button>
                <ul>
                    {this.state.toDoList.map((toDo, index) => {
                        return <li key={index}>{toDo}</li>
                    })}
                </ul>
            </>
        )
    }
}

export default ToDo;