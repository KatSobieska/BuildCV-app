import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <Row className={`${styles.contact} mt-5 ms-4`}>
      <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Build your CV</h6>
        <p>
          Here you can use rows and columns to organize your footer content.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </Col>
      <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Products</h6>
        <p>
          <a href="#!" className="text-reset">
            CV creation
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            Consultation
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            Workshops
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            1v1 tutors
          </a>
        </p>
      </Col>
      <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
        <p>
          <a href="#!" className="text-reset">
            Pricing
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            Settings
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            Orders
          </a>
        </p>
        <p>
          <a href="#!" className="text-reset">
            Help
          </a>
        </p>
      </Col>
      <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p>
          <FontAwesomeIcon icon={faHome} className="me-3" />
          New York, NY 10012, US
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="me-3" />
          info@example.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="me-3" />+ 01 234 567 88
        </p>
        <p>
          <FontAwesomeIcon icon={faPrint} className="me-3" />+ 01 234 567 89
        </p>
      </Col>
    </Row>
  );
};

export default Contact;
