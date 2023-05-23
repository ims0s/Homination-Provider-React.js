import { Component, useContext } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import './login.style.css'
import axios from "axios";
import { UserContext } from "../../context/auth.context";
class Login extends Component{
    constructor(){
        super();

        this.state={
            validate:false,
            username:'',
            password:''
        }

    }
    submitHandler=(event) => {
        const form = event.currentTarget;
        const {username,password}=this.state
        const {nav,userContext} =this.props
        const {setCurrentUser,currentUser}=userContext
        const {REACT_APP_API}=process.env
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else{
            event.preventDefault();
            event.stopPropagation();
            axios.post(`${REACT_APP_API}authProvider/login`,{username,password})
            .then(res => res.data )
            .then((data)=> {
                setCurrentUser(data)
                nav('/dashboard/main')

            })
            .catch(res => {
                console.log(res)
                const {data}= res.response;
                this.setState(() => ({data}))
            })
        }

        this.setState(() => ({validate:true}))
    }


    onChangeHandler= (e)=>{
        const {id,value} = e.target
        this.setState(()=>({[id]:value}))
    }
    

    render(){
        const {validate}= this.state
        const {onChangeHandler , submitHandler} =this;
        return(
            <Container className="authContainer" >
               
               <Form className="authForm"  onSubmit={submitHandler}>
                <h1>Homination</h1>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="example@email.com" onChange={onChangeHandler}   required />
                    <Form.Control.Feedback type='invalid' >
                    Enter your Username
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onChangeHandler} required/>
                    <Form.Control.Feedback type="invalid">
                        Enter your Password!!
                    </Form.Control.Feedback>
                {this.state.data && <span className="worng"> {this.state.data}</span>}
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
                <p>New User? <span className="anotherPage" onClick={() => {this.props.nav('/register')}}>Create Account</span></p>
            </Form>
            </Container>
        )
    }
}
const LoginHooks= (props)=>{
    const nav = useNavigate();
    
    return ( 
        <Login 
        {...props}
        nav={nav}
        userContext={useContext(UserContext)}
        />
        )
    }
    export default LoginHooks;