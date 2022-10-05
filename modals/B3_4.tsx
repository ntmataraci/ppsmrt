import { Modal_cross } from "../components/Icons";
import { useState, useContext } from "react";
import { ContextProvider } from "../functions/Context";
import { Props } from "../components/modal.types";
import { defaultContent } from "./defaultContent";
const B3_4 = ({ name }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contextUse = useContext(ContextProvider);
  const cloneDefault = defaultContent[20].content.slice();
  const changedText = contextUse.newVal.content;

  const theValue = () => {
    const catchVal = name == "default" ? cloneDefault : changedText;
    return catchVal;
  };

  return (
    <>
      <div
        className={`card-b3_1 ${name != "default" && contextUse.newVal.size}`}>
        <div className="cross_icon">
          <Modal_cross />
        </div>
        <div className="icon_style" id={name}>
          {name == "default" || contextUse.newVal.imgUrl == "" ? (
            <img
              onLoad={() => setIsLoaded(true)}
              src={defaultContent[20].img}
            ></img>
          ) : (
            <img
              onLoad={() => setIsLoaded(true)}
              src={contextUse.newVal.imgUrl!}
            ></img>
          )}
        </div>
        {theValue()![4]}
        <div className="content_box">
          <div style={{marginTop:"-20rem"}}>
            {name == "default" || contextUse.newVal.logoUrl == "" ? (
              <img
                onLoad={() => setIsLoaded(true)}
                src={defaultContent[20].logo}
              ></img>
            ) : (
              <img
                onLoad={() => setIsLoaded(true)}
                src={contextUse.newVal.logoUrl!}
              ></img>
            )}
          </div>
          <h2 style={{ lineHeight: "2.5rem" }}>{theValue()![0]}</h2>
          <div >{theValue()![1]}</div>
          <div className="button_row" style={{marginTop:"5rem"}}>
            <button className="btn-link_white half">   {theValue()![2]}</button>
            <button className={
                name == "default"
                  ? "btn-link_violet half"
                  : "btn-link half " + contextUse.newVal.color
              }
            >
              {theValue()![3]}
            </button>
          </div>
        </div>
      </div>
      {name === "changable" && (
        <div style={{ display: isLoaded ? "none" : "block" }}>
          Image Loading...
        </div>
      )}
    </>
  );
};

export default B3_4;
