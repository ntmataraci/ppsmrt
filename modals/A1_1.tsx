import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const A1_1=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[0].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
  console.log(theValue())
return(
    <>
        {theValue()&&
<div className={`card-a1_1  ${name!="default"&&contextUse.newVal.size}`}> 
<div className={`content_box`}>
<div className="cross_icon" > <Modal_cross/> </div>
<div className="icon_style"  style={{marginTop:"1rem"}}>{name=="default"||contextUse.newVal.logoUrl==""?iconA1_1():<img src={contextUse.newVal.logoUrl!}></img>}</div>

 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
<input placeholder={theValue()![2]!}/> 
<div className="button_row">
 <button className="btn-link_white half" >{theValue()![3]}</button>
<button className={name=="default"?"btn-link_violet half":"btn-link half "+contextUse.newVal.color}>{theValue()![4]}</button>
 </div>
 </div>
</div>
            }
</>
)


    }


export default A1_1
