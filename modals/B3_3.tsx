import { iconA1_1 } from "../components/Icons";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Modal_cross } from "../components/Icons";
import { ContextProvider } from "../functions/Context";
import { Props } from "../components/modal.types";
import { defaultContent } from "./defaultContent";

const B3_3 = ({ name }: Props) => {
  const contextUse = useContext(ContextProvider);
  const cloneDefault = defaultContent[22].content.slice();
  const changedText = contextUse.newVal.content;

  const theValue = () => {
    const catchVal = name == "default" ? cloneDefault : changedText;
    return catchVal;
  };

  return (
    <>
      <div
        className={`card-b3_3 ${name != "default" && contextUse.newVal.size}`} style={{textAlign:"left"}}
      >
        <div style={{display:"flex",justifyContent:"flex-start",flexDirection:"row",width:"100%",gap:"0.5rem",margin:"1rem", paddingLeft:"1rem"}}>
          {name == "default" || contextUse.newVal.logoUrl == "" ? (
            <img style={{width:"40px"}}
              src={defaultContent[22].logo}
            ></img>
          ) : (
            <img style={{width:"40px"}}
              src={contextUse.newVal.logoUrl!}
            ></img>
          )}
        
        <div
          style={{
            color: " #7D4AEA",
            fontWeight: "700",
            marginTop: "0.5rem",
            alignSelf: "flex-start",
          }}
        >
          {theValue()![4]}
        </div>
        </div>
        <div className="content_box">
          <div className="cross_icon">
            {" "}
            <Modal_cross />{" "}
          </div>
          <h2>{theValue()![0]}</h2>
          <div>{theValue()![1]}</div>
          <div className="button_row">
            <button
              className={
                name == "default"
                  ? "btn-link_violet half"
                  : "btn-link half " + contextUse.newVal.color
              }
            >
              {theValue()![2]}
            </button>
            <button className={"btn-link_white half"}>{theValue()![3]}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default B3_3;
