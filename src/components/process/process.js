import React from "react";
import { useState,useEffect } from "react";
import "./process.css";

export default function Process() {

  const [firstarrow, setfirstarrow] = useState('./Images/firstarrow.png');
  const [secondarrow, setsecondarrow] = useState('./Images/secondarrow.png');
  const [thirdarrow, setthirdarrow] = useState('./Images/thirdarrow.png');

  useEffect(() => {
    // Function to update the image source based on screen size
    const handleImageSource = () => {
      const mobileViewWidth = 480;
      if (window.innerWidth <= mobileViewWidth) {
        // setImageSource('./Images/Group 51.png');
        setfirstarrow('./Images/firstslant.png')
        setsecondarrow("./Images/secondslant.png")
        setthirdarrow("./Images/thirdslant.png")
      } else {
        setfirstarrow('./Images/firstarrow.png')
        setsecondarrow("./Images/secondarrow.png")
        setthirdarrow("./Images/thirdarrow.png")
      }
    };

    // Call the function on component mount and when the window is resized
    handleImageSource();
    window.addEventListener('resize', handleImageSource);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleImageSource);
    };
  }, []);

  return (
    <>
      <div class="container ">
        <div className="proceestag text-center p-2">
          <p className="process">Process</p>
        </div>

        <div className="howitworks text-center p-2">
          <p className="works">How It Works</p>
        </div>
    
       <div className="flexcontainerprnt">
        {/* <div className="d-flex justify-content-center random">
          < div className="processimgparent">
            <img className="processimg" src={imageSource} alt="process"></img>
          </div>
          </div> */}
          < div className="proc">
            <div className="main-process-prnt">
              <div className="purplecircle"><p className="number">1</p></div>
              <div className="arrowprntprocess"><img src={firstarrow} alt="firstarrow" className="fristarrow"/></div>
              <div className="purplecircle"><p className="number">2</p></div>
              <div className="arrowprntprocess"><img src={secondarrow} alt="secondarrow" className="fristarrow"/></div>
              <div className="purplecircle"><p className="number">3</p></div>
              <div className="arrowprntprocess"><img src={thirdarrow} alt="thirdarrow" className="fristarrow"/></div>
              <div className="purplecircle"><p className="number">4</p></div>
            </div>
          </div>
        

        <div className="d-flex anyyt">
          <div className="text-prnt">
            <div className="orngeprnt">
              <p className="ornge">Start Scaning</p>
            </div>

            <div className="disprnt">
              <p className="disc">
                choose analysis type allow camera access let ai complete
                scanning process
              </p>
            </div>
          </div>

          <div className="text-prnt">
            <div className="orngeprnt">
              <p className="ornge">AI analysis</p>
            </div>

            <div className="disprnt">
              <p className="disc">
                ai uses computer vision for in-depth skin & hair analysis,
                comparing features to a vast data- base, providing personali-
                zed skin & hair care recommendations
              </p>
            </div>
          </div>

          <div className="text-prnt">
            <div className="orngeprnt">
              <p className="ornge">sign up</p>
            </div>

            <div className="disprnt">
              <p className="disc">
                sign up with mail/ mobile no. quick, seam- less registration
                process, enabling access to personalized services at your
                fingertips
              </p>
            </div>
          </div>

          <div className="text-prnt">
            <div className="orngeprnt">
              <p className="ornge">your free report</p>
            </div>

            <div className="disprnt">
              <p className="disc">
                unlock valuable insights with our AI - BASED FREE REPORTS.
                PERSONALIZED ANALYSIS FOR INFORMED DECISIONS, enhancing your
                knowledge like never before.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
