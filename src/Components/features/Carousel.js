import { Carousel, Container, Row } from "react-bootstrap";
import carousel1 from "../../images/carousel1.jpeg";
import carousel2 from "../../images/carousel2.jpeg";
import carousel3 from "../../images/carousel3.jpeg";
import styles from "./CarouselHome.module.scss";

function CarouselHome() {
  return (
    <Container className="mt-5 mb-5">
      <Row className="d-flex justify-content-center">
        <Carousel fade style={{ width: "850px", height: "450px" }}>
          <Carousel.Item
            style={{ width: "850px", height: "450px" }}
            className={styles.caption}
          >
            <img src={carousel1} alt="first slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{ width: "850px", height: "450px" }}
            className={styles.caption}
          >
            <img src={carousel2} alt="second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{ width: "850px", height: "450px" }}
            className={styles.caption}
          >
            <img src={carousel3} alt="third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default CarouselHome;
