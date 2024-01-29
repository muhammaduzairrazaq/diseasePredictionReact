import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePageComplete } from "./components/HomePage/HomePageComplete";
import { SignIn } from "./components/LoginPage/SignIn";
import { SignUp } from "./components/LoginPage/SignUp";
import { ChatBot } from "./components/InteractionPage/ChatBot";
import { VoiceBot } from "./components/InteractionPage/VoiceBot";
import { DiseaseReport } from "./components/InteractionPage/DiseaseReport";
import { HealthProfile } from "./components/InteractionPage/HealthProfile";
import { DiseaseProfile } from "./components/InteractionPage/DiseaseProfile";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePageComplete />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="chatbot" element={<ChatBot />} />
          <Route path="voicebot" element={<VoiceBot />} />
          <Route path="diseasereport" element={<DiseaseReport />} />
          <Route path="healthprofiles" element={<HealthProfile />} />
          <Route path="diseaseprofiles" element={<DiseaseProfile />} />
        </Routes>
      </Router>

      {/* 
<BrowserRouter>
<Routes>
<Route path="/interaction-page/bot" element={<Bot />} />
</Routes>
</BrowserRouter>
      */}

      {/* <SignIn />
    <SignUp />
    <Bot />
    <ChatBot />
    <VoiceBot />
    < DiseaseReport />
    <DiseaseProfile /> */}
    </div>
  );
}

export default App;
