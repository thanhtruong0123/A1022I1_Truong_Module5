import { Modal } from "react-bootstrap";

export function RemoveCustomerModal({ showModal, setShowModal, removeId}) {
    const handleRemove = () => {
        console.log("remove " + removeId);
        setShowModal(false);
    }

    return (
        <>
            <Modal show={ showModal } onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure to delete this customer?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleRemove}>Remove</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}