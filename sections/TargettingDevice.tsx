import { exit } from "process";
import { useContext, useState,useRef, useEffect } from "react";
import Languages from "../components/Languages";
import SwitchButton from "../components/SwitchButton";
import { ContextProvider } from "../functions/Context";
import { dataType } from "../components/modal.types";

const computerIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 12.5C15.825 12.5 16.5 11.825 16.5 11V1.5C16.5 0.675 15.825 0 15 0H3C2.175 0 1.5 0.675 1.5 1.5V11C1.5 11.825 2.175 12.5 3 12.5H0V14H18V12.5H15ZM3 1.5H15V11H3V1.5Z"
      fill="#7D4AEA"
    />
  </svg>
);

const phoneIcon = () => (
  <svg
    width="12"
    height="18"
    viewBox="0 0 12 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.75 0.7575L2.25 0.75C1.425 0.75 0.75 1.425 0.75 2.25V15.75C0.75 16.575 1.425 17.25 2.25 17.25H9.75C10.575 17.25 11.25 16.575 11.25 15.75V2.25C11.25 1.425 10.575 0.7575 9.75 0.7575ZM9.75 14.25H2.25V3.75H9.75V14.25Z"
      fill="#999999"
    />
  </svg>
);

const downArrow = () =>
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4425 0.442383L5 3.87738L1.5575 0.442383L0.5 1.49988L5 5.99988L9.5 1.49988L8.4425 0.442383Z" fill="#777777"/>
</svg>

const crossIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 6.515L6.515 7.5L4 4.985L1.485 7.5L0.5 6.515L3.015 4L0.5 1.485L1.485 0.5L4 3.015L6.515 0.5L7.5 1.485L4.985 4L7.5 6.515Z"
      fill="black"
    />
  </svg>
);


const TargettingDevice = () => {

const [openLanguage,setOpenLanguage]=useState<boolean>(false)

const refXsec=useRef<HTMLInputElement>(null)
const sendSeconsToContext = () => {
  contextUse.changer?.((prev:dataType)=>({...prev,afterSeconds:refXsec.current&&+refXsec.current.value}))
}

  const afterXSeconds = () => {
    return(
        <>
        <div className="targettingdevice_row">
        <div  className="targettingdevice_text">After X Seconds</div>
        <SwitchButton name={"afterXsec"} />
      </div>
      {contextUse.newVal.afterSeconds!=0&&
      <div className="targettingdevice_row">
        <input type="number" ref={refXsec} onChange={sendSeconsToContext} className="targettingdevice_input"></input>
      </div>
  }
      </>
    )
}


const refXscr=useRef<HTMLInputElement>(null)
const sendscrollsToContext = () => {
  contextUse.changer?.((prev:dataType)=>({...prev,afterScroll:refXsec.current&&+refXscr.current!.value}))
}

const afterXScroll = () => {
  return(
    <>
    <div className="targettingdevice_row">
    <div  className="targettingdevice_text">After % Scroll</div>
    <SwitchButton name={"afterXscr"}/>
  </div>
  {contextUse.newVal.afterScroll!=0&&
  <div className="targettingdevice_row">
    <input type="number" className="targettingdevice_input" ref={refXscr} onChange={sendscrollsToContext}></input>
  </div>
}
  </>
  )
}
const refTraffic=useRef<HTMLInputElement>(null)
const sendtrafficToContext = () => {
  contextUse.changer?.((prev:dataType)=>({...prev,trafficSource:refXsec.current&&refTraffic.current!.value}))
}

const trafficSource = () => {
  return(
    <>
    <div className="targettingdevice_row">
    <div  className="targettingdevice_text">Traffic Source</div>
    <SwitchButton name={"traffic"} />
  </div>
  {contextUse.newVal.trafficSource!=""&&
  <div className="targettingdevice_row">
    <input type="text" className="targettingdevice_input" ref={refTraffic} onChange={sendtrafficToContext} placeholder="Enter your traffic source domain"></input>
  </div>
}
  </>
  )
}

//language

const [removeLangState,setRemoveLangState]=useState<any>()
const removeFromButonLang = (lang:any)=>{
  console.log(lang)
  const removedList=contextUse.newVal.language.filter(item=>item!=lang)
  contextUse.changer?.((prev:dataType)=>({...prev,language:removedList}))
setRemoveLangState(lang)
}

const selectedLanguage_box = () => (
  contextUse.newVal.language.length>0&&contextUse.newVal.language.map((lang,idx)=>
  <div key={idx} className="selectedLanguage_box">{lang}
  <div onClick={()=>removeFromButonLang(lang)}>{crossIcon()}</div>
  </div>
  )
);


  const browserLanguage = () => {
    
    return(
    <>
      <div className="targettingdevice_row">
      <div  className="targettingdevice_text">Browser Language</div>
      <SwitchButton name={"language"} />
    </div>
   {contextUse.newVal.language.length!=7&&
     <div className="targettingdevice_row">
     <div className="targettingdevice_input downArrow" onClick={()=>setOpenLanguage(!openLanguage)}>Select {downArrow()}</div>
      </div>
  }
      {(openLanguage)&&contextUse.newVal.language.length!<7?
      <Languages  removeLangFromOuter={removeLangState} openLanguage={openLanguage} setOpenLanguage={()=>setOpenLanguage(!openLanguage)} />:""}

      {contextUse.newVal.language.length!=7&&
     <div className="targettingdevice_row">
      <div className="targettingdevice_input">
      {selectedLanguage_box()}
      </div>
     </div>
  }
  </>
    )
  }
  

const contextUse=useContext(ContextProvider)
const [deviceSelected,setDeviceSelected]=useState("desktop")
const deviceToContext = () => {
  contextUse.changer?.((prev:dataType)=>({...prev,visitorDevice:deviceSelected}))
  
}

//exit intent targeting
const exitIntentTargeting = () =>{
  return(
    <div className="targettingdevice_row">
    <div  className="targettingdevice_text">Exit Intent Targeting</div>
    <SwitchButton name={"exitIntent"}/>
  </div>
  )
}




  return (
    <div className="targettingdevice_container">
      <div className="targettingdevice_row">
        <div className="targettingdevice_text">Visitor Device</div>
        <SwitchButton name="visitorDevice" />
      </div>
      <div className="targettingdevice_row">
        {contextUse.newVal.visitorDevice!="all"&&
        <>
           <div className="targettingdevice_devices">
           <input type="checkbox" checked={deviceSelected=="desktop"} onChange={()=>{deviceSelected=="desktop"?setDeviceSelected("mobile"):setDeviceSelected("desktop");deviceToContext()}}></input>
          <div>{computerIcon()}</div>
          <div>Desktop</div>
        </div>
        <div className="targettingdevice_devices">
          <input type="checkbox" checked={deviceSelected=="mobile"} onChange={()=>{deviceSelected=="mobile"?setDeviceSelected("desktop"):setDeviceSelected("mobile");deviceToContext()}}></input>
          <div> {phoneIcon()}</div>
          <div> Mobile</div>
        </div>
        </>  
         }
</div>
  {afterXSeconds()}
  {afterXScroll()}
 {trafficSource()}
 {browserLanguage()}
 {exitIntentTargeting()}
    </div>
  );
};

export default TargettingDevice;
