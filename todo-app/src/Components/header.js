import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';



const Header = (props) => {
    const loggedIn = localStorage.getItem("user")? true: false;
    return(
        
        <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top" style={{backgroundColor:"#063577",color:"white"}} >
            <Navbar.Brand href="/"><img src="Images/logo.png" alt="" style={{height:"40px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Nav>
                    
                    {loggedIn? <Nav.Link href="/dash">To DOs</Nav.Link>: <Nav.Link href="/">Home</Nav.Link> }
                    {loggedIn? undefined: <Nav.Link href="/signup">SignUp</Nav.Link> }
                    {loggedIn? undefined: <Nav.Link href="/login">Login</Nav.Link>}
                    {loggedIn? <button style={{backgroundColor: "#FFF"}}className="dropdown-item " onClick={e => {localStorage.removeItem("user"); localStorage.removeItem("_ltk"); props.history.push("/login"); } }>Logout </button>: undefined}                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default withRouter(Header)