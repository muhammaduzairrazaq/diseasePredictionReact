import { createContext } from "react";

const Count = createContext({
    chatBotMessageCount: 0,
    setChatBotMessageCount: () => {},
    userResponseCount: 0,
    setUserResponseCount: () => {},
    textMessageCount: 0,
    setTextMessageCount: () => {},
    voiceMessageCount: 0,
    setVoiceMessageCount: () => {},
  });

export default Count;
