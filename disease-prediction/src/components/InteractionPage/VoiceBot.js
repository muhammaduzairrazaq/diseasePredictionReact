import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";
import bulb from "../../assets/bulb.svg";
import { Link } from "react-router-dom";
import soundwave from "../../assets/soundwave.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const VoiceBot = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="chatbot-container">
            <div className="chatbot-message-box" id="voicebot-message-box">
              <img className="message-bulb" src={bulb} alt="bulb" />
              <p>
                If you’re experiencing serious symptoms, do not use Adax.
                Instead, please contact emergency services.
              </p>
            </div>
            <img className="bot-logo" src={logo} alt="logo" />
            <div className="bot-selection">
              <Link to="/chatbot">
              <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top" className="voice-custom-tooltip">
                      Click to use <strong>ChatBot</strong>.
                    </Tooltip>
                  }
                >
                <button className="voicebot-selection-button">Use ChatBot</button>
                </OverlayTrigger>
              </Link>
              <Link to="/voicebot">
                <button className="voicebot-selection-button voicebot-button">Use VoiceBot</button>
              </Link>
            </div>
            <div className="bot-message-container">
              <img className="bot-logo" src={logo} alt="logo" />
              <img
                className="bot-soundwave-img"
                src={soundwave}
                alt="soundwave"
              />
            </div>
            <div className="chatbot-questions">
              <div className="voicebot-questions">
                <p>How to use Adax?</p>
              </div>
              <div className="voicebot-questions">How can I give written commands?</div>
              <div className="voicebot-questions">Give me a detail tour of Adax?</div>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Record your response here..."
              ></input>
              <FontAwesomeIcon
                icon={faMicrophone}
                className="chatbot-dots"
                style={{ color: "#8246DD" }}
              />
            </div>
            <div className="forward-container">
              <Link to="/diseasereport">
                <FontAwesomeIcon icon={faAnglesRight} size="2xl" style={{ color: "#8246DD" }} />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
