
import './App.css';
// import About from './components/about/about';
// import Founder from './components/founder/founder';
// import Hair from './components/hairpage/hair';
// import Landing from './components/landingPage/landing';
// import Process from './components/process/process';
// import CameraComponent from './components/Sample/sample';
// import Scan from './components/Scanpage/scan';
// import Skin from './components/skinpage/skin';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/major';
import Stepper from "./components/questioner/Questioner"

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
      <Stepper/>
      {/* <Scan/>
      <Founder/> 
      <About/> */}
    </div>
    </Provider>
  );
}

export default App;
