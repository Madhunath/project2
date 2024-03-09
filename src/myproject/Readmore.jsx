import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import IMG1 from './img/cat-1.jpg';
import IMG2 from './img/cat-2.jpg';
import IMG3 from './img/cat-3.jpg';



function Readmore() {
  return (
    <div>
      <Container style={{ marginTop: '120px' }}>
        <div className="read-details">
          <h1>Course overview</h1>
          <p>Learn the fundamentals of the basic courses </p>
        </div>

        <div className="course-over text-center">
          <Row className="justify-content-center">
            <Col className='wow fadeInUp' data-wow-delay="0.1s" style={{ animationDelay: '0.1s', animationName: 'fadeInUp', visibility: 'visible' }}>
              <Card style={{ width: '20rem', borderRadius: '10px', margin: '20px' }} className="Readmore-sec">
                <Card.Img variant="top" src={IMG1} className="ReadImg" alt="df" />
                <Card.Body>
                  <Card.Title className="read-title">Course Format</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }} className="readmore-list">
                    <li> Duration: 3 Months courses</li>
                    <li>Format: Self-paced with weekly assignments and quizzes.</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className='wow fadeInUp' data-wow-delay="0.5s" style={{ animationDelay: '0.5s', animationName: 'fadeInUp', visibility: 'visible' }}>
              <Card style={{ width: '20rem', borderRadius: '10px', marginTop: '22px', margin:'10px' }} className="Readmore-sec">
                <Card.Img variant="top" src={IMG2} className="ReadImg" alt="df" />
                <Card.Body>
                  <Card.Title className="read-title">Assessment & Certification</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }} className="readmore-list">
                    <li> Weekly quizzes and assignments</li>
                    <li>Final project to demonstrate practical skills .</li>
                    <li>Certificate of Completion upon finishing the course</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className='wow fadeInUp' data-wow-delay="0.7s" style={{ animationDelay: '0.7s', animationName: 'fadeInUp', visibility: 'visible' }}>
              <Card style={{ width: '20rem', borderRadius: '10px', margin: '20px' }} className="Readmore-sec">
                <Card.Img variant="top" src={IMG3} className="ReadImg" alt="df" />
                <Card.Body>
                  <Card.Title className="read-title">Community & Support</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }} className="readmore-list">
                    <li> Dedicated discussion forum for Q&A and collaboration</li>
                    <li>Weekly live Q&A sessions with the instructor</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Readmore;
