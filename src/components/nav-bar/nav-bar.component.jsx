import { Component , Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet,useNavigate } from "react-router-dom";


class NavBar extends Component{
  
  render(){
        const {navigate}=this.props
        
        return(
          <Fragment>
            <Navbar bg="light" expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand onClick={()=>navigate('/')}>Homination</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                
              >
                <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                </NavDropdown>
              </Nav>
              <Nav
                className=" my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                
                    <Fragment>
                    <Nav.Link onClick={()=>navigate('/Login')}>Login</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/register')}>Register</Nav.Link>
                    </Fragment>
                  
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet/>
        

          </Fragment>
        )
    }
}

 const NavbarHook= (props)=>{
  
  return (
  <NavBar
    {...props}
    navigate={useNavigate()}
  />
  )
}
export default NavbarHook