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

export const SignUp = () => {
  let flag = 1;
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const sendData = async (email, password) => {
    try {
      const response = await axios.post(
        "https://pipefish-hip-aphid.ngrok-free.app/adax/signup/",
        {
          email: email,
          password: password,
        }
      );
      setMessage("Signed up successfully!");
      flag = 0;
      return response;
    } catch (error) {
      if (error.message.includes("400")) {
        setMessage("Account already exists!");
      } else {
        setMessage("Network error please try later!");
      }
    }
  };
  const navigate = useNavigate();
  const isButtonDisabled = !email || !password || !confirmPassword;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    sendData(email, password)
      .then((response) => {
        console.log(response.data.message);
        navigate("/signin");
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
              <h2>Sign up to Adax</h2>
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
                {passwordError && (
                  <Form.Text className="text-danger">{passwordError}</Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repeate Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {confirmPasswordError && (
                  <Form.Text className="text-danger">
                    {confirmPasswordError}
                  </Form.Text>
                )}
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="action-buttons"
                disabled={isButtonDisabled}
              >
                Sign Up
              </Button>
              <br />
              <Link to="/signin">
                <p className="create-account">Already have an account?</p>
              </Link>
              <p className={`sign-message ${flag === 1 ? "red" : "green"}`}>
                {message}
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
