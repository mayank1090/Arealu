import React from "react";
import { useState,useEffect } from "react";
import "./hair.css";

export default function Hair() {

    const [currentImage, setCurrentImage] = useState(0);

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

  useEffect(() => {
    // Update the state when the window is resized
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
   

  useEffect(() => {
    // List of image sources for hairloss

    const interval = setInterval(() => {
      // Increment currentImage index and loop back to 0 when reaching the end
      setCurrentImage((prevImage) => (prevImage + 1) % 2);
    }, 4800); // Change image every 2 seconds (2000 milliseconds)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="hairparent">
      <div class="container ">
       <div className="d-flex hairprnt">
        <div className="leftetxthair">
            <div className="aiheading">
                <p className="orheheading">AI <span className="organehairspan">For Your Hair</span></p>
            </div>
            {isMobileView &&  <div className="dotesparent">
                <img src="./Images/onlydotes.png" alt="onlydotes"className="onlydotesparnt"></img>

                <div className="greenparent">
                <div className="hairlossprnt">
                    <img className="hairloss" alt="hairloss" src={(currentImage===0)?"./Images/lesshair.png": "./Images/anotherhair.png"}/>
                </div>
                </div>
               
            </div>}

            <div className="parahead">
                <p className="innerpara">Our revolutionary technology scans your hair and delivers a personalized, in-depth report like never before. discover your hair’s health, strength, and unique characteristics with just a simple scan</p>
            </div>

            <div className="hairproblemui">
                <ul className="problemul">
                    <li className="problemli">Hair Color</li>
                    <li className="problemli">hair type</li>
                    <li className="problemli">hair category</li>
                    <li className="problemli">hair age</li>
                    <li className="problemli">premature grading</li>
                    <li className="problemli">scalp report basic</li>
                    <li className="problemli">hair style analysis</li>
                    <li className="problemli">ar try -on</li>
                </ul>
            </div>
        </div>
        <div className="rghttxthair">
        {!isMobileView &&  <div className="dotesparent">
                <img src="./Images/onlydotes.png" alt="onlydotes"className="onlydotesparnt"></img>

                <div className="greenparent">
                <div className="hairlossprnt">
                    <img className="hairloss" alt="hairloss" src={(currentImage===0)?"./Images/lesshair.png": "./Images/anotherhair.png"}/>
                </div>
                </div>
               
            </div>}
        </div>
       </div>
      </div>
      </div>
    </>
  );
}