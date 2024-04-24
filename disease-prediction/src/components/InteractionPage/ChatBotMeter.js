import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useContext } from "react";
import "../../App.css";
import Count from "../../context/Counter";

function Progress() {
  const {
    chatBotMessageCount,
    setChatBotMessageCount,
    userResponseCount,
    setUserResponseCount,
    textMessageCount,
    setTextMessageCount,
    voiceMessageCount,
    setVoiceMessageCount,
  } = useContext(Count);

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
      <p className="progressbar-tags">Text Message</p>
      <ProgressBar
        striped
        variant="warning"
        animated
        now={textMessageCount}
        label={`${textMessageCount}%`}
      />
      <p className="progressbar-tags">Voice Message</p>
      <ProgressBar
        striped
        variant="danger"
        animated
        now={voiceMessageCount}
        label={`${voiceMessageCount}%`}
      />
    </div>
  );
}

export default Progress;
