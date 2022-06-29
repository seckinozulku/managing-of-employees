import {Form, FormGroup , Button} from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext, useState } from 'react'

const EditForm = ({selected}) => {

    const {editEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState(selected)

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }
 
    const handleSubmit = (e) =>{
        e.preventDefault()
        editEmployee(newEmployee)
    }

    return (
        <Form onSubmit={handleSubmit}>

            <FormGroup>
                    <Form.Control  type="text" placeholder='Name*' name='name' defaultValue={selected.name} onChange={e =>onInputChange(e)} required/>
            </FormGroup>

            <FormGroup>
                    <Form.Control  type="email" placeholder='Email*' name='email' defaultValue={selected.email} onChange={e =>onInputChange(e)} required/>
            </FormGroup>

            <FormGroup>
                    <Form.Control  as="textarea" placeholder='Address*' name='address' defaultValue={selected.address} onChange={e =>onInputChange(e)} rows={3}/> 
            </FormGroup>

            <FormGroup>
                    <Form.Control  type="text" placeholder='Phone*' name='phone' defaultValue={selected.phone} onChange={e =>onInputChange(e)}/>
            </FormGroup>

            <Button variant="success" type="submit" block="true">
                Edit Employee
            </Button>
        </Form>
    )
}

export default EditForm