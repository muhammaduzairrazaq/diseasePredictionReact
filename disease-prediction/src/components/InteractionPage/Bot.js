import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";

export const Bot = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="bot-container">
            <img className="bot-logo" src={logo} alt="logo" />
            <p>Choose your interaction bot</p>
            <button><img className="bot-btn-logo" src={logo} alt="logo" />Chat Bot</button> <br />
            <button><img className="bot-btn-logo" src={logo} alt="logo" />Voice Bot</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
