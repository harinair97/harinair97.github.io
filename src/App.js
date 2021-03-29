// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Education from './Components/Education'
import Achievements from './Components/Achievements'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Home from './Components/Home'
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-scroll';


function App() {
  return (
    <div>
      <Router>
    <div className="body">
      <div className="name_title">
      </div>
        
        <Navbar className="navBar" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav>
                      
                      <Nav.Link><Link  to="home" spy={true} smooth={true}>Home</Link></Nav.Link>
                      <Nav.Link><Link  to="edu" spy={true} smooth={true}>Education</Link></Nav.Link>
                      <Nav.Link><Link  to="exp" spy={true} smooth={true}>Experience</Link></Nav.Link>
                      <Nav.Link><Link  to="pro" spy={true} smooth={true}>Projects</Link></Nav.Link>
                      <Nav.Link><Link  to="ach" spy={true} smooth={true}>Achievements</Link></Nav.Link>
                      
                      
                      

                        
                    </Nav>
                </Navbar.Collapse>
        </Navbar>

        <div id="home"><Home/></div>
        <div id="edu"><Education/></div>
        <div id="exp"><Experience/></div>
        <div id="pro"><Projects/></div>
        <div id="ach"><Achievements/></div>


        

        <br></br>
        <footer class="bg-dark text-center text-white">
  
          <div class="container p-4">
    
          <section class="mb-3">
      
            <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100013383132151" role="button">
              <i class="fab fa-facebook-f"></i></a>

     
            <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/HariNairS1" role="button">
              <i class="fab fa-twitter"></i></a>

     
            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/_hari.nair_/" role="button">
              <i class="fab fa-instagram"></i></a>

      
            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/hari-nair-s-21079a168/" role="button">
              <i class="fab fa-linkedin-in"></i></a>

      
            <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/harinair97" role="button">
              <i class="fab fa-github"></i></a>
             
          </section>
          </div>
        </footer>
      
    </div>
    </Router>

    </div>
  );
}

export default App;
