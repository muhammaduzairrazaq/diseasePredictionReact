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
    const textarea = document.getElementsByClassName("text-area")[0];
    if (textarea.value === "") {
      setTextareaHeight(40);
    } else if (e.key === "Backspace") {
      if (textareaHeight > 40) {
        setTextareaHeight((prevHeight) => prevHeight - 5);
      }
    } else if (e.key === "Enter") {
      setTextareaHeight((prevHeight) => prevHeight + 20);
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

  const chatbotResponses = [
    "Great! what’s your name?",
    "Hi, Uzair tell me how can I help you in your medical assessment?",
    "Is there any thing else you are feeling about?",
    "Okay, according to your symptoms you have a fever take proper medicines and rest you will be fine.",
  ];

  const [counter, setCounter] = useState(1);
  const chatbotResponse = () => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const chatbotQuestions = document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer = document.getElementsByClassName("responding-tag")[0];
    const div = document.createElement("div");
    if (counter >= chatbotResponses.length) {
      setCounter(1);
    }
    div.classList.add("bot-message-container");
    const p = document.createElement("p");
    p.textContent = chatbotResponses[counter];
    div.appendChild(p);
    chatContainer.appendChild(div);
    setCounter((preCount) => preCount + 1);
    chatbotQuestions.classList.remove("chatbot-questions-hide");
    respondingContainer.classList.remove("responding-tag-show");
  };

  const handleForward = () => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const textarea = document.getElementsByClassName("text-area")[0];
    const chatbotQuestions = document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer = document.getElementsByClassName("responding-tag")[0];

    if (textarea.value !== "") {
      chatbotQuestions.classList.add("chatbot-questions-hide");
      respondingContainer.classList.add("responding-tag-show");
      const div = document.createElement("div");
      div.classList.add("user-message-container");
      const p = document.createElement("p");
      p.textContent = textarea.value;
      div.appendChild(p);
      chatContainer.appendChild(div);
      textarea.value = "";
      setTextareaHeight(40);
      setTimeout(() => {
        chatbotResponse();
      }, 2000);
    }
  };

  const handleReload = () => {
    window.location.reload();
  }

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
                    <button className="bot-selection-button">
                      Use VoiceBot
                    </button>
                  </OverlayTrigger>
                </Link>
              </div>
              <div className="chat-container">
                <div className="bot-message-container">
                  <p>Great! what’s your name?</p>
                </div>
              </div>
              <div className="chatbot-questions">
                <div className="questions">
                  How to use Adax?
                </div>
                <div className="questions">How can I give voice commands?</div>
                <div className="questions">Give me a detail tour of Adax?</div>
              </div>
              <div className="responding-tag">
                <div className="responding-block"></div>
                <p>Responding...</p>
              </div>
              <div className="input-container">
                <div className="input-box">
                  <textarea
                    autoFocus
                    className="text-area"
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
                <div className="forward-container" onClick={handleForward}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="chatbot-dots"
                    style={{ color: "#215cec" }}
                  />
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
                  <button className="restart-button" onClick={handleReload}>
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
