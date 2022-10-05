import Appearance from "./Appearance"
import Content from "./Content"
import PopupGrid from "../components/PopupGrid"
import TargettingDevice from "./TargettingDevice"
import SettingsCode from "./SettingsCode"
import RightImage from "./RightImage"

const Modalsection = () => {

const textList=[
    "Choose your template","Apperance","Content","Targetting Rules","Settings and Code"
]

const modalList=[<PopupGrid/>,<Appearance/>,<Content/>,<TargettingDevice/>,<SettingsCode/>]
console.log(modalList)
    return(
<div className="modalsection_container">
<h2>Modal Card Generator</h2>
<div className="modalsection_container_content">Measure your return on email marketing efforts easier and
faster by using thebest online tools. Popupsmart is ready to
help you build an efficient email list!</div>
{textList.map((headers,idx)=>
    <div key={idx}>
        <>
    <h3>
    <div className="modalsection_container_subheadersNumber">{idx+1}</div>{headers} {idx==1&&<div style={{fontWeight:"400",marginLeft:"-2rem"}}>(Size,colors,logo)</div>}
    </h3>
    {modalList[idx]}
    </>
    </div>
)}
</div>
    )
}

export default Modalsection