import React from "react";
import { useState, useEffect } from "react";
import "./skin.css";

export default function Skin() {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

  useEffect(() => {
    // Update the state when the window is resized
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="skinparent">
        <div class="container ">
          <div className="d-flex hairprnt">
            <div className="rghttxthair">
              {!isMobileView && (
                <div className="dotesparent">
                  <img
                    src="./Images/onlydotes.png"
                    alt="onlydotes"
                    className="onlydotesparnt"
                  ></img>

                  <div className="greenparent">
                    <div className="hairlossprnt">
                    <img
                        className="hairloss"
                        alt="hairloss"
                        src="./Images/damageskin.png"
                      />
                      <img
                        className="hairgain"
                        alt="hairloss"
                        src="./Images/anotherskin.png"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="leftetxthair">
              <div className="aiheading">
                <p className="orheheading">
                  AI <span className="organehairspan">For Your Skin</span>
                </p>
              </div>
              {isMobileView && (
                <div className="dotesparent">
                  <img
                    src="./Images/onlydotes.png"
                    alt="onlydotes"
                    className="onlydotesparnt"
                  ></img>

                  <div className="greenparent">
                    <div className="hairlossprnt">
                    <img
                        className="hairloss"
                        alt="hairloss"
                        src="./Images/damageskin.png"
                      />
                      <img
                        className="hairgain"
                        alt="hairloss"
                        src="./Images/anotherskin.png"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="parahead">
                <p className="innerparablack">
                  Personalized skin analysis like never before. our cutting-
                  edge technology scans and analyzes your skin, providing aa
                  detailed report with valuable insights .embrace the future of
                  skincare with our user friendly interface
                </p>
              </div>

              <div className="hairproblemui">
                <ul className="problemul">
                  <li className="problemli">acne detection </li>
                  <li className="problemli">pore detection </li>
                  <li className="problemli">skin type</li>
                  <li className="problemli">face fine lines detection</li>
                  <li className="problemli">eye bags, dark circles detection</li>
                  <li className="problemli">mole detection </li>
                  <li className="problemli">blackhead detection </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
