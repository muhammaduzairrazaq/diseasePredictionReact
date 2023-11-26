import "../App.css";
import featured1 from "../assets/f1.png";
import Carousel from "react-bootstrap/Carousel";

export const Featured = () => {

    const imageStyle = {
        width: '338px', // Set your desired width
        height: '207px', // Set your desired height
      };

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 rounded-5" src={featured1} style={imageStyle} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 rounded-5" src={featured1} style={imageStyle} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 rounded-5" src={featured1} style={imageStyle} alt="Second slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
