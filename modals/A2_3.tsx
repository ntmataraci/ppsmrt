import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross_white } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const A2_3=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[6].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-a2_3 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"violet"} `}> 
<div className={`content_box`}>
<div className="cross_icon" > <Modal_cross_white/> </div>
 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
<div className="button_row">
 <button className={name=="default"?"btn-link_violet half":"btn-link half "+contextUse.newVal.color}  >{theValue()![2]}</button>
 <button className={"btn-link_white half"}  >{theValue()![3]}</button>
 </div>
 </div>
</div>
</>
)


    }


export default A2_3