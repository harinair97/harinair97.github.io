import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bg_image from './bg_img.JPG';
import dp from './hari_dp.JPG';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class Home extends React.Component{
    render()
    {
        return(
            <div>
                <div className="bgImg">
                    <div className="introText">
                        <h1><b>"Hello World!!!"</b></h1><br></br><br></br>
                        <h1>I'm Hari </h1>
                        <h4>Creator | Developer | Data Science Enthusiast</h4>


                    </div>

                </div>
                <br></br>
                <div>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={5}>
                            <img className="displayPic" src={dp}></img>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={7}>
                                <div className="aboutMe">
                                <h3>About Me</h3>

                                Hi everyone, this is Hari Nair S.<br></br>
                                I am currently working as a System Data Analyst at Caterpillar Inc., 
                                one of the Fortune 100 companies. My role involves providing the required web 
                                development and other IT related solutions to AIS Division, PSLD. My interest 
                                lies in Data Science, Machine learning and Deep learning. Also, I am a percussionist 
                                by practice and quizzer by passion.

                            
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
                
            
                
                
            </div>
        );
    }
}
export default Home;