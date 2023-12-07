import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import home from "../../assets/home.svg";
import Plus from "../../assets/plus.svg";
import Profile from "../../assets/profile.svg";
import Trash from "../../assets/trash.svg";

export const HealthProfile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="health-profile-container">
            <div className="health-profile-top-heading">
              <h2>Health Profiles</h2>
              <img src={Plus} alt="plus" />
            </div>
            <div className="health-profiles">
              <div className="health-profile">
                <img src={Profile} alt="plus" />
                <p>Name</p>
                <img src={Trash} alt="plus" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
