import { Formik, Form, Field } from "formik";
import { Modal } from "react-bootstrap";

export function CreateCustomerModal({showModal, setShowModal}) {
    const handleCreate = (values) => {
        console.log(values);
        setShowModal(false);
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    customerType: "",
                    dateOfBirth: "",
                    gender: "",
                    idCard: "",
                    phone: "",
                    email: ""
                }}
                onSubmit={ (values, { resetForm }) => {
                    handleCreate(values);
                    resetForm();
                }}
            >
                <Form id="create-customer">
                    <Modal show={ showModal } onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Customer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <Field type="text" className="form-control" name="name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Customer Type</label>
                                <Field type="text" className="form-control" name="customerType" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <Field type="date" className="form-control" name="dateOfBirth" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <Field type="text" className="form-control" name="gender" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ID card</label>
                                <Field type="text" className="form-control" name="idCard" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <Field type="text" className="form-control" name="phone" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Field type="text" className="form-control" name="email" />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            <button form="create-customer" type="submit" className="btn btn-primary">Create</button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Formik>
        </>
    )
}