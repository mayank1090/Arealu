import React from "react";
import { useState,useEffect } from "react";
import "./process.css";

export default function Process() {

  const [imageSource, setImageSource] = useState('./Images/Group 50.png');

  useEffect(() => {
    // Function to update the image source based on screen size
    const handleImageSource = () => {
      const mobileViewWidth = 480;
      if (window.innerWidth <= mobileViewWidth) {
        setImageSource('./Images/Group 51.png');
      } else {
        setImageSource('./Images/Group 50.png');
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
        <div className="d-flex justify-content-center random">
          < div className="processimgparent">
            <img className="processimg" src={imageSource} alt="process"></img>
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
