import { Field, Formik, Form } from "formik";
import { Modal } from "react-bootstrap";

export function UpdateCustomerModal({ showModal, setShowModal, editCustomer}) {
    const handleUpdate = (values) => {
        console.log(values);
        setShowModal(false);
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                id: editCustomer.id,
                name: editCustomer.name,
                customerType: editCustomer.customerType,
                dateOfBirth: editCustomer.dateOfBirth,
                gender: editCustomer.gender,
                idCard: editCustomer.idCard,
                phone: editCustomer.phone,
                email: editCustomer.email
            }}
            onSubmit={ (values, { resetForm }) => {
                handleUpdate(values);
                resetForm();
            }}
        >
            <Form id="update-customer">
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Customer</Modal.Title>
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
                        <button form="update-customer" type="submit" className="btn btn-primary">Update</button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Formik>
    )
}