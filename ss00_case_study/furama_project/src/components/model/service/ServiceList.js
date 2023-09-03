import { useState } from "react";
import { AlarmFill, AspectRatioFill, PencilSquare, PeopleFill, TrashFill } from "react-bootstrap-icons";
import { UpdateServiceModal } from "./Update";

const serviceData = [
    {
        id: 1,
        name: "Villa Rose",
        usageArea: 100,
        rentalCost: 200,
        maxGuest: 15,
        rentalType: "Daily",
        otherConvenient: "TV, Wifi, AC, Breakfast",
        imgURL: "https://plus.unsplash.com/premium_photo-1682285212027-6af0d0f70e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        id: 2,
        name: "Villa Violet",
        usageArea: 150,
        rentalCost: 100,
        maxGuest: 10,
        rentalType: "Hourly",
        otherConvenient: "TV, Wifi, AC",
        imgURL: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
        id: 3,
        name: "Villa Sunflower",
        usageArea: 150,
        rentalCost: 100,
        maxGuest: 5,
        rentalType: "Monthly",
        otherConvenient: "TV, Wifi, AC",
        imgURL: "https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    {
        id: 4,
        name: "House Rose",
        usageArea: 150,
        rentalCost: 100,
        maxGuest: 5,
        rentalType: "Monthly",
        otherConvenient: "TV, Wifi, AC",
        imgURL: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
]

export function ServiceList() {
    const [serviceList, setServiceList] = useState(serviceData);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [actionService, setActionService] = useState({
        name: "",
        usageArea: 0,
        rentalCost: 0,
        maxGuest: 0,
        rentalType: "",
        otherConvenient: "",
        imgURL: ""
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    {serviceList.map((service, key) => (
                        <div className="col-md-4 mb-4" key={key}>
                            <div className="card position-relative" style={{width: "18rem"}} >
                                <img
                                    src={service.imgURL}
                                    class="card-img-top"
                                    alt={service.imgURL}
                                    style={{ height: "200px" }}
                                />
                                <div className="position-absolute top-0 end-0 p-3">
                                    <button
                                        type="button" 
                                        className="btn btn-outline-light" 
                                        style={{marginRight: "10px"}}
                                        onClick={() => {
                                            setShowUpdateModal(true);
                                            setActionService(service);
                                        }}
                                    >
                                        <PencilSquare />
                                    </button>
                                    <button type="button" className="btn btn-outline-light">
                                        <TrashFill />
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p className="card-text">
                                        <i>It's our honor to serve you</i>
                                    </p>
                                    <p className="card-text">
                                        <AspectRatioFill /> &nbsp;
                                        {service.usageArea} &nbsp;&nbsp;&nbsp;&nbsp;
                                        <PeopleFill /> &nbsp;
                                        {service.maxGuest} &nbsp;&nbsp;&nbsp;&nbsp;
                                        <AlarmFill /> &nbsp;
                                        {service.rentalType}
                                    </p>
                                    <button className="btn btn-grad">More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <UpdateServiceModal showModal={showUpdateModal} setShowModal={setShowUpdateModal} editService={actionService} />
        </>
    )
}