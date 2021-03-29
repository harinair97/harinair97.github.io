import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
class Projects extends React.Component{
    render()
    {
        return(
            <div>
                <br></br>
                <br></br>
                <Container>
                    <h1>Projects</h1>
                    <br></br>
                    <Row>
                        <Card>
                            <Card.Body>
                        
                       <b>Auto-predictive system for Malayalam questions</b><br></br>
                       An RNN (Recurrent Neural Network) based system that predicts the most relevant 
                       question from a set of Malayalam questions based on semantics implied by the input 
                       words or phrases.<br></br>

                       <a href="https://github.com/abinshoby/Auto-Suggestion-of-Malayalam-Question-using-LSTM">Find this project here</a>
                       </Card.Body>
                       </Card>
                    </Row>
                    <br></br>

                    <Row>
                        <Card><Card.Body>
                        <b>Essence</b><br></br>
                        An AI based search engine that retrieves data from the web based the on semantics of 
                        the entered query rather than pattern matching techniques employed by most search engines.
                        <br></br>
                        <a href="https://github.com/harinair97/Essense">Find this project here</a>
                        </Card.Body></Card>
                    </Row>
                    <br></br>
                    <Row>
                        <Card><Card.Body>
                        <b>Word-net Construction</b><br></br>
                        Construction of  Malayalam language word-net by using web scrapping technique (Selenium).
                        <br></br>
                        <a href="https://github.com/abinshoby/Malayalam-word-net">Find this project here</a>
                        </Card.Body></Card>
                    </Row>
                    <br></br>
                    <Row>
                        <Card><Card.Body>
                        <b>mos-QUIT-o</b><br></br>
                        A machine learning project to determine the most prevalent mosquito species at a given 
                        location. A random forest based classification technique used to identify the predominant 
                        species of mosquito based on air temperature, moisture content and precipitation in a region.
                        <br></br>
                        <a href="https://github.com/harinair97/mos-quit-o">Find this project here</a>
                        </Card.Body></Card>
                    </Row>
                    <br></br>
                    <Row>
                        <Card><Card.Body>
                        <b>Ecosnap</b><br></br>
                        Crowdsourcing application designed to provide for an unified and open database on the 
                        distribution and habitat of various flora and fauna.
                        </Card.Body></Card>
                    </Row>
                    <br></br>
                    <Row>
                        <Card><Card.Body>
                        <b>Parking Lot Monitoring System</b>
                        <br></br>
                        An OpenCV based project to monitor the parking lot spaces on real time basis.
                        <br></br>
                        <a href="https://github.com/harinair97/parking_lot_monitoring">Find this project here</a>
                        </Card.Body></Card>
                    </Row>

                </Container>
               
            </div>
        );
    }
}
export default Projects;