import { iconA1_1, iconB2_3 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"
const B2_3=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[18].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>

<div className={`card-b2_3 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"white"}  `}> 
<div className="content_box">
<div className="cross_icon" > <Modal_cross/> </div>
<div className="icon_style"  style={{marginTop:"1rem"}}>{name=="default"||contextUse.newVal.logoUrl==""?iconA1_1():<img src={contextUse.newVal.logoUrl!}></img>}</div>

 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
<div className="button_row">
 <button style={{border:"none",filter:"brightness(0.5)"}}>{iconB2_3()}</button>
 </div>
 </div>
</div>
</>
)


    }


export default B2_3