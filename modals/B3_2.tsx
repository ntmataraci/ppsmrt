import { iconA1_1 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross_white } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"

const B3_2=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[21].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>
<div className={`card-b3_2 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"violet"}`} style={{padding:"0",alignItems:"normal",justifyContent:"space-between"}}> 
<div className="cross_icon" > <Modal_cross_white/> </div>
<div style={{display:"flex",flexDirection:"column", justifyContent:"space-between",gap:"6rem"}}>
<div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",marginTop:"5rem"}}>
<div className="icon_style"  style={{marginTop:"1rem",borderRadius:"50%",position:"absolute",top:"-50px"}}>{name=="default"||contextUse.newVal.logoUrl==""?iconA1_1():<img src={contextUse.newVal.logoUrl!}></img>}</div>
<h2>{theValue()![0]}</h2>
<div>{theValue()![6]}</div>
</div>
<div style={{display:"flex",justifyContent:"space-around", fontSize:"36px",backgroundColor:"white",height:"150px",width:"100%",alignItems:"center"}}>
<button className="b3_2_icons"  dangerouslySetInnerHTML={{__html:theValue()![1]!}}></button>
<button className="b3_2_icons" dangerouslySetInnerHTML={{__html:theValue()![2]!}}></button>
<button className="b3_2_icons"  dangerouslySetInnerHTML={{__html:theValue()![3]!}}></button>
<button className="b3_2_icons"  dangerouslySetInnerHTML={{__html:theValue()![4]!}}></button>
<button className="b3_2_icons"  dangerouslySetInnerHTML={{__html:theValue()![5]!}}></button>
</div>
</div>
</div>
</>
)


    }


export default B3_2