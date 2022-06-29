import EditForm from "./EditForm";
import {Button,Modal} from "react-bootstrap";

const EditPopUp = ({show, handleClose , selected }) => {
    return (
        <Modal show={show} onHide={handleClose}>
             <Modal.Header className="modal-header" closeButton>
                 <Modal.Title>
                     Edit Employee
                 </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <EditForm selected={selected}/>
             </Modal.Body>
             <Modal.Footer>
                  <Button onClick={handleClose} variant="secondary">Close Modal
                 </Button> 
             </Modal.Footer>
         </Modal>
     );
 };

export default EditPopUp;