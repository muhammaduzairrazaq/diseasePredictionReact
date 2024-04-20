import React, { useContext, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faCaretRight, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../App.css";
import Count from "../../context/Counter";

export const Recored = ({ maincolor = "#215CEC", bot = "chatbot" }) => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState(40);
  const [scroll, setScroll] = useState(0);
  const { speak } = useSpeechSynthesis();
  const [chatBotMessageCount, setchatBotMessage] = useContext(Count)
  const [userResponseCount, setUserResponse] = useContext(Count);

  const speakBot = (sentence) => {
    speak({ text: sentence });
  };

  const fetchData = async (query) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/", {
        query: query,
      });
      // alert(response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [counter, setCounter] = useState(1);
  const chatbotResponse = () => {
    const textarea = document.getElementsByClassName("text-area")[0];
    const scrollableContainer = document.getElementsByClassName(
      "scrollable-container"
    )[0];
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const chatbotQuestions =
      document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer =
      document.getElementsByClassName("responding-tag")[0];

    setScroll((prevScroll) => prevScroll + 1000);
    const p = document.createElement("p");
    // calling fetchData and update p.textContent with the response data
    chatbotQuestions.classList.add("chatbot-questions-hide");
    respondingContainer.classList.add("responding-tag-show");
    fetchData(textarea.value.trim())
      .then((response) => {
        p.textContent = response;
        const div = document.createElement("div");
        div.appendChild(p);
        div.classList.add("bot-message-container");
        chatContainer.appendChild(div);
        chatbotQuestions.classList.remove("chatbot-questions-hide");
        respondingContainer.classList.remove("responding-tag-show");
        if (bot === "voicebot") {
          speakBot(response);
        }
        textarea.value = "";
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors appropriately, e.g., display an error message
      });

    scrollableContainer.scrollTo(scroll, scroll + 1000);
    setScroll((prevScroll) => prevScroll + 1000);
    setCounter((preCount) => preCount + 1);
  };

  const handleForward = () => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const inputContainer =
      document.getElementsByClassName("input-container")[0];
    const textarea = document.getElementsByClassName("text-area")[0];
    const scrollableContainer = document.getElementsByClassName(
      "scrollable-container"
    )[0];

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
      setchatBotMessage(chatBotMessageCount+1);
      setUserResponse(userResponseCount+1);
      const div = document.createElement("div");
      if (bot === "chatbot") div.classList.add("user-message-container");
      else div.classList.add("voicebot-user-message-container");
      const p = document.createElement("p");
      p.textContent = textarea.value;
      div.appendChild(p);
      chatContainer.appendChild(div);
      scrollableContainer.scrollTo(scroll, scroll + 1000);
      setScroll((prevScroll) => prevScroll + 1000);
      chatbotResponse();
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
