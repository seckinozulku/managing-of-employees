import { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import Header from "./Header";
import AddPopUp from "./AddPopUp";


const Home = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header handleShow={handleShow} />

            <EmployeeTable />

            <AddPopUp show={show} handleClose={handleClose} />
        </>
    )
}

export default Home