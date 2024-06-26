import React, { useContext, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  faCaretRight,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";
import Count from "../../context/Counter";
import { useNavigate } from "react-router-dom";
export const Recored = ({ maincolor = "#215CEC", bot = "chatbot", medicalreport = "" }) => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState(40);
  const { speak } = useSpeechSynthesis();
  const [flag, setFlag] = useState(false);
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

  const speakBot = (sentence) => {
    speak({ text: sentence });
  };

  const fetchData = async (query) => {
    let userEmail = localStorage.getItem("email");
    let userStatus = localStorage.getItem("status");
    if (!userEmail && !userStatus) {
      userEmail = "false";
      userStatus = "false";
    }

    const session_id = userResponseCount <= 0 ? "1" : "0";
    try {
      if(bot === "clue") {
        const response = await axios.post(
          "https://pipefish-hip-aphid.ngrok-free.app",
          {
            query: query,
            session_id: session_id,
            email: userEmail,
            bot: "clue",
            reporttext: medicalreport,
          }
        );
        return response;
      }
      else if(bot === "areport") {
        const response = await axios.post(
          "https://pipefish-hip-aphid.ngrok-free.app",
          {
            query: query,
            session_id: session_id,
            email: userEmail,
            bot: "areport",
            reporttext: medicalreport,
          }
        );
        return response;
      }
      else {
      const response = await axios.post(
        "https://pipefish-hip-aphid.ngrok-free.app",
        {
          query: query,
          session_id: session_id,
          email: userEmail,
          bot: bot,
          reporttext: medicalreport,
        }
      );
      return response;
    }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const navigate = useNavigate();
  const handleReport = (response) => {
    const reportData = {
      symptoms: response.data.symptoms,
      disease: response.data.disease,
      description: response.data.description,
      precaution: response.data.precaution,
      negativesymptoms: response.data.negativesymptoms,
    };
    navigate("/diseasereport", { state: { reportData } }); // pass data using state
  };

  const chatbotResponse = () => {
    setFlag(true);
    const textarea = document.getElementsByClassName("text-area")[0];
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const chatbotQuestions =
      document.getElementsByClassName("chatbot-questions")[0];
    const respondingContainer =
      document.getElementsByClassName("responding-tag")[0];
    const user_query = textarea.value.trim().toLowerCase();
    textarea.value = "";
    const p = document.createElement("p");
    chatbotQuestions.classList.add("chatbot-questions-hide");
    respondingContainer.classList.add("responding-tag-show");
    // calling fetchData and update p.textContent with the response data
    if(bot === "clue") {
      fetchData(user_query)
      .then((response) => {
        p.textContent = response.data.response;
        const div = document.createElement("div");
        div.appendChild(p);
        div.classList.add("bot-message-container");
        chatContainer.appendChild(div);
        chatbotQuestions.classList.remove("chatbot-questions-hide");
        respondingContainer.classList.remove("responding-tag-show");
        div.scrollIntoView({ behavior: "smooth", block: "end" });

        setFlag(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => {
          p.textContent = "Sorry! I am having some issues please try later";
          const div = document.createElement("div");
          div.appendChild(p);
          div.classList.add("bot-message-container");
          chatContainer.appendChild(div);
          chatbotQuestions.classList.remove("chatbot-questions-hide");
          respondingContainer.classList.remove("responding-tag-show");
          div.scrollIntoView({ behavior: "smooth", block: "end" });
          setFlag(false);
        }, 2000);
      });
    }

    else if(bot === "areport") {
      fetchData(user_query)
      .then((response) => {
        p.textContent = response.data.response;
        const div = document.createElement("div");
        div.appendChild(p);
        div.classList.add("bot-message-container");
        chatContainer.appendChild(div);
        chatbotQuestions.classList.remove("chatbot-questions-hide");
        respondingContainer.classList.remove("responding-tag-show");
        div.scrollIntoView({ behavior: "smooth", block: "end" });

        setFlag(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => {
          p.textContent = "Sorry! I am having some issues please try later";
          const div = document.createElement("div");
          div.appendChild(p);
          div.classList.add("bot-message-container");
          chatContainer.appendChild(div);
          chatbotQuestions.classList.remove("chatbot-questions-hide");
          respondingContainer.classList.remove("responding-tag-show");
          div.scrollIntoView({ behavior: "smooth", block: "end" });
          setFlag(false);
        }, 2000);
      });
    }

    else {
    fetchData(user_query)
      .then((response) => {
        p.textContent = response.data.response;
        const div = document.createElement("div");
        div.appendChild(p);
        div.classList.add("bot-message-container");
        chatContainer.appendChild(div);
        chatbotQuestions.classList.remove("chatbot-questions-hide");
        respondingContainer.classList.remove("responding-tag-show");
        div.scrollIntoView({ behavior: "smooth", block: "end" });

        if (bot === "voicebot") {
          speakBot(response.data.response);
        }

        const hasReport =
          "symptoms" in response.data &&
          "disease" in response.data &&
          "description" in response.data &&
          "precaution" in response.data &&
          "negativesymptoms" in response.data;
        if (hasReport) {
          setTimeout(() => {
            const div = document.createElement("div");
            const anchor = document.createElement("a");
            const p = document.createElement("p");
            p.textContent = "Your report is ready ";
            anchor.textContent = "View Report";
            anchor.onclick = () => {
              handleReport(response);
            };
            anchor.classList.add("report-link");
            p.appendChild(anchor);
            div.appendChild(p);
            div.classList.add("bot-message-container-report");
            chatContainer.appendChild(div);
            if (bot === "voicebot") {
              speakBot(response.data.response);
            }
          }, 2000);
        }
        setFlag(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => {
          p.textContent = "Sorry! I am having some issues please try later";
          if (bot === "voicebot") {
            speakBot("Sorry! I am having some issues please try later");
          }
          const div = document.createElement("div");
          div.appendChild(p);
          div.classList.add("bot-message-container");
          chatContainer.appendChild(div);
          chatbotQuestions.classList.remove("chatbot-questions-hide");
          respondingContainer.classList.remove("responding-tag-show");
          div.scrollIntoView({ behavior: "smooth", block: "end" });
          setFlag(false);
        }, 2000);
      });
    }
  };

  const handleForward = () => {
    const textarea = document.getElementsByClassName("text-area")[0];
    const uploadReportContainer = document.getElementsByClassName("add-tip")[0];

    if(bot === "areport" && medicalreport === "" && textarea.value !== "") {
      uploadReportContainer.classList.remove('tip-animation');
  // Force a reflow by accessing a property that triggers layout
  void uploadReportContainer.offsetWidth;
  uploadReportContainer.classList.add('tip-animation');
      return;
    }
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    const inputContainer =
      document.getElementsByClassName("input-container")[0];

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
      document.getElementsByClassName('add-tip')[0].classList.add('display-none');
      setChatBotMessageCount(chatBotMessageCount + 1);
      setUserResponseCount(userResponseCount + 1);
      setTextMessageCount(textMessageCount + 1);
      const tip = document.getElementsByClassName("add-tip")[0];
      if (bot !== "clue" && bot !== "areport" && userResponseCount % 3 === 0) {
        tip.classList.remove("display-none");
      }
      const div = document.createElement("div");
      if (bot === "chatbot" || bot === "areport") div.classList.add("user-message-container");
      else if (bot === "clue") {
        div.classList.add("user-message-container");
        div.classList.add("clue-color");
      }
      else div.classList.add("voicebot-user-message-container");
      const p = document.createElement("p");
      p.textContent = textarea.value;
      div.appendChild(p);
      chatContainer.appendChild(div);
      div.scrollIntoView({ behavior: "smooth", block: "end" });
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
      setVoiceMessageCount(voiceMessageCount + 1);
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
                className={"chatbot-dots" + (flag ? " disabled" : "")}
                style={{ color: maincolor }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
