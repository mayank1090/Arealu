
import './App.css';
import About from './components/about/about';
import Founder from './components/founder/founder';
import Hair from './components/hairpage/hair';
import Landing from './components/landingPage/landing';
import Process from './components/process/process';
import CameraComponent from './components/Sample/sample';
import Scan from './components/Scanpage/scan';
import Skin from './components/skinpage/skin';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/major';
import Stepper from "./components/questioner/Questioner"
import Selfie1 from './components/selfiimage/selfiimage1';
import Selfie2 from './components/selfiimage/selfiimage2';
import Selfie3 from './components/selfiimage/selfiimage3';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       {/* <Landing/>
      <Process/> */}
      {/* <Hair/> */}
      {/* <Skin/> */}
      {/* <CameraComponent/> */}
      <Selfie1/>
      <Selfie2/>
      <Selfie3/>
      {/* <Scan/>
      <Founder/> 
      <About/> */}
    </div>
    </Provider>
  );
}

export default App;
