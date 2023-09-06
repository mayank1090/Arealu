import "./App.css";
// import About from "./components/about/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Founder from "./components/founder/founder";
// import Hair from "./components/hairpage/hair";
// import Landing from "./components/landingPage/landing";
// import Process from "./components/process/process";
// import CameraComponent from './components/Sample/sample';
// import Scan from "./components/Scanpage/scan";
// import Skin from "./components/skinpage/skin";
import Mainpage from "./components/mainpage/mainpage";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/major";
import Selfie1 from "./components/selfiimage/selfiimage1";
import Selfie2 from "./components/selfiimage/selfiimage2";
import Selfie3 from "./components/selfiimage/selfiimage3";
import Questionnaire1 from "./components/questioner/questioner1";
import Loginquestioner from "./components/login/loginquestioner";
import Questionnaire2 from "./components/questioner/questioner2";
import Questionnaire3 from "./components/questioner/questioner3";
import Questionnaire4 from "./components/questioner/questioner4";
import Loginotp from "./components/login/loginotp";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/selfie1" element={<Selfie1 />} />
            <Route path="/selfie2" element={<Selfie2 />} />
            <Route path="/selfie3" element={<Selfie3 />} />
            <Route path="/loginquestioner" element={<Loginquestioner />} />
            <Route path="/questionnaire1" element={<Questionnaire1 />} />
            <Route path="/questionnaire2" element={<Questionnaire2 />} />
            <Route path="/questionnaire3" element={<Questionnaire3 />} />
            <Route path="/questionnaire4" element={<Questionnaire4 />} />
            <Route path="/loginotp" element={<Loginotp />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
