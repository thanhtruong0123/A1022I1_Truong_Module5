import { Button, Modal } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as bookService from "../service/BookService";
import * as Yup from "yup";
import { toast } from "react-toastify";

export function CreateModal({ showModal, setShowModal, booksAfterCreate }) {
    const addBook = async (values) => {
        const newBook = await bookService.createNewBook(values);
        setShowModal(false);
        booksAfterCreate(newBook);
        toast.success("Create successfully");
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    quantity: 0
                }}
                validationSchema={
                    Yup.object({
                        title: Yup.string()
                            .required("Title is required"),
                        quantity: Yup.number()
                            .required("Quantity is required")
                            .min(1)
                    })
                }
                onSubmit={ (values, { resetForm }) => {
                    addBook(values);
                    resetForm();
                }}
            >
                <Form id="form-create">
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <Field type='text' className='form-control' name='title' />
                                <ErrorMessage className="form-error" name="title" component="span"></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <Field type='number' className='form-control' name='quantity' />
                                <ErrorMessage className="form-error" name="quantity" component="span"></ErrorMessage>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='button' className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</Button>
                            <Button form="form-create" type='submit' className="btn btn-primary">Add Book</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Formik>
        </>
    )
}