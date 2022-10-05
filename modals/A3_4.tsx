
import { Modal_cross } from "../components/Icons";
import { useState, useContext } from "react";
import { ContextProvider } from "../functions/Context";
import { Props } from "../components/modal.types";
import { defaultContent } from "./defaultContent";
const A3_4 = ({ name }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contextUse = useContext(ContextProvider);
  const cloneDefault = defaultContent[11].content.slice();
  const changedText = contextUse.newVal.content;

  const theValue = () => {
    const catchVal = name == "default" ? cloneDefault : changedText;
    return catchVal;
  };

  return (
    <>

      <div
        className={`card-a3_4 ${name != "default" && contextUse.newVal.size}`}
      >
        <div style={{display:"flex",flexDirection:"row",height:"100%"}}>
        <div className="cross_icon">
          <Modal_cross />
        </div>
        <div style={{height:"100%"}} id={name} >
          {name == "default" || contextUse.newVal.imgUrl == "" ? (
            <img 
            style={{height:"100%",objectFit:"cover"}}
              onLoad={() => setIsLoaded(true)}
              src={defaultContent[11].img}
            ></img>
          ) : (
            <img
              onLoad={() => setIsLoaded(true)} style={{height:"100%"}}
              src={contextUse.newVal.imgUrl!}
            ></img>
          )}
        </div>
<div style={{position:"absolute",right:"-45%",backgroundColor:"transparent",top:"0",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <div className="content_box" style={{background:"white",height:"400px",width:contextUse.newVal.size=="Small"&&name!="default"?"250px":"80%",borderRadius:"2rem"}}>
        <h2>{theValue()![0]}</h2>
        <div>{theValue()![1]}</div>
        <input style={{width:"100%"}} placeholder={theValue()![2]!}/> 
        <input style={{width:"100%"}} placeholder= {theValue()![3]!}/> 
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

export default A3_4;
