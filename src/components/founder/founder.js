import React from "react";
import "./founder.css";

export default function Founder() {
  return (
    <>
      <div class="container ">
       <div className="d-flex pntt">
        <div className="ownerpnt">
            <div className="ownerdiv">
            <img className="owner" src="./Images/owner.png" alt="owner"></img>
            </div>
        </div>

        <div className="ownerinfo">
            {/* <div className="cloundprnt">
                <img className="cloud" src="./Images/clouds.png" alt="cloud"></img>
            </div> */}

            <div className="ownertext">
                <p className="orngetext">from the founder</p>
                <p className="whitetxt">welcome to our  personal care technology company. we are dedicated to revolutionizing the way individuals experience personal care  through innovative technological solutions. our company specializes in developing cutting-edge products
and services that enhance and streamline various aspects of personal care. with a focus on convenience, efficiency, and user experience, we aim to empower individuals to take control of their personal care routines in a modern and intelligent way.</p>
            </div>

            <div className="ownerintro d-flex">
                <div className="greenprnt">
                    
                </div>

                <div className="introtext">
                    <p className="ownername">ayush choubisa</p>
                    <p className="designation">founder  and ceo</p>
                </div>
            </div>

            <div className="scanbtnprnt">
                <div className="scanbtn">
                    <p className="btntxt">Start Scanning</p>
                </div>
            </div>
        </div>
       </div>
      </div>
    </>
  );
}
