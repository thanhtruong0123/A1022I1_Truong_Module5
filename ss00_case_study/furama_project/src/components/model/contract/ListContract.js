import { useState } from "react"
import { PlusCircleFill } from "react-bootstrap-icons";
import { CreateContractModal } from "./CreateContract";

const contractData = [
    {
        id: 1,
        code: "CT-01",
        customer: "Peter Parker",
        service: "Villa Rose",
        beginDate: "2023-01-01",
        endDate: "2023-02-02",
        deposit: 300,
        totalMoney: 500
    },
    {
        id: 2,
        code: "CT-02",
        customer: "Gwen Stacy",
        service: "Villa Violet",
        beginDate: "2023-01-01",
        endDate: "2023-02-02",
        deposit: 300,
        totalMoney: 500
    },
    {
        id: 3,
        code: "CT-03",
        customer: "Harry Osborn",
        service: "Villa Sunflower",
        beginDate: "2023-01-01",
        endDate: "2023-02-02",
        deposit: 300,
        totalMoney: 500
    },
    {
        id: 4,
        code: "CT-04",
        customer: "Thor Odinson",
        service: "House Rose",
        beginDate: "2023-01-01",
        endDate: "2023-02-02",
        deposit: 300,
        totalMoney: 500
    }
]

export function ContractList() {
    const [contracts, setContracts] = useState(contractData);
    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <>
            <div className="header mb-3 mt-3">
                <h2>Contract</h2>
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
                    <th scope="col">Code</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Service</th>
                    <th scope="col">Begin Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Deposit</th>
                    <th scope="col">Total Money</th>
                </thead>
                <tbody>
                    {contracts.map((contract, key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{contract.code}</td>
                            <td>{contract.customer}</td>
                            <td>{contract.service}</td>
                            <td>{contract.beginDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.totalMoney}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <CreateContractModal showModal={showCreateModal} setShowModal={setShowCreateModal} />
        </>
    )
}