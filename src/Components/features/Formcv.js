import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Formcv = () => {
  return (
    <Container className="w-75 p-4">
      <Form className="mx-5">
        <Row className="mb-3">
          <Col>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="Enter first name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className=" " controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter last name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridBIO">
          <Form.Label>BIO</Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            style={{ height: "125px" }}
            placeholder="Tell more about you..."
          />
        </Form.Group>

        <Form.Group controlId="formGridTemplates">
          <Form.Label>Choose CV template</Form.Label>
          <Row className="mb-3 mt-3">
            <Button className="mx-3 " as={Col} variant="outline-secondary">
              Template 1
            </Button>
            <Button className="mx-3 " as={Col} variant="outline-secondary">
              Template 2
            </Button>
            <Button className="mx-3" as={Col} variant="outline-secondary">
              Template 3
            </Button>
          </Row>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload your photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Formcv;
