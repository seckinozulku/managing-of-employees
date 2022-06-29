import React from 'react';
import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import EditPopUp from './EditPopUp';
import { useState, useEffect } from 'react';
import { Alert } from "react-bootstrap";
import Pagination from './Pagination';


const EmployeeTable = () => {
    const { sortEmployees, deleteEmployee } = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false)
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2)

    const handleClose = () => setShow(false);
    const handleShow = employee => {
        setShow(true)
        setSelected(employee)
    }

    const indexOfLastEmploye = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmploye - employeesPerPage;
    const currentEmployees = sortEmployees.slice(indexOfFirstEmployee, indexOfLastEmploye);
    const totalPagesNum = Math.ceil(sortEmployees.length / employeesPerPage)

    // const handleShowAlert = () => setShowAlert(true)

    const handleShowAlert = () => {
        setShowAlert(true)
        setInterval(() => {
            setShowAlert(false)
        }, 3000);
    };

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert()
        }
    }, [sortEmployees])

    return (
        <>

            <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                Employee List successfully updated!
            </Alert>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.phone}</td>
                            <td>
                                <button onClick={() => handleShow(employee)} className="btn text-warning btn-act" data-toggle="modal"><i
                                    className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                                <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act"
                                    data-toggle="modal"><i className="material-icons" data-toggle="tooltip"
                                        title="Delete">&#xE872;</i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                setCurrentPage={setCurrentPage}
                pages={totalPagesNum}
                currentEmployees={currentEmployees}
                sortEmployees={sortEmployees} />

            <EditPopUp
                show={show}
                handleClose={handleClose}
                selected={selected} />
        </>
    );
};

export default EmployeeTable;