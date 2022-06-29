import {Button} from "react-bootstrap";

const Header = ({handleShow}) => {

    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i
                        className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                </div>
            </div>
        </div>
    );
};

export default Header;