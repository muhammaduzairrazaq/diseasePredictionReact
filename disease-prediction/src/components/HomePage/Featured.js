import "../../App.css";
import Slider1 from "../../assets/slider1.jpeg";
import Slider2 from "../../assets/slidernm.jpeg";
import Slider3 from "../../assets/slidernt.jpeg";
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
                  src={Slider1}
                  style={imageStyle}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="featured-images-tags">
                    Want to know about seasonal allergies
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image-featured d-block w-100 rounded-5"
                  src={Slider2}
                  style={imageStyle}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className="featured-images-tags">Track your symptoms</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image-featured d-block w-100 rounded-5"
                  src={Slider3}
                  style={imageStyle}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className="featured-images-tags">Want to know about rare diseases</h3>
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
