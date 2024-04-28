import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AlertDismissible = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Container>
        <Row>
          <Col>
              <Alert variant="success">
                This is a success alert
                <Alert.Link href="#">an example link</Alert.Link>. Give it a
                click if you like.
              </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AlertDismissible;
