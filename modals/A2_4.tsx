import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross_white } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const A2_4=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[7].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-a2_4 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"violet"} `}> 
<div className={`content_box`}>
<div className="cross_icon" > <Modal_cross_white/> </div>
 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
<input  className="transparent" placeholder={theValue()![2]!}/> 
<div>{theValue()![3]}</div>
<div className="button_row">
 <button className={name=="default"?"btn-link_violet full":"btn-link full "+contextUse.newVal.color}  >{theValue()![4]}</button>
 </div>
 </div>
</div>
</>
)


    }


export default A2_4