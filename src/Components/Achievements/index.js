import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';


class Achievements extends React.Component{
    render()
    {
        return(
            <div>
                <br></br>
                <br></br>
                
                <Container>
                <h1>Achievements</h1>
                <br></br>
                    <Row>
                        <Card><Card.Body>
                        <b>Winner, NASA Space App Challenge 2018</b><br></br>
                        Regional winner(Kerala) and 'local people's choice award' for building a machine 
                        learning based application to detect the distribution of various species of mosquitoes 
                        in a region.

                        </Card.Body></Card>
                    </Row>
                    <br></br>

                    <Row>
                        <Card><Card.Body>
                        <b>Presented poster at ACM Compute 2018</b><br></br>
                        A poster titled 'Auto-prediction of Malayalam question using LSTM' was presented at the 
                        conference ACM Compute 2018 conducted by ACM held at Chitkara University, Punjab.

                        </Card.Body></Card>
                    </Row>

                    <br></br>

                    <Row>
                        <Card><Card.Body>
                        <b>Winner, NASA Space App Challenge 2017</b><br></br>
                        Regional winner(Kerala) and Global nominee for creating a crowd sourcing based mobile 
                        application for identifying the distribution of exotic species present in a specified region.

                        </Card.Body></Card>
                    </Row>
                    <br></br>
                    <Row>
                        <Card><Card.Body>
                        <b>Undergraduate Summer School, IISc</b><br></br>
                        Selected as one among 90 students from all over India to attend the 7th Undergraduate Summer 
                        School at IISc, Bangalore from July 15-20, 2019.

                        </Card.Body></Card>
                    </Row>
                    <br></br>

                    <Row>
                        <Card><Card.Body>
                        <b>Regional Finalist at TCS IT Wiz 2012 and 2013</b><br></br>
                        Regional Finalist (Second runner-up) at the Nationwide inter-school
                        quiz competition, TCS IT Wiz 2012 and 2013 held in Kochi.

                        </Card.Body></Card>
                    </Row>
                    
                </Container>
            </div>
        );
    }
}


export default Achievements;
