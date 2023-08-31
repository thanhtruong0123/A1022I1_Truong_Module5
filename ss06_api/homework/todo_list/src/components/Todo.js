import {Formik, Form, Field} from "formik";
import { useEffect, useState } from "react";
import * as todoService from "../services/TodoService"
import {toast} from 'react-toastify'

export function Todo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    const getAll = async () => {
        const result = await todoService.getAll();
        setTodos(result);
    };

    const addNewTodo = async (value) => {
        await todoService.addNewTodo(value);
        toast.success('Thêm mới thành công');
    }

    return (
        <>
            <h1>Todo List</h1>
            <Formik
                initialValues={{
                    task: "",
                }}
                onSubmit={(value, { setSubmitting }) => {
                    addNewTodo(value);
                    getAll();
                    setSubmitting(false);
                }}
            >
                <Form>
                    <Field type='text' className='form-control mb-3' name='task' />
                    <button type='submit' className="btn btn-primary mb-3">Submit</button>
                </Form>
            </Formik>

            <ul className="list-group">
                {
                    todos.map((todo) => (
                        <li className="list-group-item" key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </>

    )
}