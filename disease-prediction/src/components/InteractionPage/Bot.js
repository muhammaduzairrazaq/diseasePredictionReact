import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import chatbot from "../../assets/chatbot.png"
import voicebot from "../../assets/voicebot.png"
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
            <Link to="/chatbot"><button className="custom-btn btn-6"><img className="bot-btn-logo" src={chatbot} alt="logo" />Chat Bot</button></Link> <br />
           <Link to="/voicebot"><button className="custom-btn btn-6"><img className="bot-btn-logo" src={voicebot} alt="logo" />Voice Bot</button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
