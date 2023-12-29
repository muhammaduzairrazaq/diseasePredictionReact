import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import home from "../../assets/home.svg";
import Progress from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { Link } from "react-router-dom";

export const DiseaseReport = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="main-disease-report-container">
          <Link to="/">
          <span className="back-home">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#251cec", fontSize: "1.5em" }} className="back-to-home-report" />
          </span>
          </Link>
          <div className="disease-report-container">
            <div className="disease-report-container-background">
              <div className="top-heading">
                <h2>Disease Name</h2>
                <p>Name | Age | Gender</p>
              </div>
              <div className="info-container">
                <Row>
                  <Col xs={12} md={6}>
              <div className="symptoms-container">
                <h3>Symptoms</h3>
                <ul>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                </ul>
              </div>
              <div className="precautions-container">
                <h3>Precautions</h3>
                <ul>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                </ul>
              </div>
              </Col>
              <Col xs={12} md={6} className="progress-bar-col">
              <div className="progressbar-large">
                <Progress />
              </div>
              </Col>
              </Row>

              </div>
            </div>
            <div className="diseasereport-message-box">
              <img className="message-bulb" src={home} alt="home" />
              <p>Cure is possible at home.</p>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
