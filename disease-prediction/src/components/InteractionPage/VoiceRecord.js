import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { faCaretRight, faMicrophone, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../App.css";

export const Recored = ({ maincolor = "#215CEC", bot = "chatbot" }) => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState(40);
  const [scroll, setScroll] = useState(0);

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

  const handleForward = () => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const inputContainer =
      document.getElementsByClassName("input-container")[0];
    const textarea = document.getElementsByClassName("text-area")[0];
    const scrollableContainer = document.getElementsByClassName(
      "scrollable-container"
    )[0];
    const chatbotQuestions =
      document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer =
      document.getElementsByClassName("responding-tag")[0];

    setTextareaHeight(40);

    if (isListening === true) {
      SpeechRecognition.stopListening();
      if (bot === "chatbot")
        inputContainer.classList.remove("input-container-border");
      else inputContainer.classList.remove("voicebot-input-container-border");
      textarea.placeholder = "Enter your response here...";
      setIsListening(false);
    }

    if (textarea.value !== "") {
      chatbotQuestions.classList.add("chatbot-questions-hide");
      respondingContainer.classList.add("responding-tag-show");
      const div = document.createElement("div");
      if (bot === "chatbot") div.classList.add("user-message-container");
      else div.classList.add("voicebot-user-message-container");
      const p = document.createElement("p");
      p.textContent = textarea.value;
      div.appendChild(p);
      chatContainer.appendChild(div);
      scrollableContainer.scrollTo(scroll, scroll + 1000);
      setScroll((prevScroll) => prevScroll + 1000);
      textarea.value = "";
      setTimeout(() => {
        chatbotResponse();
      }, 2000);
    }
  };

  const handleMicrophone = () => {
    if (!browserSupportsSpeechRecognition) {
      return null;
    }
    const inputContainer =
      document.getElementsByClassName("input-container")[0];
    const textarea = document.getElementsByClassName("text-area")[0];
    if (isListening === false) {
      if (textarea.value !== "") {
        textarea.value = "";
      }
      SpeechRecognition.startListening({ continuous: true, language: "en-US" });
      if (bot === "chatbot")
        inputContainer.classList.add("input-container-border");
      else inputContainer.classList.add("voicebot-input-container-border");
      textarea.placeholder = "Please speak...";
      setIsListening(true);
    }

    if (isListening === true) {
      SpeechRecognition.stopListening();
      if (bot === "chatbot")
        inputContainer.classList.remove("input-container-border");
      else inputContainer.classList.remove("voicebot-input-container-border");
      textarea.placeholder = "Enter your response here...";
      setIsListening(false);
    }
  };

  const handleInput = (event) => {
    const { value, scrollHeight, clientHeight } = event.target;
    if (value === "") {
      setTextareaHeight(40);
    }
    const newHeight = Math.max(scrollHeight, clientHeight);
    setTextareaHeight(newHeight);
  };

  const handleBack = (event) => {
    if (event.key === "Backspace") {
      const { value } = event.target;
      if (value === "") {
        setTextareaHeight(40);
      }
    }
  };

  const handleClick = () => {
    const inputContainer =
      document.getElementsByClassName("input-container")[0];
    const textarea = document.getElementsByClassName("text-area")[0];
    if (isListening === true) {
      SpeechRecognition.stopListening();
      if (bot === "chatbot")
        inputContainer.classList.remove("input-container-border");
      else inputContainer.classList.remove("voicebot-input-container-border");
      textarea.placeholder = "Enter your response here...";
      setIsListening(false);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="input-container">
            <div className="input-box">
              <textarea
                defaultValue={transcript}
                autoFocus
                className="text-area"
                placeholder="Enter your response here..."
                onInput={handleInput}
                onClick={handleClick}
                onKeyDown={handleBack}
                style={{ height: `${textareaHeight}px` }}
              ></textarea>
              <FontAwesomeIcon
                onClick={handleMicrophone}
                icon={faMicrophone}
                className="chatbot-dots"
                style={{ color: maincolor }}
              />
            </div>
            <div className="forward-container" onClick={handleForward}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="chatbot-dots"
                style={{ color: maincolor }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
