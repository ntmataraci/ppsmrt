
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const A1_3=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[2].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-a1_3 ${name!="default"&&contextUse.newVal.size}`}> 
<div className="content_box">
<div>Plans</div>
 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
<ul>
    <li><div><input type="radio" id="radio1" name="val"/>{theValue()![2]}</div><div>{theValue()![3]}</div></li>
    <li><div><input type="radio" id="radio2" name="val"/>{theValue()![4]}</div><div>{theValue()![5]}</div></li>
    <li><div><input type="radio" id="radio3" name="val"/>{theValue()![6]}</div><div>{theValue()![7]}</div></li>
</ul>
<div className="button_row">
 <button className="btn-link_white half" >{theValue()![8]}</button>
<button className={name=="default"?"btn-link_violet half":"btn-link half "+contextUse.newVal.color}>{theValue()![9]}</button>
 </div>
 </div>
</div>
</>
)


    }


export default A1_3