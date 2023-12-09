import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Report from "../../assets/report.svg";

export const DiseaseProfile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="disease-profile-container">
            <div className="disease-profile-top-heading">
              <h2>Name</h2>
            </div>
            <div className="disease-profiles-list">
              <div className="disease-profile">
                <img src={Report} alt="plus" />
                <p>Disease Name</p>
                <div className="disease-space-name"></div>
                <p>25-11-2023</p>
              </div>
              <div className="disease-profile">
                <img src={Report} alt="plus" />
                <p>Disease Name</p>
                <div className="disease-space-name"></div>
                <p>25-11-2023</p>
              </div>
              <div className="disease-profile">
                <img src={Report} alt="plus" />
                <p>Disease Name</p>
                <div className="disease-space-name"></div>
                <p>25-11-2023</p>
              </div>
              <div className="disease-profile">
                <img src={Report} alt="plus" />
                <p>Disease Name</p>
                <div className="disease-space-name"></div>
                <p>25-11-2023</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};