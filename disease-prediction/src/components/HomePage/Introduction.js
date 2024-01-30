import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";
import { Link } from "react-router-dom";

export const Introduction = () => {
 
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <section className="intro">
            <h1>Health.<br /> Powered by Adax.</h1>
            <Link to="/chatbot">
            <button><span>Start symptom assessment</span></button>
            </Link>
          </section>
        </Col>
        <Col xs={12} md={6}>
          <div className="message-box">
            <img className="message-logo" src={logo} alt="logo" />
            <p className="message-text">
              Let’s start with the symptom that’s troubling you the most.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
