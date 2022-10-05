import Upload from "../components/Upload";
import { Fragment, useContext, useEffect, useState } from "react";
import { ContextProvider } from "../functions/Context";
import { defaultContent } from "../modals/defaultContent";
import { dataType } from "../components/modal.types";
const Content = () => {
const contextUse = useContext(ContextProvider);


const contentHandler= (e:any,z:number) => {
  contextUse.shallowState.content[z]=e.target.value
  contextUse.changer?.((prev:dataType)=>({...prev,content: contextUse.shallowState.content}))
}


  return (
    <div className="content_container">
      <div>Edit Your Content</div>
      {contextUse.newVal.content&&contextUse.newVal.content.map((item:string,idx:number)=>
      <Fragment key={idx}>
      <input type="text" value={contextUse.newVal.content&&contextUse.newVal.content[idx]} onChange={(e)=>contentHandler(e,idx)}></input>
     </Fragment>
     )}
        <Upload header={"Upload Your Image"}/>
    </div>
  );
};

export default Content;
