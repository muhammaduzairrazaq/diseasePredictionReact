import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import home from "../../assets/home.svg";
import Progress from "./ProgressBar";


export const DiseaseReport = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="disease-report-container">
            <div className="disease-report-container-background">
              <div className="top-heading">
                <h2>Disease Name</h2>
                <p>Name | Age | Gender</p>
                <Row>
                  <Col xs={4} md={2}>
                    <Progress/>
                  </Col>
                </Row>
              </div>
              <div className="symptoms-container">
                <h3>Symptoms</h3>
                <ul>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                  <li>Sunt aute nostrud est nulla sunt.</li>
                </ul>
              </div>
              <div className="progressbar-large">
            <Row>
                <Col xs={5} md={5}>
                  <div className="progressbar-large">
                  <Progress />
                  </div>
                  </Col>
              </Row>
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
            </div>
            <div className="diseasereport-message-box">
              <img className="message-bulb" src={home} alt="home" />
              <p>Cure is possible at home.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
