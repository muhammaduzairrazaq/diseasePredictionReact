import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="signin-container">
            <Form className="signin-form">
              <img className="signin-logo" src={logo} alt="logo" />
              <h2>Sign up to Adax</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Repeate Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              <br />
              <Link to="/signin">
                <p className="create-account">Already have a account?</p>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
