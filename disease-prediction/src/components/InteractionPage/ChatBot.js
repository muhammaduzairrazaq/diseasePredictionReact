import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";
import bulb from "../../assets/bulb.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const ChatBot = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="chatbot-container">
            <div className="chatbot-message-box">
              <img className="message-bulb" src={bulb} alt="bulb" />
              <p>
                If you’re experiencing serious symptoms, do not use Adax.
                Instead, please contact emergency services.
              </p>
            </div>
            <img className="bot-logo" src={logo} alt="logo" />
            <div className="bot-selection">
              <button className="bot-selection-button">Use ChatBot</button>
              <button className="bot-selection-button">Use VoiceBot</button>
            </div>
            <div className="bot-message-container">
              <img className="bot-logo" src={logo} alt="logo" />
              <p>Great! what’s your name ?</p>
            </div>
            <div className="chatbot-questions">
              <div className="questions">
                <p>How to use Adax?</p>
              </div>
              <div className="questions">How can I give voice commands?</div>
              <div className="questions">Give me a detail tour of Adax?</div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your response here..."
              ></input>
              <FontAwesomeIcon icon={faEllipsis} className="chatbot-dots" style={{color: "#215cec",}} />
            </div>
            <div className="forward-container">
              <Link to="/diseasereport">
                <FontAwesomeIcon icon={faAnglesRight} size="2xl" />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
