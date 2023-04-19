
import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header({quantity}) {
  return (
    <div>
         <Navbar bg="light" variant="light" w-100>
              <Container>
                   <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
                         UNI Resto Cafe
                    </Navbar.Brand>
                     <Navbar.Toggle />
                     <Navbar.Collapse className="justify-content-end">
                         <Navbar.Text>
                             My Orders &emsp;<i style={{color:"red",fontSize:"25px"}} class="fa-solid fa-cart-shopping">{quantity}</i>
                         </Navbar.Text>
                     </Navbar.Collapse>
                 </Container>
                 <br />
                 
           </Navbar>

     

       {/* <nav class="navbar navbar-expand-lg navbar-light" bg="light" variant="light">
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarcollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarcollapse">
            <ul class="navbar-nav justify-content-between w-100">
                <li><Link to='/' class="nav-link active">Salads and Soups</Link></li>
                <li><Link  to='/barnyard'  class="nav-link  ">From The Barnyard</Link></li>
                <li><Link to='/henhouse' class="nav-link ">From The Hen House</Link></li>
                <li><Link to='/freshsea' class="nav-link  ">Fresh From The Sea</Link></li>
            </ul>
        </div>
    </nav> */}

       <div className='navbar' >
   
                    <Link className='nav' to='/'>Salads and Soups</Link>
                    <Link className='nav' to='/barnyard'>From The Barnyard</Link>
                    <Link className='nav' to='/henhouse'>From The Hen House</Link>
                    <Link className='nav' to='/freshsea'>Fresh From The Sea</Link>
     </div>


      
    </div>
  )
}

export default Header
