import {Component} from "react";
import  Button  from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  Col  from "react-bootstrap/Col";
import  InputGroup  from "react-bootstrap/InputGroup";
import './serviceForm.style.css'
import axios from 'axios'
class TransferModal extends Component{
    
    constructor(){
        super();
        this.state={
            providers:[],
        }
    }

    componentDidMount(){
        const {REACT_APP_API}=process.env;
        const {currentUser} =this.props.UserContext
        const {token}=currentUser
        const config = {
            headers: {
              Authorization: `${token}`,
            },
          };
        axios.get(`${REACT_APP_API}providers`,config).then(res => res.data )
        .then(data=>(this.setState(()=>({providers:data}),()=>console.log(this.state))))

    }

    getProviders=()=>{
        const {providers}=this.state

        return (providers.map(p=>{
            const {currentUser} =this.props.UserContext
            const {username}=p;
            if(username !== currentUser.username){
                return(
                    <option key={p._id} value={username}>{username}</option>
                )
            }
        }))
    }

    render(){
        const {modal,onhide,onChangeHandler,onSubmitHandler,validate,id}=this.props
        
        return(
            <Modal  show={modal} onHide={onhide}  aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                    Transfer Proposal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form id={id} className="modalBody" noValidate validated={validate} onSubmit={onSubmitHandler} >
                            
                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select id="" onChange={onChangeHandler} required>
                                       <option >select provider</option>
                                       {this.getProviders()}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Its not the same.
                                    </Form.Control.Feedback>       
                                </Form.Group>
                <Button className="my-3" variant="warning" type="submit">
                    Send
                </Button>
            </Form>
                </Modal.Body>
                
            </Modal>
        )
    }
}

export default TransferModal;