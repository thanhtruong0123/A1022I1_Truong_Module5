import { Field, Form, Formik } from "formik";
import { Button, Modal } from "react-bootstrap";
import * as bookService from "../service/BookService";

export function UpdateModal({ showModal, setShowModal, booksAfterUpdate, editBook }) {
    const updateBook = async (values) => {
        const bookAfterEdit = await bookService.updateBook(editBook.id, values);
        setShowModal(false);
        booksAfterUpdate(bookAfterEdit);
    }

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    title: editBook.title,
                    quantity: editBook.quantity
                }}
                onSubmit={ (values, { resetForm }) => {
                    updateBook(values);
                    resetForm();
                }}
            >
                <Form id="form-update">
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <Field type='text' className='form-control' name='title' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <Field type='number' className='form-control' name='quantity' />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='button' className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</Button>
                            <Button form='form-update' type='submit' className="btn btn-primary">Update</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Formik>
        </>
    )
}