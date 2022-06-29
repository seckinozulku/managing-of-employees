import AddForm from "./AddForm";
import {Button,Modal} from "react-bootstrap";

const AddPopUp = ({show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
             <Modal.Header className="modal-header" closeButton>
                 <Modal.Title>
                     Add Employee
                 </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <AddForm handleClose={handleClose}/>
             </Modal.Body>
             <Modal.Footer>
                  <Button onClick={handleClose} variant="secondary">Close Modal
                 </Button> 
             </Modal.Footer>
         </Modal>
     );
 };

export default AddPopUp;