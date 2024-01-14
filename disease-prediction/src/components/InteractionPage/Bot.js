import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Bot = () => {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col xs={12} md={6}>
          <div className="bot-container">
            <img className="bot-logo" src={logo} alt="logo" />
            <p>Choose your interaction bot</p>
            <Link to="/chatbot"><button>Chat Bot</button></Link> <br />
           <Link to="/voicebot"><button>Voice Bot</button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
