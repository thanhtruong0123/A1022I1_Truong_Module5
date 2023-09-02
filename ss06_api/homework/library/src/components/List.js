import {useEffect, useState} from "react";
import * as bookService from "../service/BookService";
import '../App.css';
import { PencilSquare, TrashFill, PlusCircleFill } from 'react-bootstrap-icons'
import { CreateModal } from "./CreateModal";
import { RemoveBook } from "./Delete";
import { UpdateModal } from "./Update";

export function Book() {
    const [books, setBooks] = useState([]);
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [actionBook, setActionBook] = useState({
        id: 0,
        title: "",
        quantity: 0,
    });

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        const result = await bookService.getAll();
        setBooks(result);
    };

    const booksAfterCreate = (newBook) => {
        setBooks([...books, newBook]);
    };
    
    const booksAfterDelete = (deleteId) => {
        const booksAfterDelete = books.filter(book => book.id !== deleteId);
        setBooks(booksAfterDelete);
    };

    const booksAfterUpdate = (editBook) => {
        const booksAfterUpdate = books.map((book) => {
            if (book.id === editBook.id) {
                return editBook;
            }
            return book;
        });
        setBooks(booksAfterUpdate);
    };

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
                                    <button 
                                        type='button' 
                                        className="btn btn-primary" 
                                        style={{ marginRight: "10px" }}
                                        onClick={() => {
                                            setShowModalUpdate(true);
                                            setActionBook(book);
                                            // console.log(book);
                                        }}
                                    >
                                        <PencilSquare />
                                    </button>
                                    <button
                                        type='button'
                                        className="btn btn-danger"
                                        onClick={() => {
                                            setShowModalDelete(true);
                                            setActionBook(book);
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
            <RemoveBook showModal={showModalDelete} setShowModal={setShowModalDelete} booksAfterDelete={booksAfterDelete} deleteId={actionBook.id} />
            <UpdateModal showModal={showModalUpdate} setShowModal={setShowModalUpdate} booksAfterUpdate={booksAfterUpdate} editBook={actionBook} />
        </>
    )
}