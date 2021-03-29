import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
class Education extends React.Component{
    render()
    {
        return(
            <div>
                <br></br>
                <br></br>
                <Container>
                    <h1>Education</h1>
                    <br></br>
                    <Row>
                        <Col xs={12} sm={12} md={3} lg={3}><b>2016-2020</b></Col>
                        <Col xs={12} sm={12} md={9} lg={9}>
                        

                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header><b>Bachelor of Technology (B.Tech)<br></br></b></Card.Header>
                            <Card.Body>
                                <Card.Title><b>College of Engineering, Trivandrum.</b></Card.Title>
                                    <Card.Text>
                                    <ul>
                                        <li>B.Tech in Computer Science and Engineering</li>
                                        <li>Cumulative GPA-8.98</li>
                                    </ul>
                                        
                                    </Card.Text>
                            </Card.Body>
                        </Card>

                        </Col>


                    </Row>
                    <br></br>
                    <Row>  

                        <Col xs={12} sm={12} md={3} lg={3}><b>2015</b></Col>
                        <Col xs={12} sm={12} md={9} lg={9}>

                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header><b>Indian School Certificate (ISC)</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Loyola School, Trivandrum</b></Card.Title>
                                        <Card.Text>
                                        <ul>
                                            <li>Higher Secondary Education</li>
                                            <li>Percentage-92.7</li>
                                        </ul>
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                        



                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                    
                    
                        <Col xs={12} sm={12} md={3} lg={3}><b>2013</b></Col>
                        <Col xs={12} sm={12} md={9} lg={9}>
                        <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Header><b>Indian Certificate of Secondary Education (ICSE)</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Loyola School, Trivandrum</b></Card.Title>
                                        <Card.Text>
                                        <ul>
                                            <li>Secondary Education</li>
                                            <li>Percentage- 93.33</li>
                                        </ul>
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                        
                        
                        </Col>
                    </Row>
                </Container>
               
            </div>
        );
    }
}
export default Education;