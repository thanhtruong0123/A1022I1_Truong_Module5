import { Formik } from "formik";
import { Modal } from "react-bootstrap";

export function createServiceModal() {
    return (
        <Formik>
            <Form id='create-service'>
                <Modal>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                    
                </Modal>
            </Form>
        </Formik>
    )
}