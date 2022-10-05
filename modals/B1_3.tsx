import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross_white } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const B1_3=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[14].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-b1_3 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"violet"} `}> 
<div className={`content_box`}>
<div className="cross_icon" > <Modal_cross_white/> </div>
<h2>{theValue()![0]}</h2>
<div style={{display:"flex",justifyContent:"space-between", fontSize:"36px"}}>
<button className="b1_3_icons" dangerouslySetInnerHTML={{__html:theValue()![1]!}}></button>
<button className="b1_3_icons" dangerouslySetInnerHTML={{__html:theValue()![2]!}}></button>
<button className="b1_3_icons"  dangerouslySetInnerHTML={{__html:theValue()![3]!}}></button>
<button className="b1_3_icons"  dangerouslySetInnerHTML={{__html:theValue()![4]!}}></button>
<button className="b1_3_icons"  dangerouslySetInnerHTML={{__html:theValue()![5]!}}></button>
</div>
</div>
</div>
</>
)


    }


export default B1_3