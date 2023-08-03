import React from 'react'; 
import "./landing.css"
import { useState,useEffect } from 'react';

export default function Landing (){

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

  useEffect(() => {
    // Update the state when the window is resized
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return(
        <>
          <div class="parent ">
      <div class="logo-parent text-center">
        <img src="./Images/logo.png" />
      </div>

      <div class="d-flex gap30 justify-content-between p-2 container-fluid">
        <div class="width55">
          <div className='headtext'>
            <p class="tag">
              AI powered<span class="p-color"> personalised skin & hair</span> care</p>
          </div>
          {isMobileView && <div class="width45 otherone">
              <div className='merge-parent'>
                <img className='dotes' src='./Images/dortes.png'/>
              </div>
            </div>}
          <div class="small-head-prnt">
            <p class="smll">get free personalised report
                in less than</p>
          </div>

          <div class="timep">
            <p class="timedis">30 sec....</p>
          </div>

          <div class="scan-prnt text-center">
            <p class="strt">Start Scaning</p>
          </div>
        </div>
        {!isMobileView && <div class="width45 otherone">
            <div className='merge-parent'>
              <img className='dotes' src='./Images/dortes.png'/>
            </div>
          </div>}
      </div>
    </div>
        </>
    )
}