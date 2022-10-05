import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross_white } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const B1_2=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[13].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-b1_2 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"white"} `}> 
<div className={`content_box`}>
<div className="cross_icon" > <Modal_cross_white/> </div>
<div style={{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"flex-end",gap:"2rem",marginLeft:"1rem"}}>
<div style={{marginTop:"1rem"}}>{name=="default"||contextUse.newVal.imgUrl==""?iconA1_1():<img style={{width:contextUse.newVal.size=="Small"?"50px":contextUse.newVal.size=="Medium"?"70px":"100px" ,borderRadius:"50%",aspectRatio:"1/1"}} src={contextUse.newVal.imgUrl!}></img>}</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
<h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
</div>
</div>
<div>{theValue()![2]}</div>
<div>{theValue()![3]}</div>

 </div>
 
</div>
</>
)


    }


export default B1_2