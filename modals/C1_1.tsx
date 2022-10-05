import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const C1_1=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[4].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
                             
<div className={`card-c1_1 c1_1_additionals ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"violet"}`}>                                      
<div className="cross_icon" > <Modal_cross/> </div>
<div className="icon_style"  style={{marginTop:"1rem",display:"flex",gap:"3rem",justifyContent:"flex-start"}}>
<div style={{borderRadius:"50%",width:"90px"}}>{name=="default"||contextUse.newVal.logoUrl==""?iconA1_1():<img src={contextUse.newVal.logoUrl!}></img>}</div>
<div style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
 <div style={{width:"100%",fontWeight:"600"}}>{theValue()![0]}</div>
<div style={{width:"100%"}}> {theValue()![1]}</div>
</div>
 </div>
</div>
</>
)


    }


export default C1_1