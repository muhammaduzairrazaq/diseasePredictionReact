import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Divider = () => {
  return (
    <Container>
      <Row>
      <Col xs={12}>
    <div className="section-divider">
      <div>
        <p>Get started with Dr. Clue today</p>
        <button className="action-buttons">Download Dr. Clue</button>
        <button className="action-buttons">Become Partner</button>
      </div>
    </div>
    </Col>
    </Row>
    </Container>
  );
};
