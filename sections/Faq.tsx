const plusIcon=()=>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="#999999"/>
</svg>

const minusIcon=()=>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9V11H15V9H5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#7D4AEA"/>
</svg>

interface faqType 
    {
        question:string;
        answer:string;
    }


const faqList:Array<faqType>=[{
    question:"How do I pay for the essentials or premium plan?",
    answer:"You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
},{
    question:"Can I cancel my essentials or premium plan subscription at my time?",
    answer:"You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
},{
    question:"How do I pay for the essentials or premium plan?",
    answer:"You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
},{
    question:"We need to add new users to our team, how will that be billed?",
    answer:"You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
},{
    question:"How do I pay for the essentials or premium plan?",
    answer:"You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
},{
    question:"Can I cancel my essentials or premium plan subscription at my time?",
    answer:"You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
}
]

import { Fragment, useState } from "react";
const Faq= ()=>{
const [openAnswer,setOpenAnswer]=useState<number>(-1)
const showReply = (x:number) =>{
setOpenAnswer(x)
x==openAnswer&&setOpenAnswer(-1)
}
    return(
        <div className="faq_container">
            <h3>Frequently Asked Questions</h3>
            <ul>
                {faqList.map((question,idx)=>
                <Fragment key={idx }>
                <li onClick={()=>showReply(idx)}>{question.question}{plusIcon()}</li>
                {openAnswer==idx&&<div>{question.answer}</div>}
                </Fragment>
                )}
            </ul>
        </div>
    )
}

export default Faq