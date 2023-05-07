import { Component , Fragment, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet,useNavigate } from "react-router-dom";
import './nav-bar.style.css';
import { UserContext } from "../../context/auth.context";

class NavBar extends Component{
  
  render(){
        const {navigate,UserContext}=this.props;
        const {currentUser}=UserContext;
        return(
          <Fragment>
            <Navbar bg="light" expand="lg" sticky="top" className="register">
          <Container fluid>
            <Navbar.Brand onClick={()=>navigate('/')}>Homination</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                
              >
                <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={()=>navigate('/proposals')}>Proposals</Nav.Link>
              </Nav>
              <Nav
                className=" my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                
                    {currentUser?(<NavDropdown title={currentUser.username} align={{lg:'end'}} className="me-1" id="dropdown-menu-align-responsive-1">
                      <NavDropdown.Item>Setting</NavDropdown.Item>
                      <NavDropdown.Item>Logout</NavDropdown.Item>
                    </NavDropdown>):(<Fragment>
                    <Nav.Link onClick={()=>navigate('/Login')}>Login</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/register')}>Register</Nav.Link>
                    </Fragment>)}
                  
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="devider mb-4 register"></div>
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
    UserContext={useContext(UserContext)}
  />
  )
}
export default NavbarHook