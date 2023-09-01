import { Button, Modal } from "react-bootstrap";
import { Field, Form, Formik } from "formik";
import * as bookService from "../service/BookService";

export function CreateModal({ showModal, setShowModal, booksAfterCreate }) {
    const addBook = async (values) => {
        const newBook = await bookService.createNewBook(values);
        setShowModal(false);
        booksAfterCreate(newBook);
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    quantity: ""
                }}
                onSubmit={ (values, { resetForm }) => {
                    addBook(values);
                    resetForm();
                }}
            >
                <Form id="formBook">
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <Field type='text' className='form-control' name='title' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <Field type='text' className='form-control' name='quantity' />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='button' className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</Button>
                            <Button form="formBook" type='submit' className="btn btn-primary">Add Book</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Formik>
        </>
    )
}