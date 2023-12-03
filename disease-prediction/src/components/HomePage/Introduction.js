import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";

export const Introduction = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <section className="intro">
            <h1>Hi, I am Adax. I can help you learn more about your health.</h1>
            <button>Start symptom assessment</button>
          </section>
        </Col>
        <Col xs={12} md={6}>
          <div className="message-box">
            <img className="message-logo" src={logo} alt="logo" />
            <p className="message-text">Let’s start with the symptom that’s troubling you the most.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
