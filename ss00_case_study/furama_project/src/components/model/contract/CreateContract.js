import { Field, Form, Formik } from "formik";
import { Modal } from "react-bootstrap";

export function CreateContractModal({ showModal, setShowModal }) {
    const handleCreate = (values) => {
        console.log(values);
        setShowModal(false);
    }
    return (
        <>
            <Formik
                initialValues={{
                    code: "",
                    customer: "",
                    service: "",
                    beginDate: "",
                    endDate: "",
                    deposit: 0,
                    totalMoney: 0
                }}
                onSubmit={(values, { resetForm }) => {
                    handleCreate(values);
                    resetForm();
                }}
            >
                <Form id="create-contract">
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Contract</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label className="form-label">Code</label>
                                <Field type="text" className="form-control" name="code" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Customer</label>
                                <Field type="text" className="form-control" name="customer" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Service</label>
                                <Field type="text" className="form-control" name="service" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Begin Date</label>
                                <Field type="date" className="form-control" name="beginDate" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">End Date</label>
                                <Field type="date" className="form-control" name="endDate" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Deposit</label>
                                <Field type="number" className="form-control" name="deposit" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Total Money</label>
                                <Field type="number" className="form-control" name="totalMoney" />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            <button form="create-contract" type="submit" className="btn btn-primary">Create</button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Formik>
        </>
    )
}