import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CenterText = () => {
  return (
    <Container>
      <Row>
        <Col md={6}></Col>
        <Col xs={12} md={6}>
          <section className="section-center-text">
            <h2>Take good care of yourself</h2>
            <p>
              Your body is sending you important signals about your health.
              Understand, manage, and get care for symptoms with trusted medical
              expertise in minutes.
            </p>
            <button>Download Adax</button>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
