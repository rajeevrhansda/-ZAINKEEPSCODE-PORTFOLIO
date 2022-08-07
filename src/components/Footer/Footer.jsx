import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { UilLinkedin } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rajeevrhansda@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/rajeevrhansda" title="Github" target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/rajeevrhansda/" title="LinkedIn" target="_blank" rel="noreferrer"><UilLinkedin color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/rajeev.hansda" title="Facebook" target="_blank" rel="noreferrer"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/rajeevhansda/" title="Instagram" target="_blank" rel="noreferrer"><Insta color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
