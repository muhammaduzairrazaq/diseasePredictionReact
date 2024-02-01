import "../../App.css";
import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Progress from "./ChatBotMeter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";
import bulb from "../../assets/bulb.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Recored } from "./VoiceRecord";

export const VoiceBot = () => {
  const [scroll, setScroll] = useState(0);

  const handleReload = () => {
    window.location.reload();
  };

  const chatbotResponses = [
    "Great! what’s your name?",
    "Hi, Uzair tell me how can I help you in your medical assessment?",
    "Is there any thing else you are feeling about?",
    "Disease predicted successfully you can view your report ",
  ];

  const [counter, setCounter] = useState(1);
  const chatbotResponse = () => {
    const scrollableContainer = document.getElementsByClassName(
      "scrollable-container"
    )[0];
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const chatbotQuestions =
      document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer =
      document.getElementsByClassName("responding-tag")[0];

    const div = document.createElement("div");
    setScroll((prevScroll) => prevScroll + 1000);
    div.classList.add("bot-message-container");
    const p = document.createElement("p");
    p.textContent = chatbotResponses[counter];
    if (counter >= 3) {
      const anchor = document.createElement("a");
      anchor.classList.add("underline");
      anchor.href = "/diseasereport";
      anchor.textContent = "View Report";
      p.appendChild(anchor);
    }

    div.appendChild(p);
    chatContainer.appendChild(div);
    chatContainer.appendChild(div);

    scrollableContainer.scrollTo(scroll, scroll + 1000);
    setScroll((prevScroll) => prevScroll + 1000);
    setCounter((preCount) => preCount + 1);
    chatbotQuestions.classList.remove("chatbot-questions-hide");
    respondingContainer.classList.remove("responding-tag-show");
  };

  const handleClickQuestions = (question) => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const scrollableContainer = document.getElementsByClassName(
      "scrollable-container"
    )[0];
    const chatbotQuestions =
      document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer =
      document.getElementsByClassName("responding-tag")[0];

    chatbotQuestions.classList.add("chatbot-questions-hide");
    respondingContainer.classList.add("responding-tag-show");
    const div = document.createElement("div");
    div.classList.add("voicebot-user-message-container");
    const p = document.createElement("p");
    p.textContent = question;
    div.appendChild(p);
    chatContainer.appendChild(div);
    scrollableContainer.scrollTo(scroll, scroll + 1000);
    setScroll((prevScroll) => prevScroll + 1000);
    setTimeout(() => {
      chatbotResponse();
    }, 2000);
  };

  const handleQuestion = (event) => {
    const textContent = event.target.textContent;
    handleClickQuestions(textContent);
  };

  const handleBotButton = () => {
    document.body.style.background = 'linear-gradient(90deg, rgb(239, 242, 247) 0%, 7.60286%, rgb(237, 240, 249) 15.2057%, 20.7513%, rgb(235, 239, 248) 26.297%, 27.6386%, rgb(235, 239, 248) 28.9803%, 38.2826%, rgb(231, 237, 249) 47.585%, 48.1216%, rgb(230, 236, 250) 48.6583%, 53.1306%, rgb(228, 236, 249) 57.6029%, 61.5385%, rgb(227, 234, 250) 65.4741%, 68.7835%, rgb(222, 234, 250) 72.093%, 75.7603%, rgb(219, 230, 248) 79.4275%, 82.8265%, rgb(216, 229, 248) 86.2254%, 87.8354%, rgb(213, 228, 249) 89.4454%, 91.8605%, rgb(210, 226, 249) 94.2755%, 95.4383%, rgb(209, 225, 248) 96.6011%, 98.3005%, rgb(208, 224, 247) 100%)';
  }


  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="main-chatbot-container">
            <div className="chatbot-container">
              <div className="scrollable-container">
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
                        <Tooltip
                          id="tooltip-top"
                          className="voice-custom-tooltip"
                        >
                          Click to use <strong>ChatBot</strong>.
                        </Tooltip>
                      }
                    >
                      <button className="voicebot-selection-button" onClick={handleBotButton}>
                        Use ChatBot
                      </button>
                    </OverlayTrigger>
                  </Link>
                  <Link to="/voicebot">
                    <button className="voicebot-selection-button voicebot-button">
                      Use VoiceBot
                    </button>
                  </Link>
                </div>
                <div className="chat-container">
                  <div className="bot-message-container">
                    <p>Great! what’s your name?</p>
                  </div>
                </div>
              </div>
              <div className="questions-responding-container">
                <div className="chatbot-questions">
                  <div onClick={handleQuestion} className="questions voicebot">
                    How to use Adax?
                  </div>
                  <div onClick={handleQuestion} className="questions voicebot">
                    How can I give voice commands?
                  </div>
                  <div onClick={handleQuestion} className="questions voicebot">
                    Give me a detail tour of Adax?
                  </div>
                </div>
                <div className="responding-tag voicebot-responding-tag">
                  <div className="responding-block"></div>
                  <p className="voicebot-respondingtag-text">Responding...</p>
                </div>
              </div>
              <Recored maincolor="#8246DD" bot="voicebot" />
              <div className="bottom-container">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top" className="voice-custom-tooltip">
                      Click to <strong>Restart</strong> assessment.
                    </Tooltip>
                  }
                >
                  <button
                    className="restart-button voicebot-restart-button"
                    onClick={handleReload}
                  >
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
