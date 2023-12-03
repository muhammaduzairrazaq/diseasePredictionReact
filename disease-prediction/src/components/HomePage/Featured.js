import "../../App.css";
import featured1 from "../../assets/f1.png";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Featured = () => {
  const imageStyle = {
    width: "338px",
    height: "207px",
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={7} md={6} lg={4}>
          <section className="section-featured">
            <h2>Featured</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  className="image-featured d-block w-100 rounded-5"
                  src={featured1}
                  style={imageStyle}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image-featured d-block w-100 rounded-5"
                  src={featured1}
                  style={imageStyle}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image-featured d-block w-100 rounded-5"
                  src={featured1}
                  style={imageStyle}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <h3 className="featured-bottom-text">Track your symptoms</h3>
            <p className="featured-bottom-text-p">
              Understand yours symptoms and spot patterns
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
