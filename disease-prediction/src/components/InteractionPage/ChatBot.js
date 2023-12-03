import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import bulb from "../../assets/bulb.svg";
import dots from "../../assets/dots.svg";
import forward from "../../assets/forward.svg";

export const ChatBot = () => {
    return (

        <Container>
            <Row>
                <Col md={12}>
                <div className="chatbot-container">
                    <div className="chatbot-message-box">
                        <img className="message-bulb" src={bulb} alt="bulb" />
                        <p>If you’re experiencing serious symptoms, do not use Adax. Instead, please contact emergency services.</p>
                    </div>
                    <img className="bot-logo" src={logo} alt="logo" />

                    <div className="bot-message-container">
                    <img className="bot-logo" src={logo} alt="logo" />
                    <p>Great! what’s your name ?</p>
                    </div>
                    
                    <div className="input-container">
                     <input type="text" placeholder="Enter your response here..."></input>
                     <img src={dots} alt="dots" />
                    </div>
                    
                    <div className="forward-container">
                    <img className="forward-logo" src={forward} alt="forward" />
                    </div>

                </div>


                </Col>
            </Row>
        </Container>


    );
}

