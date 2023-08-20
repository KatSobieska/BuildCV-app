import { Card, Row, Col, Container } from "react-bootstrap";
import Contact from "../common/Contact";
import cv from "../../images/cv.webp";
import libreman from "../../images/libreman.jpeg";
import resume from "../../images/resume.jpg";

const Info = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="mx-3">
          <Card style={{ width: "350px" }}>
            <Card.Img variant="top" src={cv} />
            <Card.Body>
              <Card.Title>Your CV</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-3">
          <Card style={{ width: "350px" }}>
            <Card.Img variant="top" src={libreman}></Card.Img>
            <Card.Body>
              <Card.Title>Try new way</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-3">
          <Card style={{ width: "350px" }}>
            <Card.Img variant="top" src={resume}></Card.Img>
            <Card.Body>
              <Card.Title>New resume</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Contact />
      </Row>
    </Container>
  );
};

export default Info;
