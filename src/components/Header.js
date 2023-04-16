import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
         <Navbar bg="light" variant="light">
              <Container>
                   <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
                         UNI Resto Cafe
                    </Navbar.Brand>
                     <Navbar.Toggle />
                     <Navbar.Collapse className="justify-content-end">
                         <Navbar.Text>
                             My Orders &emsp;<i class="fa-solid fa-cart-shopping"></i>
                         </Navbar.Text>
                     </Navbar.Collapse>
                 </Container>
             </Navbar>

       
      {/* <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'><b>Salads and Soups</b></Nav.Link>
            <Nav.Link as={Link} to='/barnyard'><b>From The Barnyard</b></Nav.Link>
            <Nav.Link  as={Link} to='/henhouse' ><b>From The Hen House</b></Nav.Link>
            <Nav.Link  as={Link} to='/freshsea'><b>Fresh From The Sea</b></Nav.Link>

          </Nav>
        </Container>
      </Navbar> */}


       <nav class="navbar navbar-expand-lg navbar-light" bg="light" variant="light">
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
    </nav>
    
      
    </div>
  )
}

export default Header
