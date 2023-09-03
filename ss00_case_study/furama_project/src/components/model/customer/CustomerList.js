import { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";

const customerData = [
    {
        id: 1,
        name: "Peter Parker",
        customerType: "Vip",
        dateOfBirth: "1999-03-03",
        gender: "male",
        idCard: "918273654",
        phone: "098213456",
        email: "peter@gmail.com"
    },
    {
        id: 2,
        name: "Gwen Stacy",
        customerType: "Vip",
        dateOfBirth: "1999-05-03",
        gender: "female",
        idCard: "918233654",
        phone: "098214456",
        email: "gwen@gmail.com"
    },
    {
        id: 3,
        name: "Harry Potter",
        customerType: "Pro",
        dateOfBirth: "2000-03-03",
        gender: "male",
        idCard: "918273654",
        phone: "098213456",
        email: "harry@gmail.com"
    },
    {
        id: 4,
        name: "Harry Osborn",
        customerType: "Diamond",
        dateOfBirth: "2001-03-03",
        gender: "male",
        idCard: "918273654",
        phone: "098213456",
        email: "osborn@gmail.com"
    }
]

export function CustomerList() {
    const [customers, setCustomer] = useState(customerData);
    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <>  
            <div className="header mb-3 mt-3">
                <h2>Customer</h2>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setShowCreateModal(true)}
                >
                    New &nbsp;<PlusCircleFill />
                </button>
            </div>

            <table className="table table-container">
                <thead>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Customer Type</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Gender</th>
                    <th scope="col">ID card</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Email</th>
                </thead>
                <tbody>
                    {customers.map((customer, key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{customer.name}</td>
                            <td>{customer.customerType}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.idCard}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}