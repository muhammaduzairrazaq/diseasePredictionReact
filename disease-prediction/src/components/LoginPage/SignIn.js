import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logoo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");
  const userStatus = localStorage.getItem("status");
  const sendData = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/adax/signin/", {
        email: email,
        password: password,
      });

      return response;
    } catch (error) {
      if (error.message.includes("401")) {
        alert("Invalid Password");
      } else if (error.message.includes("404")) {
        alert("User does not exist");
      } else {
        alert(error.message);
      }
    }
  };

  const handleSignOut = () => {
    // Check if user is signed in
    if (userEmail && userStatus) {
      alert('Signout successfully')
      localStorage.removeItem("email");
      localStorage.removeItem("status");
      navigate('/');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkButtonState();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkButtonState();
  };

  const checkButtonState = () => {
    if (
      email.trim() !== "" &&
      password.trim() !== "" &&
      !password.includes(" ")
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(email, password)
      .then((response) => {
        alert(response.data.message);
        // storing emial and status in local storage
        localStorage.setItem("email", email);
        localStorage.setItem("status", "true");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="signin-container">
            <Link to="/">
              <span className="back-home">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: "#251cec", fontSize: "1.5em" }}
                />
              </span>
            </Link>
            <Form className="signin-form" onSubmit={handleSubmit}>
              <img className="signin-logo" src={logo} alt="logo" />
              <h2>Sign In to Adax</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="action-buttons"
                disabled={buttonDisabled}
              >
                Sign In
              </Button>
              <br />
              <Link to="/signup">
                <p className="create-account">Create a account?</p>
              </Link>
              {userEmail && userStatus && (
                <p className="sign-out" onClick={handleSignOut}>
                  Sign out
                </p>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
