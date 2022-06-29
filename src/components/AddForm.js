import {Form, FormGroup , Button} from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { useContext, useState } from 'react'

const AddForm = ({handleClose}) => {

    const {addEmployee} = useContext(EmployeeContext);

    //Eklemek için 1.Yöntem

    // const [name , setName] = useState("");
    // const [email , setEmail] = useState("");
    // const [address , setAddress] = useState("");
    // const [phone , setPhone] = useState("");

    //Eklemek için 2.Yöntem

    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", address:"", phone:""
    })

    const {name,email,address,phone} = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addEmployee(name,email,address,phone)
        handleClose()
    }

    return (
        <Form onSubmit={handleSubmit}>

            
            {/* 1.Yöntem
             <FormGroup>
                    <Form.Control  type="text" placeholder='Name*' value={name} onChange={e =>setName(e.target.value)} required/>
            </FormGroup>

            <FormGroup>
                    <Form.Control  type="email" placeholder='Email*' value={email} onChange={e =>setEmail(e.target.value)} required/>
            </FormGroup>

            <FormGroup>
                    <Form.Control  as="textarea" placeholder='Address*' value={address} onChange={e =>setAddress(e.target.value)} rows={3}/> 
            </FormGroup>

            <FormGroup>
                    <Form.Control  type="text" placeholder='Phone*' value={phone} onChange={e =>setPhone(e.target.value)}/>
            </FormGroup>

            <Button variant="success" type="submit" block>
                Add New EmployeeTable
            </Button> */}


            <FormGroup>
                    <Form.Control  type="text" placeholder='Name*' name='name' value={name} onChange={e =>onInputChange(e)} required/>
            </FormGroup>

            <FormGroup>
                    <Form.Control  type="email" placeholder='Email*' name='email' value={email} onChange={e =>onInputChange(e)} required/>
            </FormGroup>

            <FormGroup>
                    <Form.Control  as="textarea" placeholder='Address*' name='address' value={address} onChange={e =>onInputChange(e)} rows={3}/> 
            </FormGroup>

            <FormGroup>
                    <Form.Control  type="text" placeholder='Phone*' name='phone' value={phone} onChange={e =>onInputChange(e)}/>
            </FormGroup>

            <Button variant="success" type="submit" block="true">
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm