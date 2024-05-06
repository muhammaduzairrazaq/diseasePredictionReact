import "../../App.css";
import { React, useContext } from "react";
import Container from "react-bootstrap/Container";
import Progress from "./ChatBotMeter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/Logo.png";
import bulb from "../../assets/bulb.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Recored } from "./VoiceRecord";
import Count from "../../context/Counter";
import { Button } from "bootstrap";

export const ChatBot = () => {
  const chatbotResponses = {
    "What is Dr. Clue?":
      "Dr. Clue is an intelligent disease diagnosis system that helps users identify diseases based on their symptoms. It utilizes a Neural Network model to provide accurate diagnosis.",
    "How to use Dr. Clue?":
      "To use Dr. Clue, simply interact with the chat bot or voice bot interface provided. You can enter your symptoms, and Dr. Clue will analyze them to provide a diagnosis. Alternatively, you can speak your symptoms for a hands-free experience.",
    "Can Dr. Clue provide treatment recommendations?":
      "While Dr. Clue focuses on disease diagnosis, it does not provide treatment recommendations. It is recommended to consult with a healthcare professional for personalized treatment advice based on your diagnosis.",
  };

  const {
    chatBotMessageCount,
    setChatBotMessageCount,
    userResponseCount,
    setUserResponseCount,
    textMessageCount,
    setTextMessageCount,
    voiceMessageCount,
    setVoiceMessageCount,
  } = useContext(Count);

  // function to reload the chat
  const handleReload = () => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    chatContainer.innerHTML = "";
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "Hi, I am Dr. Clue how can I help you?";
    div.classList.add("bot-message-container");
    div.appendChild(p);
    chatContainer.appendChild(div);

    setChatBotMessageCount(1);
    setUserResponseCount(0);
    setTextMessageCount(0);
    setVoiceMessageCount(0);
  };

  const chatbotResponse = (question) => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const chatbotQuestions =
      document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer =
      document.getElementsByClassName("responding-tag")[0];

    const div = document.createElement("div");
    div.classList.add("bot-message-container");
    const p = document.createElement("p");
    p.textContent = chatbotResponses[question];
    div.appendChild(p);
    chatContainer.appendChild(div);
    chatContainer.appendChild(div);
    chatbotQuestions.classList.remove("chatbot-questions-hide");
    respondingContainer.classList.remove("responding-tag-show");
    div.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const handleClickQuestions = (question) => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const chatbotQuestions =
      document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer =
      document.getElementsByClassName("responding-tag")[0];

    chatbotQuestions.classList.add("chatbot-questions-hide");
    respondingContainer.classList.add("responding-tag-show");
    const div = document.createElement("div");
    div.classList.add("user-message-container");
    const p = document.createElement("p");
    p.textContent = question;
    div.appendChild(p);
    chatContainer.appendChild(div);
    div.scrollIntoView({ behavior: "smooth", block: "end" });
    setTimeout(() => {
      chatbotResponse(question);
    }, 2000);
  };

  const handleQuestion = (event) => {
    setChatBotMessageCount(chatBotMessageCount + 1);
    setUserResponseCount(userResponseCount + 1);
    setTextMessageCount(textMessageCount + 1);
    const textContent = event.target.textContent;
    handleClickQuestions(textContent);
  };

  const handleBotButton = () => {
    setChatBotMessageCount(1);
    setUserResponseCount(0);
    setTextMessageCount(0);
    setVoiceMessageCount(0);
    document.body.style.background =
      "linear-gradient(90deg, rgb(238, 237, 243) 0%, 0.77381%, rgb(239, 238, 244) 1.54762%, 6.72619%, rgb(239, 236, 243) 11.9048%, 12.381%, rgb(240, 237, 244) 12.8571%, 27.9167%, rgb(242, 236, 244) 42.9762%, 51.9048%, rgb(239, 236, 243) 60.8333%, 61.9643%, rgb(238, 235, 246) 63.0952%, 66.7262%, rgb(235, 234, 249) 70.3571%, 73.2738%, rgb(232, 232, 248) 76.1905%, 77.1429%, rgb(230, 231, 248) 78.0952%, 79.9405%, rgb(228, 229, 249) 81.7857%, 84.1667%, rgb(227, 228, 248) 86.5476%, 87.0238%, rgb(226, 227, 248) 87.5%, 89.3452%, rgb(224, 224, 252) 91.1905%, 95.5952%, rgb(220, 223, 252) 100%)";
  };

  const handleLogoClick = () => {
    setChatBotMessageCount(1);
    setUserResponseCount(0);
    setTextMessageCount(0);
    setVoiceMessageCount(0);
    document.body.style.background =
    "linear-gradient(90deg, rgb(239, 242, 247) 0%, 7.60286%, rgb(237, 240, 249) 15.2057%, 20.7513%, rgb(235, 239, 248) 26.297%, 27.6386%, rgb(235, 239, 248) 28.9803%, 38.2826%, rgb(231, 237, 249) 47.585%, 48.1216%, rgb(230, 236, 250) 48.6583%, 53.1306%, rgb(228, 236, 249) 57.6029%, 61.5385%, rgb(227, 234, 250) 65.4741%, 68.7835%, rgb(222, 234, 250) 72.093%, 75.7603%, rgb(219, 230, 248) 79.4275%, 82.8265%, rgb(216, 229, 248) 86.2254%, 87.8354%, rgb(213, 228, 249) 89.4454%, 91.8605%, rgb(210, 226, 249) 94.2755%, 95.4383%, rgb(209, 225, 248) 96.6011%, 98.3005%, rgb(208, 224, 247) 100%)";
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="main-chatbot-container">
            <div className="chatbot-container">
              <div className="scrollable-container">
                <div className="chatbot-message-box">
                  <img className="message-bulb" src={bulb} alt="bulb" />
                  <p>
                    If you’re experiencing serious symptoms, do not use Dr.
                    Clue. Instead, please contact emergency services.
                  </p>
                </div>
                <Link to="/">
                  <img
                    onClick={handleLogoClick}
                    className="bot-logo"
                    src={logo}
                    alt="logo"
                  />
                </Link>
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
                      <button
                        className="bot-selection-button"
                        onClick={handleBotButton}
                      >
                        Use VoiceBot
                      </button>
                    </OverlayTrigger>
                  </Link>
                </div>
                <div className="chat-container">
                  <div className="bot-message-container">
                    <p>Hi, I am Dr. Clue how can I help you?</p>
                  </div>
                </div>
              </div>
              <div className="questions-responding-container">
                <div className="chatbot-questions">
                  <div onClick={handleQuestion} className="questions">
                    What is Dr. Clue?
                  </div>
                  <div onClick={handleQuestion} className="questions">
                    How to use Dr. Clue?
                  </div>
                  <div onClick={handleQuestion} className="questions">
                    Can Dr. Clue provide treatment recommendations?
                  </div>
                </div>
                <div className="responding-tag">
                  <div className="responding-block"></div>
                  <p>Responding...</p>
                </div>
              </div>
              <Recored />
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
