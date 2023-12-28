import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";

import "../../App.css";

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={1} md={8}>
            <div className="image-container">
          <img className="footer-logo" src={logo} alt="logo" />
          </div>
        </Col>
        <Col xs={11} md={4}>
          <section className="section-footer">
            <div>
              <h3>Find us on</h3>
              <a href="#likedin">
                <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#215CEC" />
              </a>
              <a href="#x">
                <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" color="#215CEC" />
              </a>
              <a href="#github">
                <FontAwesomeIcon icon={faSquareGithub} size="2xl" color="#215CEC" />
              </a>
            </div>
            <p>&copy; 2023 Your Adax. All rights reserved.</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
