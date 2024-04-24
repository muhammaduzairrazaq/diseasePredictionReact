import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const DiseaseReport = () => {
  const location = useLocation();
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          {location.state && location.state.reportData && (
            <div className="main-disease-report-container">
              <Link to="/diseaseprofiles">
                <span className="back-home">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#251cec", fontSize: "1.5em" }}
                    className="back-to-home-report"
                  />
                </span>
              </Link>
              <div className="disease-report-container">
                <div className="disease-report-container-background">
                  <div className="top-heading">
                    <h2>Disease Report</h2>
                  </div>
                  <div className="info-container">
                    <Row>
                      <Col xs={12} md={11}>
                        <div className="symptoms-container">
                          <h3>Pertinent positives</h3>
                          <ul className="disease-report-list">
                            {location.state.reportData.symptoms.map(
                              (symptom, index) => (
                                <li key={index}>{symptom}</li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="symptoms-container">
                          <h3>Pertinent negatives</h3>
                          <ul className="disease-report-list">
                            {location.state.reportData.negativesymptoms.length >
                            0 ? (
                              location.state.reportData.negativesymptoms.map(
                                (symptom, index) => (
                                  <li key={index}>{symptom}</li>
                                )
                              )
                            ) : (
                              <li key="no-negatives">None Reported</li>
                            )}
                          </ul>
                        </div>
                        <div className="precautions-container">
                          <h3>Disease diagnosis</h3>
                          <ul className="disease-report-list">
                            <li>
                              You are diagnosed with{" "}
                              {location.state.reportData.disease}
                            </li>
                            <li>{location.state.reportData.description}</li>
                          </ul>
                        </div>
                        <div className="precautions-container">
                          <h3>Precautions</h3>
                          <ul className="disease-report-list">
                            {location.state.reportData.precaution.map(
                              (symptom, index) => (
                                <li key={index}>{symptom}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
