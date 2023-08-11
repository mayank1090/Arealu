import React from "react";
import Landing from "../landingPage/landing";
import Process from "../process/process";
import Skin from "../skinpage/skin";
import Scan from "../Scanpage/scan";
import Hair from "../hairpage/hair";
import About from "../about/about";
import Founder from "../founder/founder";

export default function Mainpage(){

    return(
        <>
        <Landing/>
          <Process />
          <Hair />
          <Skin />
          <Scan />
          <Founder />
          <About />
        </>
    )
}