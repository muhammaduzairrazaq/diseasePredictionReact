import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import home from "../../assets/home.svg";

export const DiseaseReport = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="disease-report-container">
            <div className="top-heading">
              <h2>Disease Name</h2>
              <p>Name, Gender, Age</p>
            </div>
            <div className="symptoms-container">
              <h3>Symptoms</h3>
              <ul>
                <li>Symptom 1</li>
                <li>Symptom 2</li>
                <li>Symptom 3</li>
                <li>Symptom 4</li>
              </ul>
            </div>
            <div className="precautions-container">
              <h3>Precautions</h3>
              <ul>
                <li>Precaution 1</li>
                <li>Precaution 2</li>
                <li>Precaution 3</li>
                <li>Precaution 4</li>
              </ul>
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
