import "../../App.css";
import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Progress from "./ChatBotMeter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";
import bulb from "../../assets/bulb.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faMicrophone,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const ChatBot = () => {
  const [textareaHeight, setTextareaHeight] = useState(40);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTextareaHeight((prevHeight) => prevHeight + 15);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 10;
    if (scrollPosition > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="main-chatbot-container">
       
          <div className="chatbot-container">
            <div
              className={`chatbot-message-box${
                scrolled ? " scrolled-background" : ""
              }`}
            >
              <img className="message-bulb" src={bulb} alt="bulb" />
              <p>
                If you’re experiencing serious symptoms, do not use Adax.
                Instead, please contact emergency services.
              </p>
            </div>
            <img className="bot-logo" src={logo} alt="logo" />
            <div className="bot-selection">
              <Link to="/chatbot">
                <button className="bot-selection-button chatbot-button">
                  Use ChatBot
                </button>
              </Link>
              <Link to="/voicebot">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top" className="custom-tooltip">
                      Click to use <strong>VoiceBot</strong>.
                    </Tooltip>
                  }
                >
                  <button className="bot-selection-button">Use VoiceBot</button>
                </OverlayTrigger>
              </Link>
            </div>
            <div className="chat-container">
              <div className="bot-message-container">
                <p>Great! what’s your name?</p>
              </div>
              <div className="user-message-container">
                <p>Hi, my name is uzair.</p>
              </div>
              <div className="bot-message-container">
                <p>
                  Hi, Uzair tell me how can I help you in your medical
                  assessment?
                </p>
              </div>
              <div className="user-message-container">
                <p>I am feeling a little dizzy</p>
              </div>
              <div className="bot-message-container">
                <p>Is there any thing else you are feeling about?</p>
              </div>
              <div className="user-message-container">
                <p>
                  Yeah I am feeling a little cold, pain in back of my head and
                  flue also.
                </p>
              </div>
              <div className="bot-message-container">
                <p>
                  Okay, according to your symptoms you have a fever take proper
                  medicines and rest you will be fine.
                </p>
              </div>
              <div className="user-message-container">
                <p>Thanks for your suggestions.</p>
              </div>
            </div>
            <div className="chatbot-questions">
              <div className="questions">
                <p>How to use Adax?</p>
              </div>
              <div className="questions">How can I give voice commands?</div>
              <div className="questions">Give me a detail tour of Adax?</div>
            </div>
            <div className="input-container">
              <div className="input-box">
                <textarea
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your response here..."
                  style={{ height: `${textareaHeight}px` }}
                ></textarea>
                <FontAwesomeIcon
                  icon={faMicrophone}
                  className="chatbot-dots"
                  style={{ color: "#215cec" }}
                />
              </div>
              <div className="forward-container">
                <Link to="/diseasereport">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="chatbot-dots"
                    style={{ color: "#215cec" }}
                  />
                </Link>
              </div>
            </div>
            <div className="bottom-container">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="tooltip-top" className="custom-tooltip">
                    Click to <strong>Restart</strong> assessment.
                  </Tooltip>
                }
              >
                <button className="restart-button">
                  <FontAwesomeIcon icon={faRotateRight} />
                </button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="progress-tracker">
            <p className="tracker-heading">ChatBot Meter</p>
              <Progress />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
