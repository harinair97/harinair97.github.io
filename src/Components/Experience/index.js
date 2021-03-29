import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import cat from './cat_logo.jpg';
import icfoss from './icfoss_logo.png';
import nissan from './nissan_logo.png';

class Experience extends React.Component{
    render()
    {
        return(
            <div>
                 <br></br>
                <br></br>
                <Container>
                    <h1>Experience</h1>
                    <br></br>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={3}><b>January 2021 - Present</b></Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                        <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Header><b>System Data Support Analyst<br></br></b></Card.Header>
                            <Card.Body>
                                <Card.Title><b>AIS Division, PSLD, Caterpillar Inc.</b></Card.Title>
                                    <Card.Text>
                                    <ul>
                                        <li>Undergone trainings in various tools used in web development</li>
                                    </ul>
                                        
                                    </Card.Text>
                            </Card.Body>
                        </Card>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <img src={cat} alt="cat logo" width="250px" height="180px"></img>
                        </Col>



                        </Row>
                        <br></br>
                    <Row>  
                        

                        <Col xs={12} sm={12} md={12} lg={3}><b>June 2019 - August 2019</b></Col>
                        <Col xs={12} sm={12} md={12} lg={4}>


                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header><b>Summer Intern (Mobile App Development)</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Nissan Digital India LLP</b></Card.Title>
                                        <Card.Text>
                                        <ul>
                                            <li>Worked on the front end for the mobile app 'QGo', 
                                                which is used by the top level executives of Nissan Global to keep track of 
                                                real time KPI values of Nissan plants across the world. </li>
                                            <li><b>Tools: </b>HTML, CSS, Javascript, Angular 7, Tableau</li>
                                        </ul>
                                        </Card.Text>
                                </Card.Body>
                        </Card>



                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                        <img src={nissan} alt="nissan logo" width="250px" height="180px"></img>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={3}><b>July 2018- August 2018</b></Col>
                        <Col xs={12} sm={12} md={12} lg={4}>

                        <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Header><b>Research Intern (Natural Language Processing)</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>ICFOSS : International Center For Free and Open Source Software</b></Card.Title>
                                        <Card.Text>
                                        <ul>
                                            <li>Constructed a word-net for malayalam language database.</li>
                                            <li>Created an automatic question predicting system for 
                                                Malayalam language using LSTM network.</li>
                                            <li><b>Tools: </b>Python, scikit-learn, pandas, tensorflow</li>
                                        </ul>
                                        
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                        
                        
                        
                        </Col>
                        <Col xs={5} sm={12} md={12} lg={5}>
                        <img src={icfoss} alt="icfoss logo" width="250px" height="180px"></img>
                        
                        </Col>



                    </Row>
                </Container>
               
            </div>
        );
    }
}
export default Experience;