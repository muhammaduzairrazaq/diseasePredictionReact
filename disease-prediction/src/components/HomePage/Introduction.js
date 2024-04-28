import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Introduction = () => {
  const navigate = useNavigate();
  const handleBotButton = () => {
    const userEmail = localStorage.getItem("email");
    const userStatus = localStorage.getItem("status");

    if (userEmail && userStatus) {
      navigate("/chatbot");
      document.body.style.background =
        "linear-gradient(90deg, rgb(239, 242, 247) 0%, 7.60286%, rgb(237, 240, 249) 15.2057%, 20.7513%, rgb(235, 239, 248) 26.297%, 27.6386%, rgb(235, 239, 248) 28.9803%, 38.2826%, rgb(231, 237, 249) 47.585%, 48.1216%, rgb(230, 236, 250) 48.6583%, 53.1306%, rgb(228, 236, 249) 57.6029%, 61.5385%, rgb(227, 234, 250) 65.4741%, 68.7835%, rgb(222, 234, 250) 72.093%, 75.7603%, rgb(219, 230, 248) 79.4275%, 82.8265%, rgb(216, 229, 248) 86.2254%, 87.8354%, rgb(213, 228, 249) 89.4454%, 91.8605%, rgb(210, 226, 249) 94.2755%, 95.4383%, rgb(209, 225, 248) 96.6011%, 98.3005%, rgb(208, 224, 247) 100%)";
    } else {
      navigate("/signin")
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <section className="intro">
            <h1>
              Health.
              <br /> Powered by Adax.
            </h1>
            <button onClick={handleBotButton}>
              <span>Start symptom assessment</span>
            </button>
          </section>
        </Col>
        <Col xs={12} md={6}>
          <div className="message-box">
            <img className="message-logo" src={logo} alt="logo" />
            <p className="message-text">
              Let’s start with the symptom that’s troubling you the most.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
