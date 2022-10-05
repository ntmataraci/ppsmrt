import { iconA1_1, iconB2_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross_white } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"


const B2_1=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[16].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-b2_1 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"white"} `}> 
<div className={`content_box`}>
<div className="cross_icon" > <Modal_cross_white/> </div>
<h2>{theValue()![0]}</h2>
<h3>{theValue()![1]}</h3>
<div style={{display:"flex",justifyContent:"space-between", fontSize:"36px",gap:"0.5rem"}}>
<button >{iconB2_1()}</button>
<button >{iconB2_1()}</button>
<button >{iconB2_1()}</button>
<button >{iconB2_1()}</button>
</div>
</div>
</div>
</>
)


    }


export default B2_1