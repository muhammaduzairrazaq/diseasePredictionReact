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

export const ChatBot = () => {
  const [scroll, setScroll] = useState(0);

  const handleReload = () => {
    window.location.reload();
  };

  const chatbotResponses = {
    "What is Adax?":
      "Adax is an intelligent disease diagnosis system that helps users identify diseases based on their symptoms. It utilizes a Neural Network model to provide accurate diagnoses.",
    "How to use Adax?":
      "To use Adax, simply interact with the chat bot or voice bot interface provided. You can enter your symptoms, and Adax will analyze them to provide a diagnosis. Alternatively, you can speak your symptoms for a hands-free experience.",
    "How Adax dianosis diseases?":
      "Adax diagnoses diseases by analyzing the symptoms provided by the user. It employs a sophisticated Neural Network model trained on medical data to accurately match symptoms with potential diseases, providing users with reliable diagnoses.",
  };

  const [counter, setCounter] = useState(1);

  const chatbotResponse = (question) => {
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
    p.textContent = chatbotResponses[question];

    // if (counter >= 3) {
    //   const anchor = document.createElement("a");
    //   anchor.classList.add("underline");
    //   anchor.href = "/diseasereport";
    //   anchor.textContent = "View Report";
    //   p.appendChild(anchor);
    // }

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
    div.classList.add("user-message-container");
    const p = document.createElement("p");
    p.textContent = question;
    div.appendChild(p);
    chatContainer.appendChild(div);
    scrollableContainer.scrollTo(scroll, scroll + 1000);
    setScroll((prevScroll) => prevScroll + 1000);
    setTimeout(() => {
      chatbotResponse(question);
    }, 2000);
  };

  const handleQuestion = (event) => {
    const textContent = event.target.textContent;
    handleClickQuestions(textContent);
  };

  const handleBotButton = () => {
    document.body.style.background =
      "linear-gradient(90deg, rgb(238, 237, 243) 0%, 0.77381%, rgb(239, 238, 244) 1.54762%, 6.72619%, rgb(239, 236, 243) 11.9048%, 12.381%, rgb(240, 237, 244) 12.8571%, 27.9167%, rgb(242, 236, 244) 42.9762%, 51.9048%, rgb(239, 236, 243) 60.8333%, 61.9643%, rgb(238, 235, 246) 63.0952%, 66.7262%, rgb(235, 234, 249) 70.3571%, 73.2738%, rgb(232, 232, 248) 76.1905%, 77.1429%, rgb(230, 231, 248) 78.0952%, 79.9405%, rgb(228, 229, 249) 81.7857%, 84.1667%, rgb(227, 228, 248) 86.5476%, 87.0238%, rgb(226, 227, 248) 87.5%, 89.3452%, rgb(224, 224, 252) 91.1905%, 95.5952%, rgb(220, 223, 252) 100%)";
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
                    If you’re experiencing serious symptoms, do not use Adax.
                    Instead, please contact emergency services.
                  </p>
                </div>
                <Link to="/">
                  <img className="bot-logo" src={logo} alt="logo" />
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
                    <p>Hi, I am Adax how can I help you?</p>
                  </div>
                </div>
              </div>
              <div className="questions-responding-container">
                <div className="chatbot-questions">
                  <div onClick={handleQuestion} className="questions">
                    What is Adax?
                  </div>
                  <div onClick={handleQuestion} className="questions">
                    How to use Adax?
                  </div>
                  <div onClick={handleQuestion} className="questions">
                    How Adax dianosis diseases?
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
