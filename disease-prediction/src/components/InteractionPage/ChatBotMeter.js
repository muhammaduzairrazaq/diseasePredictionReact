import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useContext } from "react";
import "../../App.css";
import Count from "../../context/Counter";

// const [chatBotMessageCount, setchatBotMessage] = useState(1);
// const [userResponseCount, setUserResponse] = useState(0);
// const [textMessageCount, setTextMessage] = useState(0);
// const [voiceMessageCount, setVoiceMessage] = useState(0);

function Progress() {
  const [chatBotMessageCount, setchatBotMessage] = useContext(Count);
  const [userResponseCount, setUserResponse] = useContext(Count);

  return (
    <div>
      <p className="progressbar-tags">ChatBot Message</p>
      <ProgressBar
        striped
        variant="success"
        animated
        now={chatBotMessageCount}
        label={`${chatBotMessageCount}%`}
      />
      <p className="progressbar-tags">User Response</p>
      <ProgressBar
        striped
        variant="info"
        animated
        now={userResponseCount}
        label={`${userResponseCount}%`}
      />
      {/* <p className="progressbar-tags">Text Message</p>
      <ProgressBar
        striped
        variant="warning"
        animated
        now={pp}
        label={`${pp}%`}
      />
      <p className="progressbar-tags">Voice Message</p>
      <ProgressBar
        striped
        variant="danger"
        animated
        now={et}
        label={`${et}%`}
      /> */}
    </div>
  );
}

export default Progress;
