import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross_white } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const B1_1=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[12].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-b1_1 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"violet"} ` } > 
<div className={`icon_style `}  >{name=="default"||contextUse.newVal.logoUrl==""?iconA1_1():<img src={contextUse.newVal.logoUrl!}></img>}</div>
<div className={`content_box b1_1_additional`}>
<div className="cross_icon" > <Modal_cross_white/> </div>
 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
<div id="b1_1_bottom" className={`${name!="default"?contextUse.newVal.color:"violet"}`}>{theValue()![2]}</div>
 </div>

</div>
</>
)


    }


export default B1_1