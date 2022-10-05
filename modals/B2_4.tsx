import { iconA1_1, iconB2_3 } from "../components/Icons"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { Modal_cross } from "../components/Icons"
import { ContextProvider } from "../functions/Context"
import {Props} from "../components/modal.types"
import { defaultContent } from "./defaultContent"
const B2_4=({name}:Props)=>{
const contextUse=useContext(ContextProvider)
const cloneDefault=defaultContent[19].content.slice()
const changedText=contextUse.newVal.content

const theValue= () =>{
    const catchVal=name=="default"?cloneDefault:changedText
    return catchVal
}
        
return(
    <>

<div className={`card-b2_4 ${name!="default"?contextUse.newVal.size+" "+contextUse.newVal.color:"white"}`}> 
<div className="content_box" style={{justifyContent:"flex-start", alignItems:"flex-start",padding:"2rem 4rem"}}>
<div className="cross_icon" > <Modal_cross/> </div>
<div className="icon_style"  style={{marginTop:"1rem"}}>{name=="default"||contextUse.newVal.logoUrl==""?iconA1_1():<img src={contextUse.newVal.logoUrl!}></img>}</div>
<div>
 <h2>{theValue()![0]}</h2>
<div>{theValue()![1]}</div>
</div>
<div style={{display:"flex",gap:"0.9rem"}} >
<svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M17 3C19.7581 2.99083 22.4628 3.76017 24.8032 5.21959C27.1436 6.679 29.0246 8.76924 30.23 11.25C29.0172 13.725 27.1345 15.8102 24.7958 17.2686C22.4571 18.7269 19.7562 19.5001 17 19.5001C14.2438 19.5001 11.5429 18.7269 9.20422 17.2686C6.86552 15.8102 4.98279 13.725 3.77 11.25C4.97543 8.76924 6.85645 6.679 9.19682 5.21959C11.5372 3.76017 14.2419 2.99083 17 3ZM17 0C13.4382 0.00205301 9.95949 1.07623 7.01663 3.08272C4.07377 5.08922 1.80305 7.93511 0.5 11.25C1.80131 14.5661 4.07161 17.4131 7.01485 19.4199C9.9581 21.4266 13.4377 22.5 17 22.5C20.5623 22.5 24.0419 21.4266 26.9851 19.4199C29.9284 17.4131 32.1987 14.5661 33.5 11.25C32.197 7.93511 29.9262 5.08922 26.9834 3.08272C24.0405 1.07623 20.5618 0.00205301 17 0ZM17 7.5C17.7417 7.5 18.4667 7.71993 19.0834 8.13199C19.7001 8.54404 20.1807 9.12971 20.4645 9.81494C20.7484 10.5002 20.8226 11.2542 20.6779 11.9816C20.5332 12.709 20.1761 13.3772 19.6517 13.9017C19.1272 14.4261 18.459 14.7832 17.7316 14.9279C17.0042 15.0726 16.2502 14.9984 15.5649 14.7145C14.8797 14.4307 14.294 13.9501 13.882 13.3334C13.4699 12.7167 13.25 11.9917 13.25 11.25C13.2503 10.2555 13.6454 9.30185 14.3486 8.59864C15.0518 7.89544 16.0055 7.50027 17 7.5ZM17 4.5C15.665 4.5 14.3599 4.89588 13.2499 5.63758C12.1399 6.37928 11.2747 7.43349 10.7638 8.66689C10.2529 9.90029 10.1192 11.2575 10.3797 12.5669C10.6402 13.8762 11.283 15.079 12.227 16.023C13.171 16.967 14.3738 17.6098 15.6831 17.8703C16.9925 18.1308 18.3497 17.9971 19.5831 17.4862C20.8165 16.9753 21.8707 16.1101 22.6124 15.0001C23.3541 13.8901 23.75 12.585 23.75 11.25C23.7474 9.4606 23.0353 7.74525 21.7701 6.47995C20.5048 5.21465 18.7894 4.50265 17 4.5Z"/>
</svg>
    <h3>{theValue()![2]}</h3></div>
<div style={{fontSize:"16px"}}>{theValue()![3]}</div>
<div style={{display:"flex",gap:"0.9rem"}}>
<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.25L21 11V24.5H3V11L12 4.25ZM12 0.5L0 9.5V27.5H24V9.5L12 0.5Z"/>
</svg>

<h3>{theValue()![4]}</h3></div>
<div style={{fontSize:"16px"}}>{theValue()![5]}</div>
<div className="button_row" style={{margin:"auto"}}>
 <button className={name=="default"?"btn-link_white full":"btn-link full "+contextUse.newVal.color}>{theValue()![6]}</button>
 <button className="btn-link_white full">{theValue()![7]}</button>
 </div>
 </div>
</div>
</>
)


    }


export default B2_4