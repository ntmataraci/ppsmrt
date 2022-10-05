import { ContextProvider } from "../functions/Context"
import { useContext,useState } from "react"
import {Props,dataType} from "./modal.types"

const SwitchButton= ({name}:Props) => {
const contextUse=useContext(ContextProvider)
const [isChecked,setIsChecked]=useState(true)
const getBoxValue = (e:any) => {
    setIsChecked(!isChecked)
console.log(e.target.checked)
switch(name){
    case "visitorDevice":
    contextUse.changer?.((prev:dataType)=>({...prev,visitorDevice:isChecked==true?"all":!isChecked}));
    break;
    case "afterXsec":
        contextUse.changer?.((prev:dataType)=>({...prev,afterSeconds:isChecked?0:12}))
        console.log(contextUse)
        break;
    case "afterXscr":
        contextUse.changer?.((prev:dataType)=>({...prev,afterScroll:isChecked?0:50}))
        console.log(contextUse)
        break;
    case "traffic":
        contextUse.changer?.((prev:dataType)=>({...prev,trafficSource:isChecked?"":"google.com"}))
        console.log(contextUse)
    break;
    case "language":
        contextUse.changer?.((prev:dataType)=>({...prev,language:isChecked?["English",
        "French",
        "German",
        "Polish",
        "Dutch",
        "Finnish",["secret"]]:[]}))
        console.log(contextUse)
    break;
    case "exitIntent":
        contextUse.changer?.((prev:dataType)=>({...prev,exitTargeting:!prev.exitTargeting}))
}

}



//switchbutton styles is under _button.scss
    return(
   
        <div className="switchButton_container">
        <input type="checkbox"checked={isChecked} className="switchButton" onChange={getBoxValue}/>
        <div className="switchButtonDot"></div>
        </div>
        
    )
}

export default SwitchButton