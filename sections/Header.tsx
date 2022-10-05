import icon from "./header_files/icon.png";
import down_arrow from "./header_files/down_arrow.svg";
import { useContext,useEffect,useState } from "react";
import {ContextProvider} from "../functions/Context"
const Sections = () => {
const deneme = useContext(ContextProvider)

  return (
    <div className="header_row">
      <div className="left_section">
        <div>
          <img src={icon.src} width="36" height="36"/>
          modals.card
        </div>
        <div>
          Solutions
          <img src={down_arrow.src}></img>
        </div>
        <div>Product Tour</div>
        <div>Showcase</div>
        <div>Pricing</div>
      </div>


<div className="right_section">
<div style={{cursor:"pointer"}}>Sign In</div>
<div className="btn-link_violet header" style={{cursor:"pointer"}}>Try for free</div>


</div>
    </div>
  );
};

export default Sections;
