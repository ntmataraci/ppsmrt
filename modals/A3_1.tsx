
import { Modal_cross } from "../components/Icons";
import { useState, useContext } from "react";
import { ContextProvider } from "../functions/Context";
import { Props } from "../components/modal.types";
import { defaultContent } from "./defaultContent";
const A3_1 = ({ name }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contextUse = useContext(ContextProvider);
  const cloneDefault = defaultContent[8].content.slice();
  const changedText = contextUse.newVal.content;

  const theValue = () => {
    const catchVal = name == "default" ? cloneDefault : changedText;
    return catchVal;
  };

  return (
    <>
      <div
        className={`card-a3_1 ${name != "default" && contextUse.newVal.size}`}
      >
        <div className="cross_icon">
          <Modal_cross />
        </div>
        <div className="icon_style" id={name}>
          {name == "default" || contextUse.newVal.imgUrl == "" ? (
            <img
              onLoad={() => setIsLoaded(true)}
              src={defaultContent[8].img}
            ></img>
          ) : (
            <img
              onLoad={() => setIsLoaded(true)}
              src={contextUse.newVal.imgUrl!}
            ></img>
          )}
        </div>

  <div className="content_box">
        <h2>{theValue()![0]}</h2>
        <div>{theValue()![1]}</div>
        <input style={{width:"100%"}} placeholder={theValue()![2]!}/> 
        <input style={{width:"100%"}} placeholder={theValue()![3]!}/> 
        <div className="button_col">

          <button
            className={
              name == "default"
                ? "btn-link_violet full"
                : "btn-link full " + contextUse.newVal.color
            }
          >
            {theValue()![4]}
          </button>
        </div>
        <div>  {theValue()![5]}</div>
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

export default A3_1;
