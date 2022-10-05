const iconInformation=()=><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33301 3.66658H7.66634V4.99992H6.33301V3.66658ZM6.33301 6.33325H7.66634V10.3333H6.33301V6.33325ZM6.99967 0.333252C3.31967 0.333252 0.333008 3.31992 0.333008 6.99992C0.333008 10.6799 3.31967 13.6666 6.99967 13.6666C10.6797 13.6666 13.6663 10.6799 13.6663 6.99992C13.6663 3.31992 10.6797 0.333252 6.99967 0.333252ZM6.99967 12.3333C4.05967 12.3333 1.66634 9.93992 1.66634 6.99992C1.66634 4.05992 4.05967 1.66659 6.99967 1.66659C9.93967 1.66659 12.333 4.05992 12.333 6.99992C12.333 9.93992 9.93967 12.3333 6.99967 12.3333Z" fill="black"/>
</svg>

import { useContext, useState } from "react";
import { ContextProvider } from "../functions/Context";

const SettingsCode = () => {

  const contextUse=useContext(ContextProvider)
  const [webhook,setWebhook]=useState("")
  const [sendSubmission,setSendSubmission]=useState(false)
  const [sendData,setSendData]=useState(false)
  const [blankCode,setBlankCode]=useState("")
const webhookHandler = (e) => {
  console.log(e.target.value)
setWebhook(e.target.value)
contextUse.changer?.((prev)=>({...prev,webhookurl:webhook}))
}

const sendSubmissionHandler = () => {
  setSendSubmission(!sendSubmission)
  contextUse.changer?.((prev)=>({...prev,sendSubmission:sendSubmission}))
}
const sendDataHandler = () => {
  setSendData(!sendData)
  contextUse.changer?.((prev)=>({...prev,clickData:sendData}))
}

const getTheCode=()=>{
    const sumOfData=contextUse.newVal

    const scriptText=`
     <script type="text/javascript" src="./myscript.js"></script>
    <script>
   const codes= { modalName:"${sumOfData.modalName}",size: "${sumOfData.size}", color: "${sumOfData.color}", position: "${sumOfData.position}",logoUrl: "${sumOfData.logoUrl}",
  content: "${sumOfData.content?.join("~")}", imgUrl: "${sumOfData.imgUrl}", visitorDevice: "${sumOfData.visitorDevice}", afterSeconds: "${sumOfData.afterSeconds}",afterScroll: "${sumOfData.afterScroll}",
  trafficSource: "${sumOfData.trafficSource}",language: "${sumOfData.language}",exitTargeting: "${sumOfData.exitTargeting}", webhookUrl: "${webhook}", sendSubmission: "${sendSubmission}",
  clickData: "${sendData}"}
  popUp()
  </script>
    `
   
setBlankCode(scriptText)
}


const [copied,setcopied]=useState("")
const copyToClipBoard = async (x) => {
  try {
      await navigator.clipboard.writeText(x);
      setcopied('Copied!');
      setTimeout(()=>setcopied(""),1500)
  } 
  catch (err) {
      setcopied('not copied');
  }
};


  const codeBox = () => (
    <div className="codebox_container">
      <div>{blankCode}</div>
      <button className="btn-link_violet copythecode" onClick={()=>copyToClipBoard(blankCode)}> {copied?copied:"Copy the code"}</button>
    </div>
  );


  return (
    <div className="settingscode_container">
      <h3>Webhook to Send data</h3>
      <div>Enter youe Webhook URL</div>
      <div>You can create a simple one with make.com</div>
      <input type="text" name="" placeholder="Your webhook url" onChange={webhookHandler} value={webhook}/>
      <div className="settingscode_row">
        <input type="checkbox" className="violet_checkbox" onChange={sendSubmissionHandler}></input>Send form
        submissions
      </div>
      <div className="settingscode_row">
        <input type="checkbox" className="violet_checkbox" onChange={sendDataHandler}></input>Send click
        data
      </div>
      <button className="btn-link_violet getthecode" onClick={getTheCode}>Get The Code</button>
      {codeBox()}
      <div>
   <div className="codebox_note"> {iconInformation()} Copy and paste the embed code above just before the
closing {"</body>"} tag of your website template file.</div> 
      </div>
    </div>
  );
};

export default SettingsCode;
