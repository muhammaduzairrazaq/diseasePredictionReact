import "../../App.css";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const DiseaseProfile = () => {
  const [profiles, setProfiles] = useState([]);

  const navigate = useNavigate();

  const fetchProfiles = async (email) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/adax/diseaseprofile/",
        {
          email: email,
        }
      );

      return response;
    } catch (error) {
      if (error.message.includes("400")) {
        alert("Account not registered");
      } else {
        alert(error.message);
      }
    }
  };

  // Loading Disease Profiles
  const loadDiseaseProfiles = () => {
    const email = localStorage.getItem("email");
    fetchProfiles(email)
      .then((response) => {
        setProfiles(response.data.report_list);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  loadDiseaseProfiles();

  const handleReportClick = () => {
    alert("ok so you clicked me");
    navigate("/diseasereport");
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="disease-profile-container">
            <Link to="/">
              <span className="back-home">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: "#251cec", fontSize: "1.5em" }}
                  className="back-to-home"
                />
              </span>
            </Link>
            <div className="disease-profiles-list">
              {profiles.length === 0 && (
                <h2 className="empty-report">Nothing to show yet!</h2>
              )}
              {profiles.map((profile, index) => (
                <div className="disease-profile" key={index}>
                  <p>Reported Disease {profile.disease_name}</p>
                  <p className="report-date">{profile.date}</p>
                  <span className="report-delete">
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#215cec" }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
