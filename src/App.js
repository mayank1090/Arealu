
import './App.css';
import About from './components/about/about';
import Founder from './components/founder/founder';
import Landing from './components/landingPage/landing';
import Process from './components/process/process';
import Scan from './components/Scanpage/scan';

function App() {
  return (
    <div className="App">
      {/* <Landing/>
      <Process/>
      <Scan/>
      <Founder/> */}
      <About/>
    </div>
  );
}

export default App;
