import { Button, Modal } from "react-bootstrap";

export function  RemoveServiceModal({ showModal, setShowModal, removeId }) {
    console.log(removeId);
    const handleRemove = () => {
        console.log("removed " + removeId);
        setShowModal(false);
    }
    
    return (
        <Modal show={ showModal } onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Remove Service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure to delete this service?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</Button>
                <Button type="button" className="btn btn-primary" onClick={handleRemove}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}