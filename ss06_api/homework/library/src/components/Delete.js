import { Button, Modal } from "react-bootstrap";
import * as bookService from "../service/BookService";
import { toast } from "react-toastify";

export function RemoveBook({ showModal, setShowModal, booksAfterDelete, deleteId }) {
    const deleteBook = async () => {
        await bookService.removeBook(deleteId);
        setShowModal(false);
        booksAfterDelete(deleteId);
        toast.success("Delete successfully");
    }

    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure to delete these books?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button type="button" className="btn btn-primary" onClick={deleteBook}>Sure</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}