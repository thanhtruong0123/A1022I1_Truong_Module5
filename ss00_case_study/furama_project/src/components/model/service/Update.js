import { Field, Form, Formik } from "formik";
import { Button, Modal } from "react-bootstrap";

export function UpdateServiceModal({ showModal, setShowModal, editService }) {
    const handleUpdate = (values) => {
        setShowModal(false);
        console.log(values);
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                name: editService.name,
                usageArea: editService.usageArea,
                rentalCost: editService.rentalCost,
                maxGuest: editService.maxGuest,
                rentalType: editService.rentalType,
                otherConvenient: editService.otherConvenient,
                imgURL: editService.imgURL
            }}
            onSubmit={ (values, { resetForm }) => {
                handleUpdate(values);
                resetForm();
            }}
        >
            <Form id="update-service">
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label className="form-label">Service Name</label>
                            <Field type="text" className="form-control" name="name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Usage Area</label>
                            <Field type="number" className="form-control" name="usageArea" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rental Cost</label>
                            <Field type="number" className="form-control" name="rentalCost" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Max Guest</label>
                            <Field type="number" className="form-control" name="maxGuest" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rental Type</label>
                            <Field type="number" className="form-control" name="rentalType" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Other Convenient</label>
                            <Field type="number" className="form-control" name="otherConvenient" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <Field type="number" className="form-control" name="imgURL" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>CLose</Button>
                        <Button form="update-service" type="submit" className="btn btn-primary">Update</Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Formik>
    )
}