import { Modal_cross } from "../components/Icons";
import { useState, useContext } from "react";
import { ContextProvider } from "../functions/Context";
import { Props } from "../components/modal.types";
import { defaultContent } from "./defaultContent";
const A3_2 = ({ name }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contextUse = useContext(ContextProvider);
  const cloneDefault = defaultContent[9].content.slice();
  const changedText = contextUse.newVal.content;

  const theValue = () => {
    const catchVal = name == "default" ? cloneDefault : changedText;
    return catchVal;
  };

  return (
    <>
      <div
        className={`card-a3_2 ${name != "default" && contextUse.newVal.size}`}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="cross_icon">
            <Modal_cross />
          </div>

          <div className="content_box">
            <h2>{theValue()![0]}</h2>
            <div>{theValue()![1]}</div>
            <input
              style={{ width: "100%" }}
              placeholder={theValue()![2]!} />
          
            <input
              style={{ width: "100%" }}
            placeholder={theValue()![3]!}/>
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
            <div> {theValue()![5]}</div>
          </div>
          <div className="icon_style" id={name}>
            {name == "default" || contextUse.newVal.imgUrl == "" ? (
              <img
                style={{ height: "100%" }}
                onLoad={() => setIsLoaded(true)}
                src={defaultContent[9].img}
              ></img>
            ) : (
              <img
                onLoad={() => setIsLoaded(true)}
                style={{ height: "100%" }}
                src={contextUse.newVal.imgUrl!}
              ></img>
            )}
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

export default A3_2;
