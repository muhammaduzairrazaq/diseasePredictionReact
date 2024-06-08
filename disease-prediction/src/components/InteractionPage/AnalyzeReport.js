import "../../App.css";
import { React, useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Progress from "./ChatBotMeter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/Logo.png";
import bulb from "../../assets/bulb.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Recored } from "./VoiceRecord";
import Count from "../../context/Counter";
import PdfReader from "./PDFLoader";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min.mjs";

export const AnalyzeReport = () => {
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

  // fetching and reading text from pdf
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfText, setPdfText] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const reportText = document.getElementsByClassName(
      "upload-report-warning"
    )[0];
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setError(null); // Clear previous errors
      reportText.classList.remove("red-color");
      reportText.classList.add("green-color");
      // handleReadPdf();
    } else {
      setSelectedFile(null);
      setPdfText(""); // Clear previous text
      setError("Please upload a valid PDF file.");
      reportText.classList.remove("green-color");
      reportText.classList.add("red-color");
    }
  };

  const handleReadPdf = async () => {
    if (!selectedFile) {
      return; // No file selected
    }

    setIsLoading(true);
    try {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const typedarray = new Uint8Array(fileReader.result);
        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          textContent.items.forEach((item) => {
            text += item.str + " ";
          });
        }
        setPdfText(text.trim()); // Remove trailing whitespace
      };
      fileReader.readAsArrayBuffer(selectedFile);
      // alert(pdfText);
    } catch (error) {
      console.error("Error processing PDF:", error);
      setError("An error occurred while reading the PDF.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch the data when the component mounts or when selectedFile changes
    const loadData = async () => {
      if (selectedFile) {
        await handleReadPdf();
      }
    };

    loadData();
  }, [selectedFile, handleReadPdf]);

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
                <div className="chat-container">
                  <div className="add-tip">
                    <p className="upload-report-warning">
                      Please upload your medical report to start report
                      analysis.
                    </p>
                    <label for="upload-pdf" class="upload-report-btn">
                      Upload Report
                    </label>
                    <input
                      id="upload-pdf"
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                    />
                    {error && <p className="error">{error}</p>}
                    {isLoading && <p>Loading...</p>}

                    {!pdfText && selectedFile && (
                      <p className="error">Failed to fetch report data</p>
                    )}

                    {pdfText && selectedFile && (
                      <p className="success">
                        Successfully fetched report data
                      </p>
                    )}
                  </div>
                  <div className="bot-message-container">
                    <p>Hi, I am Dr. Clue let's analyze your medical report</p>
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
              <Recored
                maincolor="#215CEC"
                bot="areport"
                medicalreport={pdfText}
              />
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
