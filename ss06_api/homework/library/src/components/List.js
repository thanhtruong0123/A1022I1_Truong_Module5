import {useEffect, useState} from "react";
import * as bookService from "../service/BookService";
import '../App.css';
import { PencilSquare, TrashFill, PlusCircleFill } from 'react-bootstrap-icons'
import { CreateModal } from "./CreateModal";
import { RemoveBook } from "./Delete";

export function Book() {
    const [books, setBooks] = useState([]);
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [actionId, setActionId] = useState(0);

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        const result = await bookService.getAll();
        setBooks(result);
    };

    const booksAfterCreate = (newBook) => {
        setBooks([...books, newBook]);
    }

    const booksAfterDelete = (deleteId) => {
        const booksAfterDelete = books.filter(book => book.id !== deleteId);
        setBooks(booksAfterDelete);
    }

    return (
        <>
            <div className="header">
                <h2>Library</h2>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setShowModalCreate(true)}
                >
                    New &nbsp;<PlusCircleFill />
                </button>
            </div>
            <table className="table table-container">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Title</th>  
                        <th scope="col">Quantity</th>  
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, key) => (
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <button type='button' className="btn btn-primary" style={{ marginRight: "10px" }}>
                                        <PencilSquare />
                                    </button>
                                    <button
                                        type='button'
                                        className="btn btn-danger"
                                        onClick={() => {
                                            setShowModalDelete(true);
                                            setActionId(book.id);
                                        }}
                                    >
                                        <TrashFill />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <CreateModal showModal={showModalCreate} setShowModal={setShowModalCreate} booksAfterCreate={booksAfterCreate} />
            <RemoveBook showModal={showModalDelete} setShowModal={setShowModalDelete} booksAfterDelete={booksAfterDelete} deleteId={actionId} />
        </>
    )
}