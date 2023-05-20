import {Component} from "react";
import  Button  from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  Col  from "react-bootstrap/Col";
import  InputGroup  from "react-bootstrap/InputGroup";
import './serviceForm.style.css'
class ServiceForm extends Component{
    
    render(){
        const {modal,onhide,onChangeHandler,onSubmitHandler,validate}=this.props
        
        return(
            <Modal show={modal} onHide={onhide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                    New Service
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form className="modalBody" noValidate validated={validate} onSubmit={onSubmitHandler} >
                        <Row>
                            <Col lg={3}>
                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select id="categories" onChange={onChangeHandler} required>
                                        <option>Category</option>
                                        <option value="Foundation Builder">Foundation Builder</option>
                                        <option value="Interior Designers and Decorators">Interior Designers and Decorators</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Its not the same.
                                    </Form.Control.Feedback>       
                                </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group>
                                <Form.Label>Service Title</Form.Label>
                                <Form.Control type="text" id="title" onChange={onChangeHandler} required/>
                            </Form.Group>
                            </Col>
                            <Col lg={3}>
                            <Form.Group>
                                <Form.Label>Price For m²</Form.Label>
                                <InputGroup >
                                    <Form.Control id="price" type="number" onChange={onChangeHandler} required />
                                    <InputGroup.Text>E£</InputGroup.Text>
                                </InputGroup>
                                <Form.Control.Feedback type="invalid">
                                        Its not the same.
                                    </Form.Control.Feedback>
                            </Form.Group>

                            </Col>
                            <Col>
                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" id="location" onChange={onChangeHandler} required/>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='fluid'>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" id="desc" as='textarea' onChange={onChangeHandler} rows={3} required />
                                </Form.Group>
                            </Col>
                        </Row>
                <Button variant="warning" type="submit">
                    Send
                </Button>
            </Form>
                </Modal.Body>
                
            </Modal>
        )
    }
}

export default ServiceForm;