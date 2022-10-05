import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const B2_2=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[17].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>

<div className={`card-b2_2 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"white"}  `}> 
<div className="content_box">
<div className="cross_icon" > <Modal_cross/> </div>
<div className="icon_style"  style={{marginTop:"1rem"}}>{name=="default"||contextUse.newVal.logoUrl==""?iconA1_1():<img src={contextUse.newVal.logoUrl!}></img>}</div>

 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
<div className="button_row">
 <button className="btn-link_white full" >{theValue()![2]}</button>
<button className={name=="default"?"btn-link_white full":"btn-link full "+contextUse.newVal.color}>{theValue()![3]}</button>
<div>{theValue()![4]}</div>
 </div>
 </div>
</div>
</>
)


    }


export default B2_2