// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Education from './Components/Education'
import Achievements from './Components/Achievements'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Home from './Components/Home'
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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
                      
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/education">Education</Nav.Link>
                      <Nav.Link href="/experience">Experience</Nav.Link>
                      <Nav.Link href="/projects">Projects</Nav.Link>
                      <Nav.Link href="/achievements">Achievements</Nav.Link>

                        
                    </Nav>
                </Navbar.Collapse>
        </Navbar>


        <Switch>
        <Route path = "/" component = {Home} exact/>
            <Route path="/education" component = {Education} exact/>
            <Route path="/experience" component = {Experience} exact/>
            <Route path="/projects" component = {Projects} exact/>
            <Route path="/achievements" component = {Achievements} exact/>
        </Switch>

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
