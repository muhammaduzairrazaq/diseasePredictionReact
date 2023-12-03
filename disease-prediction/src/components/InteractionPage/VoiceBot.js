import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo.png";
import bulb from "../../assets/bulb.svg";
import audiowave from "../../assets/audiowave.svg";
import microphone from "../../assets/microphone.svg";
import forward from "../../assets/forward.svg"

export const VoiceBot = () => {
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

                    <div className="voice-bot-message-container">
                    <img className="bot-logo" src={logo} alt="logo" />
                    <div className="bot-audiowave-container">
                    <img className="bot-audiowave" src={audiowave} alt="audiowave" />
                    </div>
                    </div>
                    
                    <div className="input-container">
                     <input type="text" placeholder="Record your response here..."></input>
                     <img src={microphone} alt="dots" />
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

